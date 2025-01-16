"use client";

import React, { useState, useEffect } from "react";
import { X } from "@phosphor-icons/react/dist/ssr";

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmitModal: React.FC<SubmitModalProps> = ({ isOpen, onClose }) => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [userName, setUserName] = useState('');
  const [userSocial, setUserSocial] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Check if all fields are filled
    if (websiteUrl.trim() && userName.trim() && userSocial.trim()) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [websiteUrl, userName, userSocial]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-50">
      <div className="flex flex-col gap-6 items-center justify-center bg-white rounded-2xl py-5 w-fit h-auto overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center w-full px-4 cursor-pointer">
          <p className="font-playfair italic text-base leading-tight">SitesforUX</p>
          <div className="p-1 bg-[#707070]/10 rounded-s">
            <X size={16} color="#707070" onClick={onClose} />
          </div>
        </div>

        {/* Tagline */}
        <div className="flex flex-col gap-2 px-4 items-center justify-center">
          <div className="flex gap-2 items-center justify-center py-2 px-4 bg-[#2a9d8f]/20 rounded-full text-nowrap">
            <p>🌟</p>
            <p className="font-instrument text-sm md:text-base italic font-regular">Share Your Favorite Design Resources</p>
          </div>
          <p className="font-instrument text-sm italic font-regular text-[#707070] leading-tight text-center">
            Drop a link, add your socials, <br/> and be part of something bigger.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-2 px-4 items-center justify-center w-full">
          <form
            action="https://formbold.com/s/oaKDP"
            method="POST"
            className="flex flex-col gap-2 items-center justify-center w-full"
          >
            <input
              className="font-instrument text-sm p-2 rounded-md border border-[#707070]/35 text-[#707070] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="link"
              placeholder="website url"
              name="website link"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              required
            />
            <input
              className="font-instrument text-sm p-2 rounded-md border border-[#707070]/35 text-[#707070] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="your name"
              name="user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              className="font-instrument text-sm p-2 rounded-md border border-[#707070]/35 text-[#707070] w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="link"
              placeholder="https://x.com/yourusername"
              name="user social"
              value={userSocial}
              onChange={(e) => setUserSocial(e.target.value)}
              required
            />
            <button
              className={`rounded-md font-instrument text-sm px-4 py-2 w-full transition-all ${
                isValid
                  ? 'bg-[#2a9d8f] text-white hover:bg-[#20786e] cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
              type="submit"
              disabled={!isValid}
            >
              Submit
            </button>
          </form>
          <p className="font-instrument text-xs text-[#707070]">Your contribution is highly appreciated</p>
        </div>
      </div>
    </div>
  );
};

export default SubmitModal;
