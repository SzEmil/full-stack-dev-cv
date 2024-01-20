'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

type ImagesCarouselProps = {
  images: string[];
};

export const ImagesCarousel = ({ images }: ImagesCarouselProps) => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      emulateTouch={true}
      interval={2000}
      transitionTime={500}
      width="700px"
      className='rounded-md'
    >
      {images.map(image => (
        <div key={image} className='max-w-[700px] h-[450px] flex items-center justify-center'>
          <Image
            width={600}
            height={600}
            src={image}
            alt={image}
            className="rounded-md w-[100%] h-[auto]"
          />
        </div>
      ))}
    </Carousel>
  );
};
