import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BookComponentProps {
  src: string;
  name: string;
  description: string;
  link: string;
}

const BookComponent: React.FC<BookComponentProps> = ({ src, name, description, link }) => {
  return (
    <Link 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col gap-4 w-full max-w-[250px] h-fit items-center"
    >
      {/* Book Container */}
      <div className="flex items-center gap-0 w-full">
        {/* Book Spine */}
        <div className="
          bg-gradient-to-r from-[#3f3f3f] to-[#ededed] to-60% 
          rounded-tl-md rounded-bl-md
          w-[12px] sm:w-[14px] md:w-[16px] lg:w-[18px] 
          h-[213px] sm:h-[255px] md:h-[284px] lg:h-[292px]
        "></div>
        
        {/* Book Cover */}
        <div className="
          relative overflow-hidden
          w-[150px] sm:w-[180px] md:w-[200px] lg:w-[206px] 
          aspect-[206/292]
        ">
          <Image
            src={src}
            alt={name}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
      
      {/* Book Details */}
      <div className="flex flex-col items-start justify-between h-full lg:gap-1 w-full">
        <p className="text-white text-sm sm:text-base font-instrument font-semibold w-full">{name}</p>
        <p className="text-[#707070] font-instrument text-xs sm:text-sm leading-tight w-full">{description}</p>
      </div>
    </Link>
  );
};

export default BookComponent;
