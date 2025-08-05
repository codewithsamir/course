import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import { courseDetails } from "@/lib/course_data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: courseDetails.title,
  description: courseDetails.description,
  keywords: [
    "MERN Stack Course",
    "Full-Stack Web Development",
    "Next.js Course",
    "Tailwind CSS",
    "React.js Training",
    "Node.js Course",
    "MongoDB Course",
    "AI Integration",
    "Web Development in Nepal",
    "Evening Coding Class"
  ],
  openGraph: {
    title: courseDetails.title,
    description: courseDetails.description,
    url: "https://onlinecouse.saanmobile.com", // ✅ Replace with your domain
    siteName: "SAAN Coaching and Training Center", // ✅ Replace with your brand name
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: courseDetails.title,
    description: courseDetails.description,
    creator: "@yourhandle", // ✅ Optional: Replace with your Twitter handle
  },
  metadataBase: new URL("https://onlinecouse.saanmobile.com"), // ✅ Replace with your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: courseDetails.title,
              description: courseDetails.description,
              provider: {
                "@type": "Organization",
                name: "Your Academy Name", // ✅ Replace with your name
                sameAs: "https://onlinecouse.saanmobile.com" // ✅ Replace with your site
              }
            }),
          }}
        />
        {/* Canonical Tag */}
        <link rel="canonical" href="https://onlinecouse.saanmobile.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer className="mt-10 text-center text-sm text-gray-500">
          © 2025 SAAN Coaching and Training center. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
