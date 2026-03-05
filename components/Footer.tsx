"use client";

const footerLinks = [
  {
    title: "บริการ",
    links: [
      { label: "ฟิลเลอร์", href: "https://debeauclinic.com/filler/" },
      { label: "ลดริ้วรอย (Botox)", href: "https://debeauclinic.com/botox/" },
      { label: "ยกกระชับ (Ulthera)", href: "https://debeauclinic.com/ulthera/" },
      { label: "Laser หน้าใส", href: "https://debeauclinic.com/laser/" },
      { label: "Mesotherapy", href: "https://debeauclinic.com/mesotherapy/" },
      { label: "Facial Treatment", href: "https://debeauclinic.com/facial-treatments/" },
    ],
  },
  {
    title: "เกี่ยวกับเรา",
    links: [
      { label: "เกี่ยวกับหมอโบ", href: "https://debeauclinic.com/about-dr-beau/" },
      { label: "รีวิวลูกค้า", href: "https://debeauclinic.com/customer-reviews/" },
      { label: "โปรโมชั่น", href: "https://debeauclinic.com/promotion/" },
      { label: "บทความ", href: "https://debeauclinic.com/บทความ/" },
      { label: "ติดต่อเรา", href: "https://debeauclinic.com/contact-us/" },
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
            <div
              className="text-2xl font-light tracking-[0.3em] uppercase"
              style={{ color: "#e8e7e5" }}
            >
              DE BEAU
            </div>
            <div
              className="text-xs tracking-[0.3em] uppercase mt-1"
              style={{ color: "#c38789" }}
            >
              Beauty Clinic
            </div>
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
