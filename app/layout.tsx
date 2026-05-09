import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReconAI - AI Crime Scene Reconstruction",
  description: "AI-Powered Crime Scene Reconstruction and Investigation Assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-cyber-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
