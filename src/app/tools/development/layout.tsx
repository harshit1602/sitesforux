import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Tools | SitesforUX",
  description: "Browse curated platforms offering tools for front-end development",
  keywords: [
    "Dev tools for UI/UX", "no code tools", "website building tools", 
    "Web development tools", 
    "Sites for UX", 
    "UX resources",
  ],
  };
  

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
