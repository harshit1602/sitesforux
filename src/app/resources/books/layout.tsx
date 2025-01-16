import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | SitesforUX",
  description: "Explore the best books on UI/UX design",
  keywords: [
    "Books on UX design", "Books for UX design", "Books on UI design", "Books for product designers", 
    "Design thinking books", 
    "UI/UX books", 
    "Web design resources", 
    "App design resources", 
    "Sites for UX", 
    "UX learning resources",
  ],
  };
  

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
