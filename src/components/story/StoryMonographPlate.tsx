import React from "react";
import Image from "next/image";

export interface StoryMonographPlateProps {
  imageSrc?: string;
  imageAlt?: string;
  caption?: string;
  location?: string;
}

export default function StoryMonographPlate({
  imageSrc = "https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto,f_auto,w_1000/v1779627924/Saeed_68_cewriq.jpg",
  imageAlt = "Hafiz Muhammad Saeed",
  caption = "Plate 02: Saeed in Contemplation",
  location = "Taxila, PK",
}: StoryMonographPlateProps) {
  return (
    <section className="w-full bg-surface-canvas py-6 sm:py-8">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="p-3.5 bg-canvas-surface shadow-plate rounded-card">
          <div className="overflow-hidden aspect-[16/10] relative bg-canvas-recessed rounded-sharp">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover grayscale contrast-[1.04] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="pt-3 flex items-center justify-between font-mono text-[10px] tracking-wider uppercase text-ink-tertiary">
            <span>{caption}</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
