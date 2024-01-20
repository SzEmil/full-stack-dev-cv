'use client';

import { ProjectCardProps } from './ProjectsSlider.types';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { useState } from 'react';
import { technologies } from '@/mocks/projectsList';

type SkillsSwiperProps = {
  projects: ProjectCardProps[];
};

export const ProjectsList = ({ projects }: SkillsSwiperProps) => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>(
    []
  );

  const handleAddFilter = (filter: string) => {
    const newTechs = [...selectedTechnologies];
    if (newTechs.includes(filter)) {
      newTechs.splice(newTechs.indexOf(filter), 1);
      setSelectedTechnologies(newTechs);
    } else {
      newTechs.push(filter);
      setSelectedTechnologies(newTechs);
    }
  };

  const getFilteredProjects = () => {
    if (selectedTechnologies.length === 0) return projects;
    return projects?.filter(project => {
      return project.tech.some(projectTech =>
        selectedTechnologies.includes(projectTech ?? null)
      );
    });
  };
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col gap-10 max-w-[90%] max-h-[80%] lg:px-4 overflow-y-scroll mt-[105px]">
        <div className="flex flex-wrap gap-2">
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
        <div className="flex flex-wrap gap-5 w-[100%] justify-center">
          {getFilteredProjects().map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};
