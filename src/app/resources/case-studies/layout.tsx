import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | SitesforUX",
  description: "Access curated platforms featuring case studies on UI/UX design",
  keywords: [
    "UX case studies", 
    "Case study platforms", 
    "UX resources", 
    "Sites for UX",
  ],
  };
  

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
