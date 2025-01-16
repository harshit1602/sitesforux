"use client";

import React, { useState } from "react";
import "@/app/globals.css";
import ImageCard from "@/components/webistepreview";
import { Plus, StarFour } from "@phosphor-icons/react";
import { typography } from "@/data/assets";
import NewsletterModal from "@/components/newslettermodal";
import SubmitModal from "@/components/submitmodal";

export default function Typography() {
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
          Master Your Designs with <br/> Fonts That Speak Volumes
          </h1>
          <h2 className="text-[#707070] text-sm lg:text-lg font-instrument font-normal mt-2 lg:mt-4 leading-tight">
          Find curated platforms offering fonts, pairings, and typography tools
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
        {typography.map((typography) => (
          <ImageCard
            key={typography.id}
            src={typography.image}
            alt={typography.name}
            name={typography.name}
            link={typography.link}
            isEditorsChoice={typography.isEditorsChoice}
            isCategoryAvailable={typography.isCategoryAvailable}
            category={typography.category}
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
