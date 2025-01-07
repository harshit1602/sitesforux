import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SitesforUX",
  description: "Discover handpicked UX design resources, UI inspiration, and design systems. Stay updated with the latest trends and tools in user experience design.",
  keywords: [
    "UX Resources", 
    "UI/UX Design", 
    "User Experience Resources", 
    "Design Systems", 
    "UX Tools", 
    "UX Inspiration", 
    "UI Design Patterns", 
    "Best UX Websites", 
    "UX Case Studies", 
    "Design Frameworks", 
    "UX Research", 
    "UX Best Practices", 
    "UI/UX Trends 2024", 
    "Product Design Resources"
  ],
  openGraph: {
    title: "Sites for UX – Curated UX Resources Launching Soon 🚀",
    description: "Handpicked UX design resources, UI inspiration, and design systems. Join our newsletter and stay updated with the latest trends in UX design.",
    url: "https://www.sitesforux.com",
    siteName: "Sites for UX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
