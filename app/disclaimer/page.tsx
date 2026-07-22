import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "إخلاء المسؤولية | هاسيندا رأس الحكمة",
  robots: { index: true, follow: true },
};

const wrap: React.CSSProperties = { minHeight: "100vh", background: "var(--color-cream)", padding: "80px 20px" };
const inner: React.CSSProperties = { maxWidth: 760, margin: "0 auto", lineHeight: 1.9 };
const h1: React.CSSProperties = { color: "var(--color-navy)", fontSize: 32, marginBottom: 20 };
const back: React.CSSProperties = { color: "var(--color-gold)", fontWeight: 700, display: "inline-block", marginTop: 24 };

export default function DisclaimerPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <h1 style={h1}>إخلاء المسؤولية</h1>
        <p><b>استقلالية الموقع:</b> هذا الموقع منصة تسويقية يديرها فريق مبيعات معتمد لمشروعات بالم هيلز، وليس الموقع الرسمي لشركة بالم هيلز للتطوير العقاري. أسماء المشروعات والعلامات التجارية الواردة ملك لأصحابها وتُستخدم لغرض التعريف بالمشروعات فقط.</p>
        <p><b>الأسعار والمساحات:</b> جميع الأسعار والمساحات وأنظمة السداد الواردة استرشادية وفقاً لآخر تحديث معلن وقت النشر، وقابلة للتغيير من المطور في أي وقت دون إخطار مسبق. المرجع النهائي والملزم هو عروض الأسعار الرسمية الصادرة من المطور وقت التعاقد.</p>
        <p><b>الصور والتصميمات:</b> الصور المعروضة تشمل تصورات معمارية (رندرات) قد تختلف تفاصيلها عن التنفيذ النهائي وفقاً لتحديثات المطور.</p>
        <p><b>عدم وجود التزام:</b> تسجيل بياناتك في الموقع لا يُعد حجزاً ولا يرتب أي التزام مالي أو قانوني عليك — هو طلب تواصل فقط ليقوم فريقنا بموافاتك بالتفاصيل.</p>
        <Link href="/" style={back}>← العودة للصفحة الرئيسية</Link>
      </div>
    </main>
  );
}
