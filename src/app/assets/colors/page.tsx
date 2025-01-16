"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import ImageCard from "@/components/webistepreview";
import { Plus, StarFour } from "@phosphor-icons/react";
import { colors } from "@/data/assets";
import NewsletterModal from "@/components/newslettermodal";
import SubmitModal from "@/components/submitmodal";

export default function Colors() {
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const toggleModal = (setModalState: React.Dispatch<React.SetStateAction<boolean>>, state: boolean) => {
    setModalState(state);
  };

  return (
    /** Main Container */
    <div className="w-full flex flex-col main-content gap-8 bg-pagebg lg:rounded-xl h-full overflow-y-auto">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row items-start gap-5 lg:gap-4 lg:justify-between px-4 lg:px-7 pt-8 pb-4">
        <div>
          <h1 className="text-white text-2xl lg:text-4xl font-instrument font-semibold leading-tight">
          Discover Color Tools and Palettes <br/> for Stunning Designs
          </h1>
          <h2 className="text-[#707070] text-sm lg:text-lg font-instrument font-normal mt-2 lg:mt-4 leading-tight">
          Access platforms providing unique color palettes, gradient generators, and color tools
          </h2>
        </div>

        {/* Button Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => toggleModal(setIsNewsletterModalOpen, true)}
            aria-label="Get Updates"
            className="flex items-center gap-2 bg-textwhite py-2 px-4 rounded-lg font-instrument text-sm font-semibold leading-tight whitespace-nowrap"
          >
            <StarFour size={16} weight="duotone" /> Get Updates
          </button>
          <button
            onClick={() => toggleModal(setIsSubmitModalOpen, true)}
            aria-label="Submit Now"
            className="flex items-center gap-2 border-2 py-2 px-4 rounded-lg font-instrument text-sm font-semibold leading-tight text-textwhite whitespace-nowrap"
          >
            <Plus size={16} weight="bold" /> Submit Now
          </button>
        </div>
      </header>

      {/* Content Section */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 px-4 lg:px-7">
        {colors.map((colors) => (
          <ImageCard
            key={colors.id}
            src={colors.image}
            alt={colors.name}
            name={colors.name}
            link={colors.link}
            isEditorsChoice={colors.isEditorsChoice}
            isCategoryAvailable={colors.isCategoryAvailable}
            category={colors.category}
          />
        ))}
      </section>

      {/* Footer Section */}
      <footer className="flex flex-col pb-16 sm:flex-row items-center justify-center text-center font-instrument text-sm text-textwhite md:pb-4 opacity-80">
        <p>More handpicked resources coming soon.&nbsp;</p>
        <div className="flex items-center justify-center sm:justify-start">
          <span>Stay connected with our&nbsp;</span>
          <button
            aria-label="Subscribe to Newsletter"
            className="underline italic"
            onClick={() => toggleModal(setIsNewsletterModalOpen, true)}
          >
          Newsletter
          </button>
        </div>
      </footer>

      {/* Modals */}
      <NewsletterModal isOpen={isNewsletterModalOpen} onClose={() => toggleModal(setIsNewsletterModalOpen, false)} />
      <SubmitModal isOpen={isSubmitModalOpen} onClose={() => toggleModal(setIsSubmitModalOpen, false)} />
    </div>
  );
}
