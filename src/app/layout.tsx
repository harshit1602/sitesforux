import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/sidebar";
import Navbar from "@/components/navbar";
import Script from "next/script";

export const metadata: Metadata = {
  title: "SitesforUX",
  description: "Discover handpicked UX design resources, UI inspiration, and design systems",
  keywords: [
    "UX Resources", "UI Resources", 
    "UI/UX Design", 
    "User Experience Resources", 
    "Design Systems", 
    "UX Tools", 
    "UI Inspiration", 
    "UI Design Patterns", 
    "Best UX Websites", 
    "UX Case Studies", 
    "Design Frameworks", 
    "UX Research", 
    "UX Best Practices", 
    "Product Design Resources"
  ],
  openGraph: {
    title: "SitesforUX ",
    description: "Handpicked UX design resources, UI inspiration",
    url: "https://www.sitesforux.com",
    siteName: "SitesforUX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HQ415ENF9Z"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HQ415ENF9Z');
          `}
        </Script>

        {/* Favicon and Web App Manifest */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <div className="flex flex-col lg:flex-row items-start gap-2 bg-containerbg lg:pl-4 lg:pr-3 lg:py-3 h-screen">
          <div className="visible lg:hidden pb-16">
            <Navbar />
          </div>
          <Sidebar />
          {children}
        </div>

        {/* Product Hunt Embed */}
        <div className="fixed bottom-2 right-2 lg:bottom-5 lg:right-5 z-1000">
          <a
            href="https://www.producthunt.com/posts/sitesforux?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sitesforux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=787731&theme=light&t=1736977868405"
              alt="SitesforUX - Your shortcut to the best UX design resources | Product Hunt"
              className="w-44 h-12 lg:w-60 lg:h-14"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
