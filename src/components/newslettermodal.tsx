"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HandPalm, MagicWand, ShootingStar, Sparkle, X } from "@phosphor-icons/react/dist/ssr";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
      <div className="flex flex-col gap-6 items-center justify-center bg-white rounded-2xl py-5 w-fit h-auto overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center w-full px-4 cursor-pointer">
          <p className="font-playfair italic text-base font-medium leading-tight cursor-default">SitesforUX</p>
          <div className="p-1 bg-[#707070]/10 rounded-s">
            <X size={16} color="#707070" onClick={onClose} />
          </div>
        </div>

        {/* Tagline */}
        <div className="flex flex-col gap-3 px-4 items-center justify-center">
          <div className="flex gap-2 items-center justify-center py-2 px-4 bg-[#2a9d8f]/20 rounded-full text-nowrap">
            <HandPalm size={16} color="#2a9d8f" weight="fill" />
            <p className="font-instrument text-sm md:text-base font-medium">Don't miss design world's best-kept secrets</p>
          </div>
          <p className="font-instrument text-sm italic font-regular text-[#707070] leading-tight text-center">
            What you've seen is only a glimpse— there's so much <br /> more curated behind.
          </p>
        </div>

        {/* Animated Images */}
        <div className="flex gap-4 animate-marquee w-full md:w-[406px]">
          <Image src="https://res.cloudinary.com/dp3ie9obh/image/upload/v1734978700/grainient_xpz5jv.png" alt="Newsletter" width={235} height={120} loading="lazy" />
          <Image src="https://res.cloudinary.com/dp3ie9obh/image/upload/v1734978702/Screenshot_2024-12-01_185944_ipnmxs.png" alt="Newsletter" width={235} height={120} loading="lazy" />
          <Image src="https://res.cloudinary.com/dp3ie9obh/image/upload/v1734978703/Screenshot_2024-12-01_191812_cetmqk.png" alt="Newsletter" width={235} height={120} loading="lazy" />
          <Image src="https://res.cloudinary.com/dp3ie9obh/image/upload/v1734978706/Screenshot_2024-12-03_203421_tf72bg.png" alt="Newsletter" width={235} height={120} loading="lazy" />
        </div>

        {/* Subscription Text */}
        <div className="flex flex-col gap-4 pt-1 px-4 items-center justify-center w-full">
          <p className="font-instrument text-sm font-regular leading-tight text-center">
            Subscribe now to unlock weekly updates on the latest <br /> design gems and exclusive resources
          </p>

          {/* Form */}
          <div className="flex flex-col gap-2 items-center justify-center w-full">
            <form
              action="https://formbold.com/s/3wMAk"
              method="POST"
              className="flex flex-col gap-2 items-center justify-center w-full"
            >
              <input
                className="font-instrument text-sm p-2 rounded-md border border-[#707070]/35 text-[#707070] w-full focus:outline-none focus:ring-1 focus:ring-[#2a9d8f]"
                type="email"
                placeholder="yourname@email.com"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button
                className={`flex gap-2 items-center justify-center rounded-md font-instrument text-sm px-4 py-2 w-full transition-all ${
                  isValid
                    ? 'bg-[#2a9d8f] text-white hover:bg-[#20786e] cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                type="submit"
                disabled={!isValid}
              >
                <MagicWand className={`${isValid ? "visible" : "hidden"}`} size={16} weight="fill" color="#fff" />
                Subscribe
              </button>
            </form>
            <p className="font-instrument text-xs text-[#707070]">No spam, just pure design gold 🤌</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;
