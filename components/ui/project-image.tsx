'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function ProjectImage({ src, alt, className, priority }: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={priority}
      onError={() => setImgSrc('/images/placeholder.png')}
    />
  );
} 