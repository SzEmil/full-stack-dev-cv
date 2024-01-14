'use client';

import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type ImageSliderProps = {
  images: string[];
};

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleNextImage = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
    } else {
      setCurrentImageIndex(prevVal => (prevVal = prevVal + 1));
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex(prevVal => (prevVal = prevVal - 1));
    }
  };

  useEffect(() => {
    setCurrentImage(images[currentImageIndex]);
  }, [currentImageIndex, images]);
  return (
    <div className="relative rounded-xl w-[750px] h-[550px] bg-[rgba(0,0,0,0.2)] flex flex-col items-center justify-center">
      <div>
        <Image
          width={700}
          height={600}
          src={currentImage}
          alt={currentImage}
          className="rounded-xl w-[100%] h-[auto]"
        />
      </div>
      <div
        onClick={handlePreviousImage}
        style={{
          pointerEvents: `${images.length === 1 ? 'none' : 'all'}`,
          color: `${images.length === 1 ? 'rgba(255,255,255,0.5)' : 'white'}`,
        }}
        className={
          'absolute text-white left-5 bottom-5 transition-colors hover:text-[#ad4475] hover:cursor-pointer'
        }
      >
        <FaArrowAltCircleLeft size={30} />
      </div>
      <div
        onClick={handleNextImage}
        style={{
          pointerEvents: `${images.length === 1 ? 'none' : 'all'}`,
          color: `${images.length === 1 ? 'rgba(255,255,255,0.5)' : 'white'}`,
        }}
        className={
          'absolute right-5 bottom-5 text-white transition-colors hover:text-[#ad4475] hover:cursor-pointer'
        }
      >
        <FaArrowAltCircleRight size={30} />
      </div>
    </div>
  );
};
