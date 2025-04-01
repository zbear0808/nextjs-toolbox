import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Styled components
const SlideshowContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  height: 450px; /* Fixed height, but you can adjust this */
  margin: 0 auto;
  overflow: hidden;
  background-color:rgba(0, 0, 0, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

const SlideImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* This ensures the image maintains its aspect ratio */
  /* and fits completely within the container */
`;

/**
 * ImageSlideshow component - displays a slideshow of images
 * @param {Object} props
 * @param {Array} props.images - Array of image objects: [{ src, alt }]
 * @param {number} props.interval - Interval for auto-sliding in milliseconds
 */
const ImageSlideshow = ({ images = [], interval = 1000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle auto-sliding
  useEffect(() => {
    // Return early if there are no images or only one image
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // If no images provided
  if (images.length === 0) {
    return (
      <SlideshowContainer
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        No images to display
      </SlideshowContainer>
    );
  }

  return (
    <SlideshowContainer>
      {images.map((image, index) => (
        <SlideWrapper
          key={`slide-${index}`}
          active={index === currentIndex}
        >
          <SlideImage
            src={image.src}
            alt={image.alt || `Slide ${index + 1}`}
          />
        </SlideWrapper>
      ))}
    </SlideshowContainer>
  );
};

export default ImageSlideshow;