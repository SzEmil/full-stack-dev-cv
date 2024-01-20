'use client';
import { useState, useEffect } from 'react';
import { SkillsSwiper } from './SkillsSwiper';
import {
  backendSkills,
  devopsSkills,
  frontendSkills,
  allSkills,
} from '@/mocks/skillsList';
import { useMediaQuery } from 'react-responsive';

export const SkillsPicker = () => {
  const [skillsName, setSkillsName] = useState<string>(frontendSkills.name);

  const currentSkills = allSkills.find(skill => skill.name === skillsName);
  
  const isDesktop = useMediaQuery({
    query: '(min-width: 1620px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return (
    <div className="flex flex-col gap-6 w-[100%] justify-center">
      <div className="flex gap-2 justify-center">
        {allSkills.map(skill => (
          <button
            key={skill.name}
            onClick={() => setSkillsName(skill.name)}
            className="text-[16px] px-4 py-2 bg-[rgba(0,0,0,0.3)] inline rounded-md text-white hover:text-[#ad4475]"
            style={{ color: skillsName === skill.name ? '#ad4475' : 'white' }}
          >
            {skill.name}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-5 w-[100%] justify-center items-center">
        <SkillsSwiper
          skillsData={currentSkills?.skills ?? []}
          title={currentSkills?.name}
          slidesPerView={currentSkills?.perView}
        />
        <SkillsSwiper
          skillsData={currentSkills?.skills ?? []}
          reverseDirection={true}
          slidesPerView={currentSkills?.perView}
        />
      </div>
    </div>
  );
};
