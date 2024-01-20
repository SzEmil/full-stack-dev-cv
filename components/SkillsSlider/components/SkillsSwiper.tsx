'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { SkillsData } from './SkillsData.types';

type SkillsSwiperProps = {
  reverseDirection?: boolean;
  skillsData?: SkillsData;
  slidesPerView?: number;
  title?: string;
};

export const SkillsSwiper = ({
  reverseDirection = false,
  skillsData,
  slidesPerView = 5,
  title,
}: SkillsSwiperProps) => {
  return (
    <div className="flex flex-col gap-10 max-w-[100%] md:max-w-[80%] text-center items-center">
      <h1 className="text-white font-semibold text-[24px]">{title}</h1>
      <Swiper
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection }}
        speed={2000}
        modules={[Autoplay]}
        className="max-w-[80%]"
      >
        {skillsData?.map(skill => (
          <SwiperSlide key={skill.name}>
            <div className='flex flex-col justify-center items-center gap-1'>
              <Image
                src={skill.Image}
                alt={skill.name}
                width={80}
                height={80}
              />
              <p className='text-white'>{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
