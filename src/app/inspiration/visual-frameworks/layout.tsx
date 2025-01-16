import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Frameworks | SitesforUX",
  description: "Find curated platforms offering visual frameworks and design systems for building consistent and scalable UI/UX projects.",
  keywords: [
    "Visual frameworks", 
    "Design systems",
    "UI/UX resources", 
    "Web design tools", 
    "Sites for UX", 
    "App design resources", 
    "UX frameworks",
  ],
  };
  

export default function VisualFrameworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
