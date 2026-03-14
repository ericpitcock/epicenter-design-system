import React, { useState, useRef, useEffect, CSSProperties } from 'react';

export interface EpImageProps {
  /** The alt text for the image */
  alt?: string;
  /** Additional CSS class name for the image element */
  className?: string;
  /** The height of the image */
  height?: string | number;
  /** If true, enables lazy loading using Intersection Observer */
  lazy?: boolean;
  /** URL of the placeholder image to display while loading */
  placeholder?: string;
  /** The background color of the placeholder */
  placeholderColor?: string;
  /** The opacity of the placeholder */
  placeholderOpacity?: number;
  /** The source URL of the image */
  src: string;
  /** The width of the image */
  width?: string | number;
}

/**
 * EpImage - An image component with lazy loading and placeholder support
 */
export const EpImage: React.FC<EpImageProps> = ({
  src,
  alt = '',
  width = '100%',
  height = '100%',
  className = '',
  placeholder = '',
  placeholderColor = '#f5f5f5',
  placeholderOpacity = 1,
  lazy = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(!lazy);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lazy) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.01 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [lazy]);

  const placeholderStyle: CSSProperties = {
    width,
    height,
    backgroundColor: placeholderColor,
    opacity: placeholderOpacity,
    backgroundImage: placeholder ? `url(${placeholder})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const imageStyle: CSSProperties = {
    width,
    height,
    objectFit: 'cover',
  };

  return (
    <div
      ref={imageRef}
      className={`ep-image${className ? ` ${className}` : ''}`}
      style={placeholderStyle}
    >
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          style={{
            ...imageStyle,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

EpImage.displayName = 'EpImage';
