'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { ProjectCardProps } from './ProjectsSlider.types';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { useMediaQuery } from 'react-responsive';

type SkillsSwiperProps = {
  reverseDirection?: boolean;
  projects: ProjectCardProps[];
  title?: string;
  speed?: number;
};

export const ProjectsSlider = ({
  reverseDirection = false,
  projects,
  title,
  speed = 5000,
}: SkillsSwiperProps) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1620px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  return (
    <div className="flex flex-col gap-10 max-w-[90%] lg:px-4">
      <h1 className="text-white font-semibold text-[24px] ">{title}</h1>
      <Swiper
        slidesPerView={isDesktop ? 3 : isTablet ? 2 : 1}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection }}
        speed={speed}
        modules={[Autoplay]}
        className="max-w-[100%]"
      >
        {projects?.map(project => (
          <SwiperSlide key={project.id}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
