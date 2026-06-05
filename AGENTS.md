<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- CODEGRAPH_START -->
## CodeGraph

This project can use a CodeGraph MCP server (`codegraph_*` tools) when `.codegraph/` has been initialized. CodeGraph is a tree-sitter-parsed knowledge graph of symbols, edges, and files.

Use codegraph for structural questions such as where a symbol is defined, what calls it, what it calls, flow tracing, impact analysis, or focused area context. Use native text search for literal strings, comments, log messages, or after a specific file is already open.

If `.codegraph/` does not exist and structural analysis is needed, ask whether to run `codegraph init -i` to build the index.
<!-- CODEGRAPH_END -->
