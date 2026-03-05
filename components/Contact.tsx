"use client";

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "โทรศัพท์",
    value: "02-000-0000",
    href: "tel:02-000-0000",
  },
  {
    icon: MapPin,
    label: "ที่ตั้งคลินิก",
    value: "กรุงเทพมหานคร",
    href: "https://debeauclinic.com/contact-us/",
  },
  {
    icon: Clock,
    label: "เวลาทำการ",
    value: "จันทร์–เสาร์ 10:00–19:00 น.",
    href: null,
  },
  {
    icon: MessageCircle,
    label: "LINE Official",
    value: "@debeauclinic",
    href: "https://line.me/R/ti/p/@debeauclinic",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ backgroundColor: "#69554a" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.3em] uppercase font-medium mb-3"
            style={{ color: "#c38789" }}
          >
            Contact Us
          </p>
          <h2
            className="text-3xl font-light tracking-wide"
            style={{ color: "#fff" }}
          >
            ติดต่อเรา
          </h2>
          <div
            className="w-14 h-0.5 mx-auto mt-4 mb-6"
            style={{
              background: "linear-gradient(to right, #c38789, #8b7f7c)",
            }}
          />
          <p
            className="text-sm font-light max-w-md mx-auto"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            พร้อมให้คำปรึกษาและดูแลคุณ ติดต่อเราได้หลายช่องทาง
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Contact Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              const content = (
                <div
                  key={idx}
                  className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-200 hover:bg-white/5"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(195,135,137,0.2)" }}
                  >
                    <Icon size={20} style={{ color: "#c38789" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs tracking-wide uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-base font-light"
                      style={{ color: "#fff" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={idx}>{content}</div>
              );
            })}
          </div>

          {/* Right - CTA Card */}
          <div
            className="rounded-3xl p-10 flex flex-col items-center gap-6 text-center"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
          >
            {/* LINE Icon */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#06C755" }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </div>

            <div>
              <h3
                className="text-2xl font-light mb-2"
                style={{ color: "#fff" }}
              >
                ปรึกษาหมอโบฟรี!
              </h3>
              <p
                className="text-sm font-light leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                ADD LINE เพื่อนัดปรึกษา ถามเรื่องการรักษา
                หรือสอบถามราคาได้เลยค่ะ
                <br />
                หมอโบตอบเองทุกเคส
              </p>
            </div>

            <a
              href="https://line.me/R/ti/p/@debeauclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl text-base font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: "#06C755", color: "#fff" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              ADD LINE @debeauclinic
            </a>

            <p
              className="text-xs font-light"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              ตอบกลับภายใน 24 ชั่วโมง
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
