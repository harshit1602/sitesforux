import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FireSimple } from "@phosphor-icons/react/dist/ssr";

interface ImageCardProps {
  src: string;
  alt: string;
  name: string;
  link: string;
  isEditorsChoice?: boolean;
  isCategoryAvailable?: boolean;
  category?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, name, link, isEditorsChoice, isCategoryAvailable, category }) => {
  return (
    <Link 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={`Visit ${name}`}
    >
      <div 
        className="
          group flex flex-col gap-3 items-start h-full w-full 
          transition-transform transform lg:hover:scale-95 lg:*:hover:skew-x-2 
          cursor-pointer
        "
      >
        {/* Image Container */}
        <div className="relative w-full aspect-[2/1] overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />

        <div className={`${isEditorsChoice? "absolute top-2 right-2 flex items-center gap-1 px-3 py-1.5 bg-[#191919]/50 rounded-3xl backdrop-blur-xl bg-blend-luminosity w-fit h-fit": "hidden"}`}>
          <FireSimple size={14} color="#ededed" weight="fill" />
          <p className="text-textwhite font-instrument font-medium text-xs animate-backgroundshine bg-[linear-gradient(110deg,#ededed,45%,#696969,55%,#ededed)] bg-[length:250%_100%] bg-clip-text text-opacity-20">Editors Choice</p>
        </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black rounded-xl opacity-0 lg:opacity-15 group-hover:opacity-0 transition-opacity"></div>
        </div>
        
        {/* Text */}
        <div className={ `${isCategoryAvailable? "flex items-center justify-between w-full" : "flex items-center justify-start"}`}> 
        <p className="font-instrument font-normal text-textwhite text-sm w-full leading-6"> {name} </p>
        <div className={ `${isCategoryAvailable? "py-1 px-3 bg-[#191919] rounded-full" : "hidden"}`}>
          <p className="font-instrument text-xs text-textwhite leading-tight whitespace-nowrap"> {category}</p>
        </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;