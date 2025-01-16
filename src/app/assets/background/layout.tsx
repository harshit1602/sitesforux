import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backgrounds | SitesforUX",
  description: "Explore curated platforms offering high-quality backgrounds for UI/UX projects. Find websites providing beautiful backdrops for your designs.",
  keywords: [
    "Background platforms", 
    "Websites for design backgrounds", 
    "UX resources", 
    "Sites for UX",
    "Webites for UX",
    "Resources for UX Design", 
    "Design resources", 
    "High-quality backgrounds", 
    "Web design resources", 
    "App design resources", 
    "UI/UX resources",
  ],
  };
  

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
