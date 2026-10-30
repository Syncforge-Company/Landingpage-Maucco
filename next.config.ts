import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["chauncey-palaeobotanic-reatha.ngrok-free.dev"],
  async rewrites() {
    return [{ source: "/llm.txt", destination: "/llms.txt" }];
  },
};

export default nextConfig;
