import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | هاسيندا رأس الحكمة",
  robots: { index: true, follow: true },
};

const PHONE_DISPLAY = "0100 926 0259";
const PHONE_INTL = "+201009260259";

const wrap: React.CSSProperties = { minHeight: "100vh", background: "var(--color-cream)", padding: "80px 20px" };
const inner: React.CSSProperties = { maxWidth: 760, margin: "0 auto", lineHeight: 1.9 };
const h1: React.CSSProperties = { color: "var(--color-navy)", fontSize: 32, marginBottom: 8 };
const h2: React.CSSProperties = { color: "var(--color-navy)", fontSize: 19, margin: "24px 0 8px" };
const back: React.CSSProperties = { color: "var(--color-gold)", fontWeight: 700, display: "inline-block", marginTop: 24 };

export default function PrivacyPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <h1 style={h1}>سياسة الخصوصية</h1>
        <p style={{ fontSize: 13, color: "rgba(10,37,64,0.55)" }}>آخر تحديث: يوليو 2026</p>

        <h2 style={h2}>البيانات التي نجمعها</h2>
        <p>نجمع البيانات التي تقدمها طواعية عبر نماذج التواصل: الاسم، رقم الهاتف، ونوع الوحدة التي تهتم بها. لا نجمع أي بيانات مالية أو حساسة من أي نوع.</p>

        <h2 style={h2}>كيف نستخدم بياناتك</h2>
        <p>تُستخدم بياناتك لغرض واحد فقط: تواصل مستشار المبيعات معك بخصوص استفسارك عن مشروع هاسيندا رأس الحكمة. لا نرسل رسائل جماعية ولا نضيفك لقوائم بريدية دون طلبك.</p>

        <h2 style={h2}>مشاركة البيانات</h2>
        <p>لا نبيع بياناتك ولا نشاركها مع أي طرف ثالث لأغراض تسويقية. قد تُشارك فقط مع فريق المبيعات المختص لإتمام خدمتك.</p>

        <h2 style={h2}>أدوات القياس</h2>
        <p>نستخدم أدوات تحليل مثل Google Analytics وGoogle Ads لقياس أداء الموقع بشكل مجمّع دون تحديد هويتك الشخصية، ويمكنك رفض ملفات تعريف الارتباط من إعدادات متصفحك.</p>

        <h2 style={h2}>حقوقك</h2>
        <p>يمكنك في أي وقت طلب الاطلاع على بياناتك أو تعديلها أو حذفها نهائياً بالتواصل معنا على <a href={`tel:${PHONE_INTL}`} style={{ color: "var(--color-gold)", fontWeight: 700 }} dir="ltr">{PHONE_DISPLAY}</a>، وسيتم تنفيذ طلبك خلال 48 ساعة.</p>

        <Link href="/" style={back}>← العودة للصفحة الرئيسية</Link>
      </div>
    </main>
  );
}
