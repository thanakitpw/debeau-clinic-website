"use client";

import { CheckCircle } from "lucide-react";

const highlights = [
  "แพทย์เฉพาะทางด้านความงาม ประสบการณ์กว่า 10 ปี",
  "ดูแลทุกเคสด้วยตนเอง ไม่ส่งต่อให้พยาบาล",
  "วางแผนการรักษาเฉพาะบุคคล (Personalized Treatment)",
  "ใช้ผลิตภัณฑ์ได้มาตรฐาน ปลอดภัย นำเข้าจากต่างประเทศ",
  "คลินิกมาตรฐาน บรรยากาศอบอุ่น เป็นกันเอง",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#e8e7e5" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Visual */}
        <div className="relative flex justify-center">
          {/* Background shapes */}
          <div
            className="absolute w-72 h-72 rounded-full opacity-20"
            style={{
              backgroundColor: "#c38789",
              top: "10%",
              left: "5%",
              filter: "blur(60px)",
            }}
          />

          {/* Main portrait frame */}
          <div className="relative">
            {/* Accent border */}
            <div
              className="absolute rounded-3xl"
              style={{
                inset: 0,
                border: "1px solid #c38789",
                opacity: 0.4,
                transform: "translate(10px, 10px)",
                borderRadius: "1.5rem",
              }}
            />

            {/* Card */}
            <div
              className="relative w-[300px] md:w-[360px] h-[420px] rounded-3xl flex flex-col items-center justify-center overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #c7bfb5 0%, #b5aba0 100%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, #c38789, transparent 60%)",
                }}
              />
              <div className="relative z-10 text-center px-8">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
                >
                  👩‍⚕️
                </div>
                <div
                  className="text-2xl font-light mb-1"
                  style={{ color: "#fff" }}
                >
                  หมอโบ
                </div>
                <div
                  className="text-xs tracking-[0.2em] uppercase mb-4"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  Dr. Beau
                </div>
                <div
                  className="w-8 h-px mx-auto mb-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                />
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Beauty Clinic Specialist
                </p>
              </div>
            </div>
          </div>

          {/* Experience badge */}
          <div
            className="absolute -right-2 top-8 rounded-2xl px-5 py-4 shadow-lg text-center"
            style={{ backgroundColor: "#fff" }}
          >
            <div
              className="text-3xl font-semibold"
              style={{ color: "#c38789" }}
            >
              10+
            </div>
            <div className="text-xs mt-1" style={{ color: "#8b7f7c" }}>
              ปีประสบการณ์
            </div>
          </div>

          {/* Cases badge */}
          <div
            className="absolute -left-2 bottom-12 rounded-2xl px-5 py-4 shadow-lg text-center"
            style={{ backgroundColor: "#69554a" }}
          >
            <div className="text-3xl font-semibold text-white">5K+</div>
            <div className="text-xs mt-1 text-white opacity-80">เคสที่ดูแล</div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="section-subtitle text-left" style={{ textAlign: "left" }}>
              เกี่ยวกับหมอโบ
            </p>
            <h2
              className="text-3xl lg:text-4xl font-light leading-snug mt-2"
              style={{ color: "#69554a" }}
            >
              แพทย์ผู้เชี่ยวชาญ
              <br />
              <span style={{ color: "#c38789" }}>ด้านความงามและสุขภาพ</span>
            </h2>
          </div>

          <p
            className="text-base leading-relaxed font-light"
            style={{ color: "#8b7f7c" }}
          >
            หมอโบ มีความเชี่ยวชาญด้านการปรับรูปหน้า และการรักษาทางความงาม
            ด้วยประสบการณ์กว่า 10 ปี หมอดูแลลูกค้าทุกเคสด้วยตนเอง
            เพื่อให้มั่นใจว่าผลลัพธ์ที่ได้ตรงตามความต้องการและปลอดภัยที่สุด
          </p>

          {/* Highlights */}
          <div className="flex flex-col gap-3 mt-2">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#c38789" }}
                />
                <span
                  className="text-sm leading-relaxed"
                  style={{ color: "#69554a" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-wrap gap-4">
            <a
              href="https://debeauclinic.com/about-dr-beau/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              อ่านประวัติเพิ่มเติม
            </a>
            <a
              href="https://line.me/R/ti/p/@debeauclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              ปรึกษาหมอโบ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
