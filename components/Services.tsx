"use client";

import { type ReactNode } from "react";
import { ArrowRight, Syringe, Sparkles, Radio, Zap, FlaskConical, Gem } from "lucide-react";

const services: {
  id: number;
  title: string;
  titleTh: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  href: string;
}[] = [
  {
    id: 1,
    title: "FILLER",
    titleTh: "ฟิลเลอร์",
    description:
      "เติมเต็มใต้ตา ขมับตอบ แก้มตอบ ร่องแก้ม คาง ริมฝีปาก และปรับรูปหน้า",
    tags: ["ฟิลเลอร์ใต้ตา", "ฟิลเลอร์ปาก", "ฉีดสลายฟิลเลอร์"],
    icon: <Syringe size={22} />,
    href: "/filler",
  },
  {
    id: 2,
    title: "BOTOX",
    titleTh: "ลดริ้วรอย",
    description:
      "ลดริ้วรอยหน้าผาก ระหว่างคิ้ว หางตา ลดกรามปรับรูปหน้าเรียว ยกกระชับหน้า",
    tags: ["ลดริ้วรอย", "ปรับรูปหน้า", "ลดกราม"],
    icon: <Sparkles size={22} />,
    href: "/botox",
  },
  {
    id: 3,
    title: "ULTHERA",
    titleTh: "ยกกระชับหน้า",
    description: "ยกกระชับหน้าโดยไม่ต้องผ่าตัด ด้วยเทคโนโลยีคลื่นเสียงความถี่สูง",
    tags: ["ยกกระชับ", "Non-surgical", "Lifting"],
    icon: <Radio size={22} />,
    href: "/ulthera",
  },
  {
    id: 4,
    title: "LASER",
    titleTh: "ทำ Laser หน้าใส",
    description:
      "Q-SWITCH ND YAG ฝ้า กระ จุดด่างดำ · LUMENIS ONE รอยแดง ฆ่าเชื้อสิว · FRAXEL รอยแผลเป็น หลุมสิว · HAIR REMOVAL กำจัดขน",
    tags: ["Q-Switch", "Fraxel", "Hair Removal"],
    icon: <Zap size={22} />,
    href: "/laser",
  },
  {
    id: 5,
    title: "MESOTHERAPY",
    titleTh: "เมโสเธอราพี",
    description: "หน้าใส ลดเลือนจุดด่างดำ สลายไขมัน ลดเหนียง",
    tags: ["หน้าใส", "สลายไขมัน", "ลดเหนียง"],
    icon: <FlaskConical size={22} />,
    href: "/mesotherapy",
  },
  {
    id: 6,
    title: "FACIAL TREATMENT",
    titleTh: "ทรีตเมนต์ผิวหน้า",
    description:
      "ผลัดเซลล์ผิวเก่า ฟื้นฟูเซลล์ผิวใหม่ คืนความอ่อนเยาว์ให้กับผิว",
    tags: ["ผลัดเซลล์ผิว", "ฟื้นฟูผิว", "Anti-aging"],
    icon: <Gem size={22} />,
    href: "/facial-treatments",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 px-6"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">บริการของเรา</h2>
          <div className="divider-rose mt-4 mb-6" />
          <p
            className="max-w-xl mx-auto text-sm leading-relaxed font-light"
            style={{ color: "#8b7f7c" }}
          >
            บริการครบครัน ดูแลโดยแพทย์ผู้เชี่ยวชาญ
            ให้คำปรึกษาและวางแผนการรักษาเฉพาะบุคคล
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <a
              key={service.id}
              href={service.href}
              className="group relative flex flex-col gap-4 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                backgroundColor: "#faf9f8",
                border: "1px solid",
                borderColor: "#e0ddd9",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-light transition-colors duration-300 group-hover:bg-[#c38789] group-hover:text-white"
                style={{ backgroundColor: "#c7bfb5", color: "#69554a" }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <div>
                <p
                  className="text-xs tracking-[0.2em] uppercase font-medium mb-1"
                  style={{ color: "#c38789" }}
                >
                  {service.title}
                </p>
                <h3
                  className="text-xl font-medium"
                  style={{ color: "#69554a" }}
                >
                  {service.titleTh}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed font-light flex-1"
                style={{ color: "#8b7f7c" }}
              >
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(195,135,137,0.1)",
                      color: "#c38789",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "#c38789" }}
              >
                ดูเพิ่มเติม <ArrowRight size={12} />
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, #c38789, #8b7f7c)",
                }}
              />
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="/services"
            className="btn-outline"
          >
            ดูบริการทั้งหมด
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
