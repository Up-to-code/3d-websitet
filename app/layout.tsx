import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground";
import AiAssistantWidget from "@/components/AiAssistantWidget";
import LoadingScreen from "@/components/LoadingScreen";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "أحمد منصور | مطور برمجيات + إدارة أعمال",
  description: "مطور Full-Stack وخريج إدارة أعمال. أبني حلولاً برمجية تحقق نتائج ملموسة لعملك.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased bg-[#050505]`}>
        {/* Global Background */}
        <div className="fixed inset-0 z-[-2]">
          {/* Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <SpaceBackground />
        <LoadingScreen />
        {children}
        <AiAssistantWidget />
      </body>
    </html>
  );
}
