import React, { useEffect, useRef, useState, useCallback } from 'react'

import { EpButton } from '../button/EpButton'
import { EpImage } from '../image/EpImage'

export interface CarouselImage {
  alt?: string
  aspectRatio?: string
  caption?: string
  captionPosition?: 'top-left' | 'top-center' | 'top-right' | 'left-center' | 'center' | 'right-center' | 'bottom-left' | 'bottom-center' | 'bottom-right'
  positionX?: string
  positionY?: string
  src: string
  zoom?: number
}

export interface EpCarouselProps {
  /** Additional CSS classes */
  className?: string
  /** Array of image objects to display in the carousel */
  images: CarouselImage[]
  /** Callback when image is clicked */
  onImageClick?: (params: { image: CarouselImage; index: number }) => void
  /** Callback when slide changes */
  onSlideChange?: (params: { image: CarouselImage; index: number }) => void
}

/**
 * EpCarousel - Feature-rich carousel with center-snap behavior
 * 
 * Features center-aligned scrolling, clickable images, zoom/position support,
 * flexible caption positioning, and dot navigation indicators.
 */
export const EpCarousel: React.FC<EpCarouselProps> = ({
  images = [],
  onImageClick,
  onSlideChange,
  className = ''
}) => {
  const carouselContainerRef = useRef<HTMLDivElement>(null)
  const carouselTrackRef = useRef<HTMLDivElement>(null)
  const itemRefsRef = useRef<(HTMLDivElement | null)[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [, setShouldLoadImages] = useState(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Reset to first image when images prop changes
  useEffect(() => {
    setCurrentIndex(0)
    setTimeout(() => {
      if (itemRefsRef.current[0] && carouselTrackRef.current) {
        scrollToImage(0)
      }
    }, 0)
  }, [images])

  const handleScroll = () => {
    // Debounce scroll handling
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }

    scrollTimeoutRef.current = setTimeout(() => {
      updateCurrentIndex()
    }, 100)
  }

  const updateCurrentIndex = () => {
    if (!carouselTrackRef.current) return

    const trackRect = carouselTrackRef.current.getBoundingClientRect()
    const centerX = trackRect.left + trackRect.width / 2

    let closestIndex = 0
    let closestDistance = Infinity

    itemRefsRef.current.forEach((item, index) => {
      if (!item) return
      const itemRect = item.getBoundingClientRect()
      const itemCenterX = itemRect.left + itemRect.width / 2
      const distance = Math.abs(centerX - itemCenterX)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    if (currentIndex !== closestIndex) {
      setCurrentIndex(closestIndex)
      onSlideChange?.({ index: closestIndex, image: images[closestIndex] })
    }
  }

  const scrollToImage = useCallback((index: number) => {
    const item = itemRefsRef.current[index]
    if (!item || !carouselTrackRef.current) return

    const trackRect = carouselTrackRef.current.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    const scrollLeft = carouselTrackRef.current.scrollLeft

    // Calculate the offset needed to center the item
    const itemCenter = itemRect.left - trackRect.left + itemRect.width / 2
    const trackCenter = trackRect.width / 2
    const scrollOffset = itemCenter - trackCenter

    carouselTrackRef.current.scrollTo({
      left: scrollLeft + scrollOffset,
      behavior: 'smooth'
    })

    setCurrentIndex(index)
    onImageClick?.({ image: images[index], index })
  }, [images, onImageClick])

  const getImageContainerStyle = (image: CarouselImage): React.CSSProperties => {
    const aspectRatio = image.aspectRatio || '16/9'

    // Parse aspect ratio
    const [width, height] = aspectRatio.split('/').map((v) => parseFloat(v.trim()))
    const ratio = width / height

    return {
      aspectRatio: aspectRatio,
      width: `calc(var(--ep-carousel-height, 50vh) * ${ratio})`
    }
  }

  const getImageStyle = (image: CarouselImage): React.CSSProperties => {
    const styles: React.CSSProperties = {}

    if (image.zoom) {
      styles.transform = `scale(${image.zoom})`
    }

    if (image.positionX !== undefined || image.positionY !== undefined) {
      const x = image.positionX || '50%'
      const y = image.positionY || '50%'
      styles.transformOrigin = `${x} ${y}`
    }

    return styles
  }

  const getCaptionPositionClass = (image: CarouselImage): string => {
    const position = image.captionPosition || 'bottom-center'
    return `caption-${position}`
  }

  useEffect(() => {
    // Set up intersection observer for the carousel container
    const containerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadImages(true)
            containerObserver.disconnect()
          }
        })
      },
      {
        rootMargin: '500px 0px 500px 0px',
        threshold: 0
      }
    )

    if (carouselContainerRef.current) {
      containerObserver.observe(carouselContainerRef.current)
    }

    // Set up resize observer to re-center active image
    const resizeObserver = new ResizeObserver(() => {
      const item = itemRefsRef.current[currentIndex]
      if (!item || !carouselTrackRef.current) return

      const trackRect = carouselTrackRef.current.getBoundingClientRect()
      const itemRect = item.getBoundingClientRect()
      const scrollLeft = carouselTrackRef.current.scrollLeft

      const itemCenter = itemRect.left - trackRect.left + itemRect.width / 2
      const trackCenter = trackRect.width / 2
      const scrollOffset = itemCenter - trackCenter

      carouselTrackRef.current.scrollTo({
        left: scrollLeft + scrollOffset,
        behavior: 'instant' as any
      })
    })

    if (carouselContainerRef.current) {
      resizeObserver.observe(carouselContainerRef.current)
    }

    // Scroll to first image on mount
    setTimeout(() => {
      if (itemRefsRef.current[0] && carouselTrackRef.current) {
        scrollToImage(0)
      }
    }, 0)

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      containerObserver.disconnect()
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={carouselContainerRef}
      className={`ep-case-study-carousel${className ? ` ${className}` : ''}`}
    >
      <div
        ref={carouselTrackRef}
        className="carousel-track"
        onScroll={handleScroll}
      >
        <div className="carousel-spacer" />
        {images.map((image, index) => (
          <div
            key={image?.src ?? index}
            ref={(el) => (itemRefsRef.current[index] = el)}
            className={`carousel-item${currentIndex === index ? ' is-active' : ''}`}
            role="button"
            tabIndex={0}
            onClick={() => scrollToImage(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                scrollToImage(index)
              }
            }}
          >
            <div className="carousel-image-container" style={getImageContainerStyle(image)}>
              <EpImage
                className="carousel-image"
                src={image.src}
                alt={image.alt}
                aspectRatio={image.aspectRatio}
                style={getImageStyle(image)}
              />
              {image.caption && (
                <div className={`carousel-caption ${getCaptionPositionClass(image)}`}>
                  {image.caption}
                </div>
              )}
            </div>
          </div>
        ))}
        <div className="carousel-spacer" />
      </div>

      <div className="carousel-navigation">
        <EpButton
          className="carousel-nav-button"
          size="xlarge"
          aria-label="Previous slide"
          disabled={currentIndex === 0}
          onClick={() => scrollToImage(currentIndex - 1)}
          iconLeft={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          }
        />
        <div className="carousel-dots">
          {images.map((image, index) => (
            <button
              key={`dot-${index}`}
              className={`carousel-dot${currentIndex === index ? ' is-active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollToImage(index)}
            />
          ))}
        </div>
        <EpButton
          className="carousel-nav-button"
          size="xlarge"
          aria-label="Next slide"
          disabled={currentIndex === images.length - 1}
          onClick={() => scrollToImage(currentIndex + 1)}
          iconLeft={
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          }
        />
      </div>
    </div>
  )
}
