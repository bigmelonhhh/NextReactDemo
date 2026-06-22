import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { test } from "node:test";

const port = 3210;
const baseUrl = `http://127.0.0.1:${port}`;

async function waitForServer() {
  const deadline = Date.now() + 45_000;

  while (Date.now() < deadline) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        return response;
      }
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }

  throw new Error("Next.js dev server did not become ready in time");
}

test("homepage mirrors the Zhuofan official site core content", async () => {
  let logs = "";
  const server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "dev",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    {
      shell: false,
      stdio: "pipe",
    },
  );

  server.stdout.on("data", (chunk) => {
    logs += chunk.toString();
  });
  server.stderr.on("data", (chunk) => {
    logs += chunk.toString();
  });

  try {
    const response = await waitForServer();
    const html = await response.text();

    assert.match(html, /卓繁信息/);
    assert.match(html, /资讯动态/);
    assert.match(html, /客户案例/);
    assert.match(html, /解决方案/);
    assert.match(html, /一网通办解决方案/);
    assert.match(html, /地址：上海市徐汇区桂平路418号A座21层/);
    assert.match(html, /\/images\/zhuofan/);
  } finally {
    if (server.pid) {
      await new Promise((resolve) => {
        const killer = spawn("taskkill", ["/PID", String(server.pid), "/T", "/F"], {
          shell: false,
          stdio: "ignore",
        });
        killer.on("exit", resolve);
      });
    }
  }

  assert.ok(logs.includes("Ready") || logs.includes("Local"), logs);
});
