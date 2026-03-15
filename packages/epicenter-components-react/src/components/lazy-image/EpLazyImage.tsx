import React, { useState, useRef, useEffect, CSSProperties } from 'react';

export interface EpLazyImageProps {
  /** The alt text for the image. */
  alt?: string;
  /** The aspect ratio of the image (e.g., '16 / 9'). */
  aspectRatio?: string;
  /** Additional CSS class name for the image element. */
  className?: string;
  /** The height of the image. */
  height?: string | number;
  /** If true, enables lazy loading using Intersection Observer. */
  lazy?: boolean;
  /** How the image fits within its container. */
  objectFit?: string;
  /** URL of the placeholder image to display while loading. */
  placeholder?: string;
  /** The background color of the placeholder. */
  placeholderColor?: string;
  /** The opacity of the placeholder. */
  placeholderOpacity?: number;
  /** The root margin for the Intersection Observer. */
  rootMargin?: string;
  /** If true, applies rounded corners to the image. */
  rounded?: boolean;
  /** The source URL of the image. */
  src: string;
  /** The width of the image. */
  width?: string | number;
}

/**
 * EpLazyImage - An image component with lazy loading, aspect ratio, and shimmer loading
 */
export const EpLazyImage: React.FC<EpLazyImageProps> = ({
  alt = '',
  aspectRatio = '16 / 10',
  className = '',
  height = '100%',
  lazy = true,
  objectFit = 'contain',
  placeholder = '',
  placeholderColor = '#f5f5f5',
  placeholderOpacity = 1,
  rootMargin = '0px 0px 100px 0px',
  rounded = true,
  src,
  width = '100%',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy) {
      setIsLoaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [lazy, rootMargin]);

  const placeholderStyle: CSSProperties = {
    width,
    height,
    aspectRatio,
    backgroundColor: placeholderColor,
    opacity: placeholderOpacity,
    backgroundImage: placeholder ? `url(${placeholder})` : undefined,
    backgroundSize: 'cover',
  };

  const classes = [
    'ep-image',
    rounded && 'ep-image--rounded',
    !isLoaded && 'ep-image--loading',
  ].filter(Boolean).join(' ');

  return (
    <div ref={imageRef} className={classes}>
      {isLoaded ? (
        <img
          src={src}
          alt={alt}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          className={`ep-image__img${className ? ` ${className}` : ''}`}
          style={{ aspectRatio, objectFit } as CSSProperties}
        />
      ) : (
        <div className="ep-image__placeholder" style={placeholderStyle} />
      )}
    </div>
  );
};

EpLazyImage.displayName = 'EpLazyImage';
