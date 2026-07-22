import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن | هاسيندا رأس الحكمة",
  robots: { index: true, follow: true },
};

const PHONE_DISPLAY = "0100 926 0259";
const PHONE_INTL = "+201009260259";

const wrap: React.CSSProperties = { minHeight: "100vh", background: "var(--color-cream)", padding: "80px 20px" };
const inner: React.CSSProperties = { maxWidth: 760, margin: "0 auto", lineHeight: 1.9 };
const h1: React.CSSProperties = { color: "var(--color-navy)", fontSize: 32, marginBottom: 20 };
const h2: React.CSSProperties = { color: "var(--color-navy)", fontSize: 20, margin: "26px 0 10px" };
const box: React.CSSProperties = { background: "#fff", border: "1px solid rgba(10,37,64,0.1)", borderRadius: 12, padding: "24px 26px", margin: "20px 0" };
const back: React.CSSProperties = { color: "var(--color-gold)", fontWeight: 700, display: "inline-block", marginTop: 24 };

export default function AboutPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <h1 style={h1}>من نحن</h1>
        <p>
          نحن فريق مبيعات معتمد لمشروعات بالم هيلز للتطوير العقاري، ومن خلال هذا الموقع نقدم لك
          كل تفاصيل مشروع هاسيندا رأس الحكمة عند الكيلو 238 على الساحل الشمالي: الوحدات المتاحة،
          الأسعار المحدثة، وأنظمة السداد.
        </p>
        <div style={box}>
          <h2 style={{ ...h2, marginTop: 0 }}>ليه تحجز من خلالنا؟</h2>
          <p style={{ margin: "6px 0" }}>✓ <b>نفس أسعار الشركة الرسمية</b> — بدون أي عمولة أو رسوم إضافية من العميل نهائياً</p>
          <p style={{ margin: "6px 0" }}>✓ وصول مباشر لأحدث قوائم الوحدات المتاحة قبل نفادها</p>
          <p style={{ margin: "6px 0" }}>✓ مقارنة محايدة بين المراحل والوحدات تساعدك تختار الأنسب لميزانيتك</p>
          <p style={{ margin: "6px 0" }}>✓ متابعة كاملة معك من الاستفسار الأول حتى التعاقد</p>
        </div>
        <p style={{ fontSize: 14, color: "rgba(10,37,64,0.65)" }}>
          للشفافية الكاملة: هذا الموقع منصة تسويقية معتمدة وليس الموقع الرسمي لشركة بالم هيلز
          للتطوير العقاري. جميع الأسعار والمساحات استرشادية وفقاً لآخر تحديث معلن، والمرجع النهائي
          هو العروض الرسمية للمطور وقت التعاقد.
        </p>
        <h2 style={h2}>تواصل معنا</h2>
        <p>
          هاتف / واتساب: <a href={`tel:${PHONE_INTL}`} style={{ color: "var(--color-gold)", fontWeight: 700 }} dir="ltr">{PHONE_DISPLAY}</a>
        </p>
        <Link href="/" style={back}>← العودة للصفحة الرئيسية</Link>
      </div>
    </main>
  );
}
