import type { NextConfig } from "next";

// GitHub Pages subpath support: set NEXT_PUBLIC_BASE_PATH=/repo-name when
// deploying to https://<user>.github.io/<repo-name>/. Leave empty for root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
