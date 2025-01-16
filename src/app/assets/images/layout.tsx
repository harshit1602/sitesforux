import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Images | SitesforUX",
  description: "Discover platforms providing high-quality stock photos and images for UI/UX designs. Access curated websites for all your image needs.",
  keywords: [
    "Stock photo platforms", 
    "High-quality images for design", 
    "Stock photos", 
    "UX design resources", 
    "Web design tools", 
    "Sites for UX", 
    "UI resources", 
    "Free stock photos", 
    "Premium image platforms",
  ],
  };
  

export default function ImagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
