"use client";

import React, { useState } from "react";
import "/src/app/globals.css";
import { 
  SidebarSimple, ArrowRight, Article, Book, Books, BoundingBox, Certificate, CirclesThree, Copyright, Desktop, DeviceMobile, Devices, DevToLogo, DiamondsFour, File, Gear, Gradient, Image, Microphone, Palette, PenNib, ReadCvLogo, TextH, 
  XLogo
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  interface SidebarLinkProps {
    href: string;
    label: string;
    Icon: React.ElementType;
  }

  const SidebarLink: React.FC<SidebarLinkProps> = ({ href, label, Icon }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        onClick={closeSidebar}
        className={`${isActive ? "active" : "group category-button w-full"}`}
      >
        <div className="flex items-center gap-2.5 font-instrument font-normal text-sm text-textwhite">
          <div className="py-1 px-1 rounded-[4px] items-center bg-[rgba(76,106,112,0.15)]">
            <Icon color="#2a9d8f" weight="bold" size={16} />
          </div>
          {label}
        </div>
      </Link>
    );
  };

  interface SidebarSectionProps {
    title: string;
    links: SidebarLinkProps[];
  }

  const SidebarSection: React.FC<SidebarSectionProps> = ({ title, links }) => (
    <div className="flex flex-col items-start gap-1">
      <p className="font-instrument text-sm text-[#707070]">{title}</p>
      <div className="flex flex-col items-start w-full gap-2">
        {links.map((link) => (
          <SidebarLink key={link.href} {...link} />
        ))}
      </div>
    </div>
  );

  const assetsLinks: SidebarLinkProps[] = [
    { href: "/assets/background", label: "Background", Icon: Gradient },
    { href: "/assets/colors", label: "Colors", Icon: Palette },
    { href: "/assets/icons", label: "Icons", Icon: CirclesThree },
    { href: "/assets/illustrations", label: "Illustrations", Icon: PenNib },
    { href: "/assets/images", label: "Images", Icon: Image },
    { href: "/assets/mockups", label: "Mockups", Icon: Devices },
    { href: "/assets/typography", label: "Typography", Icon: TextH },
  ];

  const inspirationLinks: SidebarLinkProps[] = [
    { href: "/inspiration/app-design", label: "App Design", Icon: DeviceMobile },
    { href: "/inspiration/visual-frameworks", label: "Visual Frameworks", Icon: DiamondsFour },
    { href: "/inspiration/web-design", label: "Web Design", Icon: Desktop },
  ];

  const resourcesLinks: SidebarLinkProps[] = [
    //{ href: "/resources/blogs", label: "Blogs", Icon: Article },
    { href: "/resources/books", label: "Books", Icon: Books },
    { href: "/resources/case-studies", label: "Case Studies", Icon: File },
    //{ href: "/resources/courses", label: "Courses", Icon: Certificate },
    { href: "/resources/fundamentals", label: "Fundamentals", Icon: ReadCvLogo },
    //{ href: "/resources/podcasts", label: "Podcasts", Icon: Microphone },
  ];

  const toolsLinks: SidebarLinkProps[] = [
    { href: "/tools/design", label: "Design", Icon: BoundingBox },
    { href: "/tools/development", label: "Development", Icon: DevToLogo },
    { href: "/tools/productivity", label: "Productivity", Icon: Gear },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-pagebg text-white px-4 pt-6 pb-4 fixed top-0 w-full z-50 lg:hidden">
        <div className="bg-[#191919] border border-white/25 rounded-xl p-3 flex items-center justify-between">
          {/* Logo */}
          <div className="font-playfair text-xl font-bold italic">
            <Link href={"/"}>SitesforUX</Link>
          </div>

          {/* Sidebar Toggle */}
          <div className="flex items-center gap-3">
          <Link href={"https://x.com/sitesforux"} target='_blank'> <XLogo color="#fff" size={20}/> </Link>
          <button
            aria-label="Toggle Sidebar"
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            <SidebarSimple size={24} weight="duotone" />
          </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="top-20 fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}>
          <div className="bg-pagebg w-full h-full overflow-y-auto z-30 p-4 relative">
            <div className="flex flex-col sidebar pr-3 pb-1 gap-4 w-full overflow-y-auto">
              {/* Sections */}
              <SidebarSection title="Assets" links={assetsLinks} />
              <div className="w-full border-t-2 opacity-25"></div>
              <SidebarSection title="Inspiration" links={inspirationLinks} />
              <div className="w-full border-t-2 opacity-25"></div>
              <SidebarSection title="Resources" links={resourcesLinks} />
              <div className="w-full border-t-2 opacity-25"></div>
              <SidebarSection title="Tools" links={toolsLinks} />
              <div className="w-full border-t-2 opacity-25"></div>
              <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Copyright color="#707070" size={16}/><p className="font-instrument font-normal text-sm text-[#707070]">Curated by <Link href={"https://linkedin.com/in/iuxerharshit"} className="font-instrument font-medium text-sm text-[#707070]" target='_blank'>iuxerharshit</Link></p>
        </div>
        <p className="font-instrument font-normal text-sm text-[#707070]">2025, All Rights Reserved</p>
      </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
