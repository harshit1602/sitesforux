import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mockups | SitesforUX",
  description: "Access curated websites offering free and premium mockups for showcasing UI/UX projects",
  keywords: [
    "Mockup platforms", 
    "Free design mockups", 
    "Premium UX mockups", 
    "Mockups for design",
    "high quality mockups","iphone mockups","ipad mockups","mac mockups","free mockups", 
    "UX resources", 
    "Web design tools", 
    "UI design resources", 
    "App design tools", 
    "Sites for UX",
  ],
  };
  

export default function MockupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
