"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const footerLinks = [
  {
    title: "บริการ",
    links: [
      { label: "ฟิลเลอร์", href: "/filler" },
      { label: "ลดริ้วรอย (Botox)", href: "/botox" },
      { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
      { label: "Laser หน้าใส", href: "/laser" },
      { label: "Mesotherapy", href: "/mesotherapy" },
      { label: "Facial Treatment", href: "/facial-treatments" },
    ],
  },
  {
    title: "เกี่ยวกับเรา",
    links: [
      { label: "เกี่ยวกับหมอโบ", href: "/about-dr-beau" },
      { label: "รีวิวลูกค้า", href: "/customer-reviews" },
      { label: "โปรโมชั่น", href: "/promotion" },
      { label: "บทความ", href: "/blog" },
      { label: "ติดต่อเรา", href: "/contact-us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#3a2e2b" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div>
            <Image
              src="/logo.png"
              alt="DE BEAU CLINIC"
              width={180}
              height={36}
              className="h-9 w-auto"
              style={{ display: "block" }}
            />
          </div>
          <p
            className="text-sm leading-relaxed font-light"
            style={{ color: "rgba(232,231,229,0.6)" }}
          >
            คลินิกความงาม ดูแลโดยแพทย์ผู้เชี่ยวชาญ
            มีประสบการณ์กว่า 10 ปี บริการครบครัน
            ปลอดภัย ได้มาตรฐาน
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://line.me/R/ti/p/@debeauclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#06C755", color: "#fff" }}
            >
              LINE @debeauclinic
            </a>
          </div>
        </div>

        {/* Links */}
        {footerLinks.map((col) => (
          <div key={col.title} className="flex flex-col gap-4">
            <h4
              className="text-xs tracking-[0.2em] uppercase font-semibold"
              style={{ color: "#c38789" }}
            >
              {col.title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light transition-colors duration-200 hover:opacity-100"
                    style={{ color: "rgba(232,231,229,0.6)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="border-t px-6 py-5"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-xs font-light"
            style={{ color: "rgba(232,231,229,0.4)" }}
          >
            © 2025 De Beau Clinic. All rights reserved.
          </p>
          <p
            className="text-xs font-light"
            style={{ color: "rgba(232,231,229,0.4)" }}
          >
            De Beau Beauty Clinic · กรุงเทพมหานคร
          </p>
        </div>
      </div>
    </footer>
  );
}
