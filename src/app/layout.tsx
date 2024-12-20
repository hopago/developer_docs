import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import "./globals.css";

export const gothic = Nanum_Gothic({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HoPlog",
  description: "Shared Log by HoPlog",
  icons: {
    icon: ["/favicon/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${gothic.className} antialiased`}>{children}</body>
    </html>
  );
}
