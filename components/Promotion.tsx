"use client";

import { ArrowRight, Tag } from "lucide-react";

const promos = [
  {
    badge: "HOT DEAL",
    title: "โปรแกรมฟิลเลอร์ใต้ตา",
    subtitle: "เติมเต็ม ลดรอยหมองคล้ำ",
    desc: "ฟิลเลอร์คุณภาพสูง นำเข้าจากต่างประเทศ ดูแลโดยหมอโบโดยตรง",
    tag: "ฟิลเลอร์",
    accent: "#c38789",
  },
  {
    badge: "POPULAR",
    title: "โปรแกรมยกกระชับ Ulthera",
    subtitle: "ยกหน้า กระชับ ไม่ต้องผ่าตัด",
    desc: "เทคโนโลยี HIFU ระดับพรีเมียม ผลลัพธ์ชัดเจน ยาวนาน",
    tag: "Ulthera",
    accent: "#69554a",
  },
  {
    badge: "NEW",
    title: "Mesotherapy Cocktail",
    subtitle: "วิตามินบำรุงผิวเข้มข้น",
    desc: "สูตรพิเศษเฉพาะ De Beau Clinic ผิวใส ชุ่มชื้น ลดจุดด่างดำ",
    tag: "Mesotherapy",
    accent: "#8b7f7c",
  },
];

export default function Promotion() {
  return (
    <section
      id="promotion"
      className="py-24 px-6"
      style={{ backgroundColor: "#e8e7e5" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Special Offers</p>
          <h2 className="section-title">โปรโมชั่นพิเศษ</h2>
          <div className="divider-rose mt-4 mb-6" />
          <p
            className="text-sm font-light max-w-md mx-auto"
            style={{ color: "#8b7f7c" }}
          >
            ข้อเสนอพิเศษจาก De Beau Clinic สำหรับลูกค้าทุกท่าน
          </p>
        </div>

        {/* Promo Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col gap-5 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #e0ddd9",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
                style={{ backgroundColor: promo.accent }}
              />

              {/* Badge */}
              <div className="flex items-center gap-2">
                <Tag size={14} style={{ color: promo.accent }} />
                <span
                  className="text-xs tracking-[0.2em] font-semibold uppercase"
                  style={{ color: promo.accent }}
                >
                  {promo.badge}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 flex-1">
                <h3
                  className="text-xl font-medium leading-snug"
                  style={{ color: "#69554a" }}
                >
                  {promo.title}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: promo.accent }}
                >
                  {promo.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed font-light"
                  style={{ color: "#8b7f7c" }}
                >
                  {promo.desc}
                </p>
              </div>

              {/* Service tag */}
              <span
                className="self-start text-xs px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${promo.accent}15`,
                  color: promo.accent,
                }}
              >
                {promo.tag}
              </span>

              {/* CTA */}
              <a
                href="https://line.me/R/ti/p/@debeauclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200 group-hover:gap-3"
                style={{ color: promo.accent }}
              >
                สอบถามราคา <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        {/* Full Promo CTA */}
        <div className="text-center mt-12">
          <a
            href="/promotion"
            className="btn-primary"
          >
            ดูโปรโมชั่นทั้งหมด
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
