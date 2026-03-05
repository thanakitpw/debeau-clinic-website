import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DE BEAU CLINIC | คลินิกความงาม ปรับรูปหน้า ฟิลเลอร์",
  description:
    "คลินิกให้คำปรึกษาและมีประสบการณ์ด้านการปรับรูปหน้า โปรแกรมฟิลเลอร์เติมเต็มใต้ตา ขมับตอบ แก้มตอบ ร่องแก้ม คาง ริมฝีปาก คุณหมอดูแลให้เคสต่อเคส",
  keywords: ["ฟิลเลอร์", "DE BEAU CLINIC", "คลินิกความงาม", "ปรับรูปหน้า"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${notoSansThai.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
