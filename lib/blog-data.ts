export interface BlogPost {
  slug: string;
  title: string;
  titleEn: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  content: {
    intro: string;
    sections: { heading: string; body: string }[];
    conclusion: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "filler-under-eye-guide",
    title: "ฟิลเลอร์ใต้ตา คืออะไร? ทำแล้วได้อะไร ใครเหมาะบ้าง",
    titleEn: "Under-Eye Filler: Complete Guide",
    excerpt:
      "ฟิลเลอร์ใต้ตาคือหนึ่งในการรักษาที่ได้รับความนิยมสูงสุดที่คลินิก เนื่องจากช่วยแก้ปัญหาเบ้าตาลึก ใต้ตาดำ และทำให้ใบหน้าดูสดใสขึ้นได้ทันที",
    category: "ฟิลเลอร์",
    date: "1 มีนาคม 2568",
    readTime: "5 นาที",
    gradientFrom: "#c38789",
    gradientTo: "#8b7f7c",
    accentColor: "#c38789",
    content: {
      intro:
        "ฟิลเลอร์ใต้ตา (Tear Trough Filler) คือการฉีดสาร Hyaluronic Acid (HA) บริเวณร่องใต้ตาหรือ Tear Trough เพื่อเติมเต็มความลึก ลดรอยเงาคล้ำ และทำให้ผิวบริเวณนั้นดูกระจ่างใสขึ้น ถือเป็นหัตถการที่ต้องอาศัยความชำนาญสูงของแพทย์ผู้เชี่ยวชาญ",
      sections: [
        {
          heading: "ฟิลเลอร์ใต้ตาทำงานอย่างไร?",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. สาร HA ที่ฉีดเข้าไปจะทำหน้าที่เติมเต็มช่องว่างใต้ผิวหนัง ทำให้ผิวบริเวณนั้นยกขึ้นและดูอิ่มขึ้นอย่างเป็นธรรมชาติ",
        },
        {
          heading: "ใครเหมาะกับการทำฟิลเลอร์ใต้ตา?",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ผู้ที่เหมาะกับการทำฟิลเลอร์ใต้ตา ได้แก่ ผู้ที่มีปัญหาเบ้าตาลึก ใต้ตาดำจากโครงสร้าง ใต้ตาเป็นร่อง หรือมองดูแล้วหน้าโทรมกว่าความเป็นจริง Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
          heading: "ขั้นตอนการทำและผลลัพธ์ที่คาดหวัง",
          body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. การทำฟิลเลอร์ใต้ตาใช้เวลาประมาณ 20–30 นาที หมอจะทาครีมชาก่อน จากนั้นใช้เข็มขนาดเล็กหรือ Cannula ฉีดสาร HA อย่างแม่นยำ ผลลัพธ์เห็นได้ทันทีและคงอยู่ได้นาน 9–12 เดือน Excepteur sint occaecat cupidatat non proident.",
        },
        {
          heading: "การดูแลหลังทำฟิลเลอร์ใต้ตา",
          body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. หลังทำฟิลเลอร์ใต้ตา ควรหลีกเลี่ยงการนอนคว่ำ ไม่กดหรือนวดบริเวณที่ฉีด หลีกเลี่ยงความร้อนจัด เช่น ซาวน่า อบไอน้ำ เป็นเวลา 48 ชั่วโมง Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        },
      ],
      conclusion:
        "ฟิลเลอร์ใต้ตาคือทางเลือกที่ดีสำหรับผู้ที่ต้องการแก้ปัญหาใต้ตาโดยไม่ต้องผ่าตัด ผลลัพธ์เป็นธรรมชาติ เห็นผลทันที และปลอดภัยในมือของแพทย์ผู้เชี่ยวชาญ หากสนใจสอบถามข้อมูลเพิ่มเติมสามารถติดต่อหมอโบได้ผ่านทาง LINE @debeauclinic",
    },
  },
  {
    slug: "botox-vs-filler-difference",
    title: "Botox กับ Filler ต่างกันอย่างไร? เลือกอะไรดี?",
    titleEn: "Botox vs Filler: What's the Difference?",
    excerpt:
      "หลายคนมักสับสนระหว่าง Botox และ Filler เพราะทั้งคู่เป็นการฉีดเหมือนกัน แต่จริงๆ แล้วทำงานต่างกันโดยสิ้นเชิง บทความนี้จะช่วยให้คุณเลือกได้ถูกต้อง",
    category: "ความรู้ทั่วไป",
    date: "15 กุมภาพันธ์ 2568",
    readTime: "7 นาที",
    gradientFrom: "#69554a",
    gradientTo: "#c7bfb5",
    accentColor: "#69554a",
    content: {
      intro:
        "Botox และ Filler คือสองหัตถการที่ได้รับความนิยมมากที่สุดในโลกของเวชศาสตร์ความงาม แม้ว่าทั้งคู่จะเป็นการฉีดเหมือนกัน แต่กลไกการทำงาน วัตถุประสงค์ และผลลัพธ์นั้นแตกต่างกันอย่างมีนัยสำคัญ",
      sections: [
        {
          heading: "Botox คืออะไร ทำงานอย่างไร?",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Botox (Botulinum Toxin Type A) คือโปรตีนที่ออกฤทธิ์โดยการยับยั้งการส่งสัญญาณประสาทไปยังกล้ามเนื้อชั่วคราว ทำให้กล้ามเนื้อผ่อนคลาย ริ้วรอยที่เกิดจากการเคลื่อนไหวของกล้ามเนื้อจึงลดลงหรือหายไป Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          heading: "Filler คืออะไร ทำงานอย่างไร?",
          body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Filler หรือสารเติมเต็ม ส่วนใหญ่ทำจาก Hyaluronic Acid (HA) ซึ่งเป็นสารที่มีอยู่ตามธรรมชาติในร่างกายอยู่แล้ว การฉีด Filler จะเติมปริมาตรให้บริเวณที่ขาด เช่น ร่อง รอยบุ๋ม หรือส่วนที่ต้องการเพิ่มมิติ Duis aute irure dolor in reprehenderit.",
        },
        {
          heading: "เปรียบเทียบ Botox vs Filler แบบชัดเจน",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. โดยสรุป Botox เหมาะกับ: ริ้วรอยจากการแสดงออก (หน้าผาก คิ้ว หางตา) ลดกราม เหงื่อออกมากผิดปกติ ส่วน Filler เหมาะกับ: เติมเต็มส่วนที่บุ๋มหรือขาด ปรับรูปหน้า เพิ่มปริมาตรริมฝีปาก คาง แก้ม Excepteur sint occaecat cupidatat non proident.",
        },
        {
          heading: "ทำ Botox และ Filler พร้อมกันได้ไหม?",
          body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. ได้ครับ! ในความเป็นจริง หลายคนเลือกทำทั้ง Botox และ Filler ในเวลาเดียวกัน เรียกว่า 'Liquid Facelift' เพื่อให้ได้ผลลัพธ์ที่ครอบคลุมและเป็นธรรมชาติที่สุด แพทย์จะประเมินโครงสร้างใบหน้าและวางแผนการรักษาให้เหมาะกับคุณโดยเฉพาะ",
        },
      ],
      conclusion:
        "ทั้ง Botox และ Filler มีข้อดีและข้อจำกัดของตัวเอง การเลือกว่าควรทำอะไรนั้นขึ้นอยู่กับปัญหาที่ต้องการแก้ไขและโครงสร้างใบหน้าของแต่ละบุคคล แนะนำให้ปรึกษาแพทย์ผู้เชี่ยวชาญก่อนทุกครั้ง เพื่อให้ได้ผลลัพธ์ที่ดีที่สุดและปลอดภัย",
    },
  },
  {
    slug: "ulthera-hifu-skin-lifting",
    title: "Ulthera ยกกระชับใบหน้า ไม่ต้องผ่าตัด ได้ผลจริงไหม?",
    titleEn: "Ulthera HIFU: Non-Surgical Face Lifting",
    excerpt:
      "Ulthera คือนวัตกรรมยกกระชับใบหน้าด้วยคลื่นเสียงความถี่สูง ที่สามารถกระตุ้นคอลลาเจนใหม่ได้ในระดับชั้น SMAS โดยไม่ต้องผ่าตัด แต่ได้ผลจริงแค่ไหน?",
    category: "Ulthera",
    date: "28 มกราคม 2568",
    readTime: "6 นาที",
    gradientFrom: "#8b7f7c",
    gradientTo: "#c38789",
    accentColor: "#8b7f7c",
    content: {
      intro:
        "Ultherapy® หรือที่รู้จักกันในชื่อ HIFU (High-Intensity Focused Ultrasound) คือเทคโนโลยียกกระชับใบหน้าที่ได้รับการรับรองจาก FDA สหรัฐอเมริกา ด้วยการใช้คลื่นเสียงความถี่สูงเจาะลึกถึงชั้น SMAS ซึ่งเป็นชั้นเดียวกับที่ศัลยแพทย์เข้าถึงในการผ่าตัดยกหน้า",
      sections: [
        {
          heading: "Ulthera ทำงานอย่างไร?",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ulthera ส่งคลื่นเสียงความถี่สูงแบบมุ่งจุด (Micro-Focused Ultrasound with Visualization หรือ MFU-V) ลงไปยังชั้นผิวในระดับต่างๆ ทั้ง 1.5mm 3.0mm และ 4.5mm ความร้อนที่เกิดขึ้นจะกระตุ้นให้เกิดการสร้างคอลลาเจนใหม่อย่างต่อเนื่อง Sed do eiusmod tempor incididunt ut labore.",
        },
        {
          heading: "ผลลัพธ์ที่คาดหวังจาก Ulthera",
          body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ผลลัพธ์ของ Ulthera จะค่อยๆ ปรากฏหลังทำ 2–3 เดือน เมื่อกระบวนการสร้างคอลลาเจนใหม่สมบูรณ์ ผลที่ได้รวมถึง: ผิวหน้ากระชับขึ้น คอและคางชัดขึ้น หนังตาบนยกขึ้นเล็กน้อย และผิวโดยรวมดูอ่อนเยาว์ขึ้น Duis aute irure dolor in reprehenderit.",
        },
        {
          heading: "Ulthera เจ็บไหม? ต้องพักฟื้นนานแค่ไหน?",
          body: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. ระหว่างทำ Ulthera ส่วนใหญ่จะรู้สึกร้อนและเสียวซ่าตามบริเวณที่รักษา แพทย์จะทาครีมชาก่อนเพื่อลดความรู้สึกไม่สบาย หลังทำสามารถกลับบ้านได้เลย ไม่มีแผล ไม่ต้องพักฟื้น อาจมีบวมแดงเล็กน้อยใน 1–2 วันแรก Sed ut perspiciatis unde omnis iste natus.",
        },
        {
          heading: "Ulthera ทำกี่ครั้ง ผลอยู่นานแค่ไหน?",
          body: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia. โดยทั่วไปแนะนำทำปีละ 1 ครั้ง เพื่อรักษาผลลัพธ์และกระตุ้นคอลลาเจนอย่างต่อเนื่อง ผลจาก Ulthera คงอยู่ได้นาน 12–18 เดือน ขึ้นอยู่กับอายุ สภาพผิว และพฤติกรรมการดูแลผิว",
        },
      ],
      conclusion:
        "Ulthera คือตัวเลือกที่ดีเยี่ยมสำหรับผู้ที่ต้องการยกกระชับใบหน้าโดยไม่ผ่าตัด ด้วยเทคโนโลยีที่ได้รับการพิสูจน์แล้วและผ่านการรับรองจาก FDA ผลลัพธ์เป็นธรรมชาติและยาวนาน หากสนใจปรึกษาแพทย์เพื่อประเมินความเหมาะสมก่อนการรักษา",
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
