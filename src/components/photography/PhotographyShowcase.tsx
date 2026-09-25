import React from "react";
import PhotoGallery from "@/components/modules/PhotoGallery";
import { Photo, photos as defaultPhotos } from "@/data/photos";

export interface PhotographyShowcaseProps {
  photos?: Photo[];
}

export default function PhotographyShowcase({ photos = defaultPhotos }: PhotographyShowcaseProps) {
  return (
    <section className="w-full bg-surface-canvas pt-10 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoGallery photos={photos} />
      </div>
    </section>
  );
}
