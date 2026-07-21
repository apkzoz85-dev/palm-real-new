import type { Metadata } from "next";
import "./globals.css";

/* ⚠️ غيّر الدومين هنا لدومينك الفعلي قبل النشر */
const SITE_URL = "https://palmhiilsproperties.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "هاسيندا رأس الحكمة بالم هيلز | أسعار وتقسيط 10 سنوات",
  description:
    "هاسيندا رأس الحكمة من بالم هيلز عند الكيلو 238 على الساحل الشمالي - 1,400 فدان و4.8 كم بيتش فرونت. تبدأ من 11.7 مليون جنيه، 5% مقدم وتقسيط حتى 10 سنوات.",
  keywords:
    "هاسيندا رأس الحكمة,Hacienda Ras El Hekma,هاسيندا بالم هيلز,Palm Hills Hacienda,بالم هيلز رأس الحكمة,الساحل الشمالي 2026,أسعار هاسيندا رأس الحكمة,شاليهات هاسيندا,فيلات بيتش فرونت",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "هاسيندا رأس الحكمة بالم هيلز - الكيلو 238 الساحل الشمالي",
    description:
      "مشروع ساحلي فاخر من بالم هيلز على 1,400 فدان مع 4.8 كم بيتش فرونت. بيتش هومز، شاليهات، توين هاوس وفيلات تبدأ من 11.7 مليون جنيه - تقسيط حتى 10 سنوات.",
    url: "/",
    siteName: "هاسيندا رأس الحكمة - بالم هيلز",
    locale: "ar_EG",
    type: "website",
    images: [
      {
        url: "/images/hacienda-hero.webp",
        width: 1200,
        height: 630,
        alt: "هاسيندا رأس الحكمة بالم هيلز الساحل الشمالي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "هاسيندا رأس الحكمة بالم هيلز | الكيلو 238 الساحل الشمالي",
    description:
      "1,400 فدان و4.8 كم بيتش فرونت - أسعار تبدأ من 11.7 مليون جنيه وتقسيط حتى 10 سنوات.",
    images: ["/images/hacienda-hero.webp"],
  },
};

/* JSON-LD: FAQ Rich Results */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "أين يقع مشروع هاسيندا رأس الحكمة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يقع المشروع عند الكيلو 238 على الطريق الساحلي الدولي في منطقة رأس الحكمة بالساحل الشمالي، وهي واحدة من أجمل مناطق البحر المتوسط.",
      },
    },
    {
      "@type": "Question",
      name: "ما أنواع الوحدات المتاحة في المشروع؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يتوفر بيتش هومز (1-3 غرف نوم)، شاليهات جونيور وسينيور، توين هاوس، وفيلات بإطلالات بحرية مباشرة من الصف الأول إلى الرابع.",
      },
    },
    {
      "@type": "Question",
      name: "ما هو السعر الذي تبدأ منه الوحدات؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تبدأ الأسعار من 11.7 مليون جنيه مصري لبيتش هوم غرفة واحدة، وحتى 450 مليون جنيه لفيلات الصف الأول على البحر مباشرة.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي خطة السداد المتاحة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5% مقدم و5% بعد فترة مع تقسيط حتى 10 سنوات. أول 4 صفوف من الفيلات على 8 سنوات. الأجانب يدفعون مثل المصريين.",
      },
    },
    {
      "@type": "Question",
      name: "ما هي مساحة المشروع وأبرز مميزاته؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "المشروع على مساحة 1,400 فدان مع 4.8 كم بيتش فرونت و84% مساحات مائية وخضراء. تشطيبات كاملة مع تكييفات ومطابخ.",
      },
    },
    {
      "@type": "Question",
      name: "ما قيمة جدية الحجز (EOI)؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "بيتش هوم: 250,000 جنيه - شاليهات: 500,000 جنيه - فيلات وتوين هاوس: 1,000,000 جنيه. جميع المبالغ مستردة بالكامل.",
      },
    },
  ],
};

/* JSON-LD: Real Estate Listing */
const projectJsonLd = {
  "@context": "https://schema.org",
  "@type": "Residence",
  name: "هاسيندا رأس الحكمة - Hacienda Ras El Hekma",
  description:
    "مشروع ساحلي فاخر من بالم هيلز على 1,400 فدان مع 4.8 كم واجهة بحرية عند الكيلو 238 بالساحل الشمالي.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "رأس الحكمة",
    addressRegion: "الساحل الشمالي - مطروح",
    addressCountry: "EG",
  },
  url: SITE_URL,
  image: `${SITE_URL}/images/hacienda-hero.webp`,
};

/* JSON-LD: Agent */
const agentJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "وكيل معتمد من بالم هيلز - هاسيندا رأس الحكمة",
  telephone: "+201009260259",
  url: SITE_URL,
  areaServed: "Egypt",
  priceRange: "EGP 11,700,000 - EGP 450,000,000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Ads Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18318896999" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18318896999');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agentJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
