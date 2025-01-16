import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Icons | SitesforUX",
  description: "Browse curated platforms offering free and premium icons for UI/UX designs",
  keywords: [
    "Icon platforms", 
    "Websites for icons", 
    "UX design resources", 
    "Design tools", 
    "Webites for UX",
    "Resources for UX Design",
    "icons for designers",
    "icons for ux design",
    "icons for ui design",
    "Premium icons", 
    "UI design resources", 
    "Web design resources", 
    "App design tools",
  ],
  };
  

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
