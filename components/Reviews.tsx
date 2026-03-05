"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "คุณจ๊ะจ๋า",
    handle: "@jaja",
    rating: 5,
    text: "ประทับใจมากค่ะ หมอโบดูแลละเอียดมาก อธิบายทุกขั้นตอนก่อนทำ ผลลัพธ์ออกมาสวยมาก เป็นธรรมชาติ ไม่โอเวอร์ บอกต่อเพื่อนหลายคนเลยค่ะ",
    service: "ฟิลเลอร์ใต้ตา",
  },
  {
    name: "คุณกิ๊ฟ",
    handle: "G20",
    rating: 5,
    text: "ทำฟิลเลอร์ปากมาหลายที่ แต่ที่นี่ดีที่สุดเลยค่ะ หมอใส่ใจและดูแลหลังทำด้วย ผลลัพธ์สวยมาก ปากดูอิ่มขึ้นแต่เป็นธรรมชาติมากๆ",
    service: "ฟิลเลอร์ปาก",
  },
  {
    name: "คุณแนนนี่",
    handle: "Girly Berry",
    rating: 5,
    text: "ทำ Ulthera ยกกระชับหน้า รู้สึกหน้าตึงขึ้นชัดเจนหลังทำ หมอโบเป็นกันเองมากค่ะ คุยง่าย ให้คำแนะนำดี ราคาก็ยุติธรรม",
    service: "Ulthera ยกกระชับหน้า",
  },
  {
    name: "คุณอั๋น",
    handle: "ชยพล บุนนาค",
    rating: 5,
    text: "มาฉีดโบท็อกซ์ลดริ้วรอย หมอโบเชี่ยวชาญมากครับ ผลลัพธ์เป็นธรรมชาติ หน้าดูอ่อนเยาว์ขึ้นเยอะ ไม่แข็งทื่อ มาซ้ำทุก 4 เดือนเลยครับ",
    service: "ลดริ้วรอย Botox",
  },
  {
    name: "คุณแน๊ตตี้",
    handle: "นาตาชา",
    rating: 5,
    text: "ทำ Laser รักษาฝ้า กระ ผิวหน้าใสขึ้นมากค่ะ หมอวางแผนการรักษาให้เฉพาะตัว ผิวดีขึ้นตั้งแต่ครั้งแรก แนะนำมากๆ เลยค่ะ",
    service: "Laser หน้าใส",
  },
  {
    name: "คุณชยพล",
    handle: "",
    rating: 5,
    text: "มาทำ Mesotherapy ผิวหน้าชุ่มชื้นขึ้นมากครับ ลดรอยด่างดำได้ผลชัดเจน หมอดูแลดีมาก คลินิกสะอาด บรรยากาศดี มาอีกแน่ๆ ครับ",
    service: "Mesotherapy",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [
    reviews[(current) % total],
    reviews[(current + 1) % total],
    reviews[(current + 2) % total],
  ];

  return (
    <section
      id="reviews"
      className="py-24 px-6"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Reviews</p>
          <h2 className="section-title">รีวิวจากลูกค้าจริง</h2>
          <div className="divider-rose mt-4 mb-6" />
          <p
            className="text-sm font-light max-w-md mx-auto"
            style={{ color: "#8b7f7c" }}
          >
            เสียงจากผู้ใช้จริง ความพึงพอใจที่บอกต่อ
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex justify-center mb-12">
          <div
            className="flex items-center gap-4 px-8 py-4 rounded-2xl"
            style={{ backgroundColor: "#e8e7e5" }}
          >
            <div className="text-center">
              <div
                className="text-4xl font-light"
                style={{ color: "#69554a" }}
              >
                5.0
              </div>
              <div className="flex gap-0.5 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#c38789" color="#c38789" />
                ))}
              </div>
              <div
                className="text-xs mt-1 font-light"
                style={{ color: "#8b7f7c" }}
              >
                จาก 5,000+ รีวิว
              </div>
            </div>
            <div
              className="w-px h-12"
              style={{ backgroundColor: "#c7bfb5" }}
            />
            <div className="text-sm font-light" style={{ color: "#8b7f7c" }}>
              <p>⭐ ลูกค้าพึงพอใจ 98%</p>
              <p className="mt-1">⭐ บอกต่อ 90%+</p>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {visible.map((review, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col gap-4 p-7 rounded-2xl transition-all duration-300 ${
                idx === 1 ? "scale-105 shadow-xl" : "shadow-sm"
              }`}
              style={{
                backgroundColor: idx === 1 ? "#69554a" : "#e8e7e5",
                border: "1px solid",
                borderColor: idx === 1 ? "#69554a" : "#e0ddd9",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={20}
                style={{ color: idx === 1 ? "rgba(255,255,255,0.3)" : "#c38789" }}
              />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={idx === 1 ? "#fff" : "#c38789"}
                    color={idx === 1 ? "#fff" : "#c38789"}
                  />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-sm leading-relaxed font-light flex-1"
                style={{ color: idx === 1 ? "rgba(255,255,255,0.9)" : "#69554a" }}
              >
                {review.text}
              </p>

              {/* Service tag */}
              <span
                className="text-xs px-3 py-1 rounded-full self-start"
                style={{
                  backgroundColor:
                    idx === 1
                      ? "rgba(195,135,137,0.3)"
                      : "rgba(195,135,137,0.1)",
                  color: idx === 1 ? "#fff" : "#c38789",
                }}
              >
                {review.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t"
                style={{ borderColor: idx === 1 ? "rgba(255,255,255,0.15)" : "#e0ddd9" }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium"
                  style={{
                    backgroundColor:
                      idx === 1 ? "rgba(255,255,255,0.2)" : "#c7bfb5",
                    color: idx === 1 ? "#fff" : "#69554a",
                  }}
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: idx === 1 ? "#fff" : "#69554a" }}
                  >
                    {review.name}
                  </p>
                  {review.handle && (
                    <p
                      className="text-xs"
                      style={{
                        color:
                          idx === 1
                            ? "rgba(255,255,255,0.6)"
                            : "#8b7f7c",
                      }}
                    >
                      {review.handle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-[#c38789] hover:border-[#c38789] hover:text-white"
            style={{ borderColor: "#c7bfb5", color: "#69554a" }}
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-200"
                style={{
                  width: i === current ? "24px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "#c38789" : "#c7bfb5",
                }}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:bg-[#c38789] hover:border-[#c38789] hover:text-white"
            style={{ borderColor: "#c7bfb5", color: "#69554a" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* YouTube CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/channel/UCf7ypqqydxl4-ycyPLKmjVw"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            ดูรีวิวเพิ่มเติมบน YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
