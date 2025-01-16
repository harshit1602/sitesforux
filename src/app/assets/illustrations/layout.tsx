import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Illustrations | SitesforUX",
  description: "Find websites offering free and premium illustrations to enhance your UI/UX projects",
  keywords: [
    "Illustration platforms", 
    "illustrations for design", 
    "Premium design illustrations", 
    "Free illustrations", 
    "illustrations", 
    "Webites for UX",
    "Resources for UX Design",
    "Resources for UI Design",
    "UX resources", 
    "UI design tools", 
    "Web design resources", 
    "App design resources", 
    "Sites for UX",
  ],
  };
  

export default function IllustrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
