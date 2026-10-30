import Image from "next/image";

import type { Photo } from "@/constants/photos";
import { cn } from "@/lib/utils";

type PhotoBackdropProps = {
  photo: Photo;
  overlayClassName: string;
  imageClassName?: string;
  priority?: boolean;
};

export function PhotoBackdrop({
  photo,
  overlayClassName,
  imageClassName,
  priority = false,
}: PhotoBackdropProps) {
  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        quality={70}
        sizes="100vw"
        className={cn("object-cover", imageClassName)}
      />

      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}
