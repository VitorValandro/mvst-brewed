import {useState} from "react";
import Image, {ImageProps} from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackImage: string;
}

export default function ImageWithFallback({
  fallbackImage,
  alt,
  src,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState<boolean>(false);

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? fallbackImage : src}
      {...props}
    />
  );
}
