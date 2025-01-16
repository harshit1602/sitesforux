import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography | SitesforUX",
  description: "Explore curated websites offering free and premium typography resources, including fonts and pairings, for stunning UI/UX designs.",
  keywords: [
    "Typography platforms", 
    "Websites for fonts", 
    "Free font resources", 
    "Premium fonts for designers", "fonts for ux design", "fonts for ui design", "fonts for designers", "fonts",
    "UX resources", 
    "UI design tools", 
    "Web design resources", 
    "Sites for UX",
  ],
  };
  

export default function TypographyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
