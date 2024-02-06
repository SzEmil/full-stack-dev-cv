'use client';

import { technologies } from '@/mocks/projectsList';
import { useState } from 'react';

type NavBarProps = {
  handleAddFilter: (filter: string) => void;
  selectedTechnologies: string[];
};

export const MobileNav = ({
  handleAddFilter,
  selectedTechnologies,
}: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-[100%] xl:hidden">
      <button
        onClick={() => setIsMenuOpen(prevVal => !prevVal)}
        style={{ transform: isMenuOpen ? 'rotateX(0deg)' : 'rotateX(-180deg)' }}
        className="w-[100%] text-[24px] px-4 py-2 bg-[rgba(0,0,0,0.3)] inline rounded-md text-white hover:text-[#ad4475] hover:cursor-pointer rotate"
      >
        ^
      </button>
      {isMenuOpen && (
        <div className="flex-wrap gap-2">
          {technologies.map(tech => (
            <button
              className="text-[16px] px-4 py-2 bg-[rgba(0,0,0,0.3)] inline rounded-md text-white hover:text-[#ad4475]"
              style={{
                color: selectedTechnologies.includes(tech ?? null)
                  ? '#ad4475'
                  : 'white',
              }}
              onClick={() => handleAddFilter(tech)}
              key={tech}
            >
              {tech}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
