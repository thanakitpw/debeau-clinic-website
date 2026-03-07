"use client";

import Image from "next/image";
import { ArrowRight, Star, ChevronRight, MapPin, Phone, Mail, Check } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#e8e7e5" }}
    >
      {/* Full-width background image (desktop only) */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/hero-banner.jpg"
          alt="De Beau Clinic - หมอโบ พญ.ปารวัตร ดัชชวนิชย์"
          fill
          priority
          className="object-cover object-[center_20%]"
        />
        {/* Smoother gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(232,231,229,0.95) 0%, rgba(232,231,229,0.85) 35%, rgba(232,231,229,0.4) 65%, rgba(232,231,229,0.15) 85%, rgba(232,231,229,0.0) 100%)",
          }}
        />
        {/* Gentle bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: "linear-gradient(to top, rgba(232,231,229,0.88) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Thin vertical decorative line */}
      <div
        className="absolute left-0 top-0 h-full w-px opacity-20"
        style={{ backgroundColor: "#c38789", left: "8%" }}
      />

      {/* Content — left side only */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28 pb-24">
        <div className="max-w-xl flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start">
            <span className="w-8 h-px" style={{ backgroundColor: "#c38789" }} />
            <span
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: "#c38789" }}
            >
              Beauty Clinic
            </span>
          </div>

          {/* Headline */}
          <div>
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="DE BEAU CLINIC"
                width={400}
                height={80}
                className="h-20 w-auto"
                style={{ display: "block" }}
              />
            </div>
            <p className="text-xl font-light" style={{ color: "#8b7f7c" }}>
              ปรับรูปหน้า เติมเต็มความมั่นใจ
              <br />
              ด้วยมือแพทย์ผู้เชี่ยวชาญ
            </p>
          </div>

          {/* Description */}
          <p
            className="text-base leading-relaxed max-w-md font-light"
            style={{ color: "#69554a", opacity: 0.85 }}
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
          <div
            className="flex gap-8 mt-4 pt-6 border-t"
            style={{ borderColor: "#c7bfb5" }}
          >
            {[
              { value: "5,000+", label: "เคสที่ดูแล" },
              { value: "10+", label: "ปีประสบการณ์" },
              { value: "98%", label: "ลูกค้าพึงพอใจ" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-2xl font-semibold" style={{ color: "#c38789" }}>
                  {s.value}
                </span>
                <span className="text-xs" style={{ color: "#8b7f7c" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating "ดูแลทุกเคสโดยแพทย์" tag */}
        <div
          className="inline-flex items-center gap-2 mt-8 px-4 py-3 rounded-2xl shadow-lg"
          style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} fill="#c38789" color="#c38789" />
            ))}
          </div>
          <span className="text-xs font-medium" style={{ color: "#69554a" }}>
            <Check size={11} className="inline mr-1" style={{ color: "#c38789" }} />
            ดูแลทุกเคสโดยแพทย์ · รีวิวจริง 5,000+ เคส
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#69554a" }}>
          scroll
        </span>
        <div className="w-px h-10 animate-pulse" style={{ backgroundColor: "#c38789" }} />
      </div>
    </section>
  );
}
