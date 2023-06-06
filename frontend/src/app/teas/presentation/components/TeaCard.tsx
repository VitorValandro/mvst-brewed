import React from "react";
import ImageWithFallback from "src/components/ImageWithFallback/ImageWithFallback";

export const TeaCard: React.FC<{
  title: string;
  imageUrl: string;
}> = ({ title, imageUrl }) => {
  return (
    <div className="p-4 flex flex-col items-center bg-white border rounded-lg max-w-xs h-350 min-h-full">
      <div className="relative w-232 h-248">
        <ImageWithFallback
          fallbackImage={`/fallback-image.png`}
          src={`/${imageUrl}`}
          alt="Product Image"
          fill
        />
      </div>

      <hr className="my-4 h-px w-full border-t-0 bg-details" />
      <div className="w-full inline-flex justify-left">
        <h1 className="text-lg text-primary font-semibold leading-none">
          {title}
        </h1>
      </div>
    </div>
  );
};
