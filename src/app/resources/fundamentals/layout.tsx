import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fundamentals | SitesforUX",
  description: "Discover curated websites offering foundational resources for UI/UX design",
  keywords: [
    "UX fundamentals platforms", 
    "UI design basics", 
    "Web design resources", "ux design resources","ux resources","ux laws","ux fundamentas","ux principles","design principles","learn ux",
    "Learning platforms for UX", 
    "App design resources", 
    "Sites for UX", 
    "Design tools for beginners",
  ],
  };
  

export default function FundamentalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
