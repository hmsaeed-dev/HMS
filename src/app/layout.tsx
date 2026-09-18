import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Fira_Code } from "next/font/google";
import Script from "next/script";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import ScrollProgress from "@/components/layout/ScrollProgress";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f7f4ef",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hmsaeed.com"),
  title: {
    default: "Hafiz Muhammad Saeed — Builder & Thinker",
    template: "%s — Hafiz Muhammad Saeed",
  },
  description:
    "Personal site of Hafiz Muhammad Saeed — CS student, builder, and thinker from Taxila, Pakistan. Work, writing, and story.",
  authors: [{ name: "Hafiz Muhammad Saeed", url: "https://hmsaeed.com" }],
  creator: "Hafiz Muhammad Saeed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hmsaeed.com",
    siteName: "Hafiz Muhammad Saeed",
    title: "Hafiz Muhammad Saeed | Builder & Thinker",
    description:
      "Explore the digital works and photographic captures of Hafiz Muhammad Saeed.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto/f_auto/v1779627924/Saeed_68_cewriq.jpg",
        width: 1200,
        height: 630,
        alt: "Hafiz Muhammad Saeed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafiz Muhammad Saeed | Builder & Thinker",
    description:
      "Explore the digital works and photographic captures of Hafiz Muhammad Saeed.",
    images: [
      "https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto/f_auto/v1779627924/Saeed_68_cewriq.jpg",
    ],
  },
  icons: {
    icon: "/icons/logo-mark.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hafiz Muhammad Saeed",
  alternateName: ["HMSaeed", "Hafiz Muhammad Saeed", "HMS"],
  url: "https://hmsaeed.com",
  image:
    "https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto/f_auto/v1779627924/Saeed_68_cewriq.jpg",
  sameAs: [
    "https://orcid.org/0009-0007-9947-5047",
    "https://github.com/hmsaeed-dev",
    "https://www.linkedin.com/in/hmsaeed",
    "https://www.instagram.com/hms_aeed",
    "https://x.com/hms_aeed",
    "https://medium.com/@hms_blogs",
    "https://leetcode.com/u/hms_aeed/",
  ],
  jobTitle: "Computer Science Student & Full-Stack Developer",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "UET Taxila",
    url: "https://www.uettaxila.edu.pk/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${firaCode.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#2a2a22] bg-[#f7f4ef] min-h-screen flex flex-col justify-between pt-[65px]">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T31PJSBQY8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T31PJSBQY8');
          `}
        </Script>

        <ScrollProgress />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
