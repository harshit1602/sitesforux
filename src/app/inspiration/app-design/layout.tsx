import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Design | SitesforUX",
  description: "Browse curated platforms providing resources and inspiration for creating exceptional app designs",
  keywords: [
    "App design platforms", 
    "Mobile app UX resources", 
    "Sites for UX", "app design ux", "websites for app design", "app design resources", "inspiration for app design",
    "UI resources for apps", 
    "Web design tools", 
    "App design inspiration", 
    "Design tools for mobile apps",
  ],
};
  

export default function AppDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
