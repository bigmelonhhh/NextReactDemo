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

test("homepage mirrors the Zencare landing page core content", async () => {
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

    assert.match(html, /智医康科技/);
    assert.match(html, /基于AI与智能硬件的肺癌数字化康复管理/);
    assert.match(html, /服务载体/);
    assert.match(html, /数字疗法内容/);
    assert.match(html, /三端协同数字化平台/);
    assert.match(html, /关于智医康/);
    assert.match(html, /public\/images\/zencare|\/images\/zencare/);
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
