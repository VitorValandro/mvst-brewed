import React from "react";
import ImageWithFallback from "@/components/ImageWithFallback/ImageWithFallback";

export const CoffeeCard: React.FC<{
  title: string;
  tag: "ARABIC" | "ROBUSTA";
  imageUrl: string;
}> = ({title, tag, imageUrl}) => {
  const TAG_COLOR = tag === "ARABIC" ? "bg-arabic" : "bg-robusta";

  return (
    <div className="p-4 flex flex-col items-center bg-white border rounded-lg max-w-xs h-350 min-h-full">
      <div className="relative w-232 h-248">
        <ImageWithFallback
          role="image"
          fallbackImage={`/fallback-image.png`}
          src={imageUrl}
          alt="Product Image"
          fill
        />
      </div>

      <hr className="my-4 h-px w-full border-t-0 bg-details" />
      <div className="inline-flex justify-around">
        <h1
          role="title"
          className="w-4/6 text-lg text-title font-semibold leading-none"
        >
          {title}
        </h1>
        <div
          role="tag"
          className={`flex items-center justify-center w-auto h-6 py-1 px-2 text-xs font-semibold text-light ${TAG_COLOR} rounded-sm`}
        >
          <span>{tag}</span>
        </div>
      </div>
    </div>
  );
};
