import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolilo", // 👈 این خط به هیچ وجه نباید جا بیفته
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;