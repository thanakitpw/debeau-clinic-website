"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const services = [
  { label: "ฟิลเลอร์", href: "/filler" },
  { label: "ลดริ้วรอย (Botox)", href: "/botox" },
  { label: "ยกกระชับ (Ulthera)", href: "/ulthera" },
  { label: "Laser หน้าใส", href: "/laser" },
  { label: "Mesotherapy", href: "/mesotherapy" },
  { label: "Facial Treatments", href: "/facial-treatments" },
];

const navLinks = [
  { label: "หน้าแรก", href: "/" },
  { label: "บริการ", href: "/filler", hasDropdown: true },
  { label: "เกี่ยวกับหมอโบ", href: "/about-dr-beau" },
  { label: "รีวิวลูกค้า", href: "/customer-reviews" },
  { label: "โปรโมชั่น", href: "/promotion" },
  { label: "บทความ", href: "/blog" },
  { label: "ติดต่อเรา", href: "/contact-us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isServiceActive = services.some((s) => pathname.startsWith(s.href));
  const isHomepage = pathname === "/";
  const solidBg = scrolled || !isHomepage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidBg ? "bg-white/97 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="DE BEAU CLINIC"
            width={260}
            height={52}
            className="h-13 w-auto"
            style={{ display: "block" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-sm tracking-wide transition-opacity duration-200 hover:opacity-70"
                  style={{ color: isServiceActive ? "#c38789" : "#69554a" }}
                >
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 rounded-2xl shadow-xl overflow-hidden py-2"
                    style={{ backgroundColor: "#fff", border: "1px solid #e0ddd9" }}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex items-center px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-[#e8e7e5]"
                        style={{ color: pathname.startsWith(s.href) ? "#c38789" : "#69554a" }}
                        onClick={() => setServicesOpen(false)}
                      >
                        {pathname.startsWith(s.href) && (
                          <span className="w-1.5 h-1.5 rounded-full mr-2 shrink-0" style={{ backgroundColor: "#c38789" }} />
                        )}
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide transition-opacity duration-200 hover:opacity-70 relative"
                style={{ color: isActive(link.href) ? "#c38789" : "#69554a" }}
              >
                {link.label}
                {isActive(link.href) && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px rounded-full"
                    style={{ backgroundColor: "#c38789" }}
                  />
                )}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://line.me/R/ti/p/@debeauclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: "#06C755", color: "#fff" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            ADD LINE
          </a>
          <a
            href="tel:02-000-0000"
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{ color: "#c38789" }}
          >
            <Phone size={15} />
            <span>โทรนัด</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          style={{ color: "#69554a" }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white backdrop-blur-md border-t px-6 py-6 flex flex-col gap-1" style={{ borderColor: "#e8e7e5" }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key="services">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-base font-medium"
                  style={{ color: isServiceActive ? "#c38789" : "#69554a" }}
                >
                  {link.label}
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mb-2">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => { setIsOpen(false); setServicesOpen(false); }}
                        className="py-2 text-sm"
                        style={{ color: pathname.startsWith(s.href) ? "#c38789" : "#8b7f7c" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-base font-medium"
                style={{ color: isActive(link.href) ? "#c38789" : "#69554a" }}
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href="https://line.me/R/ti/p/@debeauclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium mt-3"
            style={{ backgroundColor: "#06C755", color: "#fff" }}
          >
            ADD LINE @debeauclinic
          </a>
        </div>
      )}
    </header>
  );
}
