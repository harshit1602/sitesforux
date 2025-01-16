import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productivity Tools | SitesforUX",
  description: "Discover curated platforms offering productivity tools for designers to streamline your workflow.",
  keywords: [
    "Productivity tools for designers", 
    "UX workflow tools", 
    "Sites for UX", 
    "Tools for UI/UX",
  ],
  };
  

export default function ProductivityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
