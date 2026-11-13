"use client";
import Image from "next/image";

const PhotoFrame = ({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) => {
  return (
    <div className="relative aspect-4/5 rounded-md p-2.5 md:p-3 shadow-xs">
      <span
        aria-hidden
        className="absolute top-1 md:top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-white/25"
      />
      <div className="relative h-full w-full overflow-hidden rounded-md bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          referrerPolicy="no-referrer"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default PhotoFrame;
