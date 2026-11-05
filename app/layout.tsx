import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mohammedelkassoiri.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mohammed El Kassoiri | Data Scientist & Machine Learning Engineer",
    template: "%s | Mohammed El Kassoiri",
  },
  description:
    "Mohammed El Kassoiri is a Data Scientist and Machine Learning Engineer from Morocco building reliable systems with Python, PyTorch, computer vision, and NLP.",
  keywords: [
    "Mohammed El Kassoiri",
    "Mohammed El Kassoiri portfolio",
    "Mohammed El Kassoiri AI",
    "Mohammed El Kassoiri engineer",
    "El Kassoiri Mohammed",
    "Data Scientist",
    "Machine Learning Engineer",
    "Deep Learning Engineer",
    "Computer Vision Engineer",
    "NLP Engineer",
    "Natural Language Processing",
    "PyTorch",
    "TensorFlow",
    "Python",
    "Portfolio",
    "Morocco",
    "Data Scientist Morocco",
    "Agricultural AI",
    "Remote Sensing",
    "Satellite Image Analysis",
    "Attention U-Net",
    "Water Stress Mapping",
    "Artificial Intelligence",
    "Fraud Detection",
    "Darija NLP",
    "mohammedelkassoiri.app",
    "Mohammed Kassoiri",
  ],
  authors: [
    {
      name: "Mohammed El Kassoiri",
      url: "https://github.com/Mohammed-El-Kassoiri",
    },
  ],
  creator: "Mohammed El Kassoiri",
  publisher: "Mohammed El Kassoiri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mohammed El Kassoiri | Data Scientist & Machine Learning Engineer",
    title: "Mohammed El Kassoiri | Data Scientist & Machine Learning Engineer",
    description:
      "Data Scientist and Machine Learning Engineer from Morocco building reliable systems with Python, PyTorch, computer vision, and NLP.",
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Mohammed El Kassoiri – Data Scientist & Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed El Kassoiri | Data Scientist & Machine Learning Engineer",
    description:
      "Data Scientist and Machine Learning Engineer from Morocco building reliable systems with Python, PyTorch, computer vision, and NLP.",
    images: [`${siteUrl}/opengraph-image`],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
  generator: "Next.js",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed El Kassoiri",
  alternateName: [
    "Mohammed Kassoiri",
    "El Kassoiri Mohammed",
    "MOHAMMED EL KASSOIRI",
    "EL KASSOIRI MOHAMMED",
    "EL KASSOIRI",
    "el kassoiri",
    "kassoiri",
    "KASSOIRI",
  ],
  url: siteUrl,
  image: `${siteUrl}/logo.png`,
  jobTitle: "Data Scientist & Machine Learning Engineer",
  description:
    "Data Scientist and Machine Learning Engineer from Morocco building reliable systems with Python, PyTorch, computer vision, and NLP.",
  sameAs: [
    "https://github.com/Mohammed-El-Kassoiri",
    "https://linkedin.com/in/Mohammed-El-Kassoiri",
  ],
  knowsAbout: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Python",
    "PyTorch",
    "TensorFlow",
    "Agricultural AI",
    "Remote Sensing",
    "Data Science",
    "Artificial Intelligence",
  ],
  nationality: "Moroccan",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": siteUrl,
    name: "Mohammed El Kassoiri – Data Scientist & Machine Learning Engineer Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          themes={["dark"]}
          enableSystem={false}
        >
          <SmoothScrollProvider />
          <LanguageProvider defaultLanguage="en">{children}</LanguageProvider>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
