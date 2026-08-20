import type { Metadata } from "next";
// فونت Vazirmatn رو مستقیم می‌خونیم
import { Vazirmatn } from "next/font/google";
import "./globals.css";

// تنظیمات فونت Vazirmatn
const vazir = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-vazir', // تعریف یک متغیر CSS برای فونت
});

export const metadata: Metadata = {
  title: "امید عسگری | توسعه‌دهنده وب و فرانت‌اند",
  description: "پورتفولیوی شخصی امید عسگری - متخصص توسعه فرانت‌اند، React، Next.js و سئو تکنیکال",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} antialiased`}
    >
      <body className={vazir.className}>{children}</body>
    </html>
  );
}
