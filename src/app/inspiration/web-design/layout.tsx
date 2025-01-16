import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design | SitesforUX",
  description: "Browse curated platforms providing resources and inspiration for creating exceptional web designs",
  keywords: [
    "web design platforms", 
    "web app UX resources", 
    "Sites for UX", "web design ux", "websites for web design", "web design resources", "inspiration for web design",
    "UI resources for web design", "UX resources for web design", 
    "Web design tools", 
    "web design inspiration", 
  ],
};
  

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
