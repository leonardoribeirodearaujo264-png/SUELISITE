import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the tracing root to this project, so a stray lockfile in a parent
  // folder can never make Next trace the wrong directory.
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
