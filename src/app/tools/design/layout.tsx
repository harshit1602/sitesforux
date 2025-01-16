import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Tools | SitesforUX",
  description: "Explore curated platforms offering top tools for UI/UX design. Access resources for prototyping, wireframing, and collaborative design.",
  keywords: [
    "ux tools", "ux design tools", 
    "UI/UX design tools",  
    "Prototyping tools", "Wireframing tools", "Motion Design tools","usability testing tools",  
    "Sites for UX", 
    "Collaborative design tools",
  ],
  };
  

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
