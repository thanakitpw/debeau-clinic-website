"use client";

import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#e8e7e5" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at top right, #c38789 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-5"
        style={{
          background: "#69554a",
          filter: "blur(80px)",
          transform: "translate(-40%, 40%)",
        }}
      />

      {/* Thin vertical decorative line */}
      <div
        className="absolute left-0 top-0 h-full w-px opacity-20"
        style={{ backgroundColor: "#c38789", left: "8%" }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full pt-28 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start">
            <span
              className="w-8 h-px"
              style={{ backgroundColor: "#c38789" }}
            />
            <span
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: "#c38789" }}
            >
              Beauty Clinic
            </span>
          </div>

          {/* Headline */}
          <div>
            <h1
              className="text-5xl lg:text-6xl font-light leading-[1.15] tracking-wide"
              style={{ color: "#69554a" }}
            >
              DE BEAU
            </h1>
            <h2
              className="text-5xl lg:text-6xl font-light leading-[1.15] tracking-wide"
              style={{ color: "#69554a" }}
            >
              CLINIC
            </h2>
            <p
              className="mt-4 text-xl font-light"
              style={{ color: "#8b7f7c" }}
            >
              ปรับรูปหน้า เติมเต็มความมั่นใจ
              <br />
              ด้วยมือแพทย์ผู้เชี่ยวชาญ
            </p>
          </div>

          {/* Description */}
          <p
            className="text-base leading-relaxed max-w-md font-light"
            style={{ color: "#69554a", opacity: 0.8 }}
          >
            คลินิกให้คำปรึกษาและมีประสบการณ์ด้านการปรับรูปหน้า
            โปรแกรมฟิลเลอร์เติมเต็มใต้ตา ขมับตอบ แก้มตอบ ร่องแก้ม คาง
            ริมฝีปาก คุณหมอดูแลให้เคสต่อเคส
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="https://line.me/R/ti/p/@debeauclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              ปรึกษาฟรี
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-outline">
              ดูบริการทั้งหมด
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-4 pt-6 border-t" style={{ borderColor: "#c7bfb5" }}>
            {[
              { value: "5,000+", label: "เคสที่ดูแล" },
              { value: "10+", label: "ปีประสบการณ์" },
              { value: "98%", label: "ลูกค้าพึงพอใจ" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span
                  className="text-2xl font-semibold"
                  style={{ color: "#c38789" }}
                >
                  {s.value}
                </span>
                <span className="text-xs" style={{ color: "#8b7f7c" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Visual Card */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Main image placeholder - elegant frame */}
          <div className="relative">
            {/* Outer decorative border */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                border: "1px solid",
                borderColor: "#c38789",
                opacity: 0.3,
                transform: "translate(12px, 12px)",
              }}
            />

            {/* Main card */}
            <div
              className="relative w-[340px] h-[480px] rounded-3xl overflow-hidden flex flex-col items-center justify-center"
              style={{ backgroundColor: "#c7bfb5", opacity: 0.9 }}
            >
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(195,135,137,0.15) 0%, rgba(105,85,74,0.2) 100%)",
                }}
              />

              {/* Clinic logo text in card */}
              <div className="relative z-10 text-center px-8">
                <div
                  className="text-4xl font-extralight tracking-[0.4em] mb-2"
                  style={{ color: "#69554a" }}
                >
                  DE
                </div>
                <div
                  className="text-6xl font-light tracking-[0.3em]"
                  style={{ color: "#69554a" }}
                >
                  BEAU
                </div>
                <div
                  className="mt-3 text-xs tracking-[0.35em] uppercase"
                  style={{ color: "#8b7f7c" }}
                >
                  Beauty Clinic
                </div>
                <div
                  className="mt-6 w-12 h-px mx-auto"
                  style={{ backgroundColor: "#c38789" }}
                />
                <div
                  className="mt-6 text-sm font-light leading-relaxed"
                  style={{ color: "#69554a" }}
                >
                  ความงามที่คุณสัมผัสได้
                  <br />
                  ความมั่นใจที่ยั่งยืน
                </div>
              </div>

              {/* Bottom badge */}
              <div
                className="absolute bottom-6 left-6 right-6 flex items-center gap-2 px-4 py-3 rounded-2xl"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      fill="#c38789"
                      color="#c38789"
                    />
                  ))}
                </div>
                <span className="text-xs font-medium" style={{ color: "#69554a" }}>
                  รีวิวจากลูกค้าจริง 5,000+ เคส
                </span>
              </div>
            </div>
          </div>

          {/* Floating tag */}
          <div
            className="absolute -left-4 top-1/3 rounded-2xl px-4 py-3 shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            <p className="text-xs font-medium" style={{ color: "#69554a" }}>
              ✦ ดูแลทุกเคสโดยแพทย์
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#69554a" }}>
          scroll
        </span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ backgroundColor: "#c38789" }}
        />
      </div>
    </section>
  );
}
