import { build } from "esbuild";

const options = {
  entryPoints: ["./main.js"],
  target: ["node10.4"],
  outdir: "dist",
  sourcemap: true,
  splitting: true,
  minify: true,
  bundle: true,
  platform: "node",
  format: "esm",
  define: {
    "process.env.NODE_ENV": '"development"',
  },
  external: ["./node_modules/*"],
  loader: {
    ".glsl": "text",
  },
};

build(options).catch(() => process.exit(1));
