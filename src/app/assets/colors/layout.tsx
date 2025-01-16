import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colors | SitesforUX",
  description: "Discover curated websites providing color palettes, generators, and tools to create visually stunning designs. Perfect for UX designers.",
  keywords: [
    "Color palette platforms", 
    "Color tools for designers",
    "Colors for ux design",  
    "Colors for ui design",
    "Colors palettes",  
    "UX design resources", 
    "Web design tools", 
    "Webites for UX",
    "Resources for UX Design",
    "App design resources", 
    "Sites for UX", 
    "Design resources", 
    "UX resources",
  ],
  };
  

export default function ColorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
