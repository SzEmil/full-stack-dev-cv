import { Project } from '@/types/data';
import { ProjectNavigation } from './components/ProjectNavigation';
import { TechStack } from './components/TechStack';
import { Routes } from '@/constants/endpoints';
import Link from 'next/link';
import { ImagesCarousel } from './components/ImagesCarousel/ImagesCarousel';

type ProjectDetailsProps = {
  project: Project;
};

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="flex justify-between w-screen">
      <div className="max-w-[700px]">
        <h2 className="text-white font-semibold text-[40px]">{project.name}</h2>
        <p className="text-white font-light text-[18px] pt-5">
          {project.overview}
        </p>
        <TechStack techStack={project.tech} />
        <ProjectNavigation web={project.web} git={project.git} />
        <Link href={Routes.projects}>
          <p className="text-[16px] px-4 py-2 bg-[rgba(0,0,0,0.3)] inline rounded-md text-white hover:text-[#ad4475] hover:cursor-pointer">
            Go Back
          </p>
        </Link>
      </div>
      <ImagesCarousel images={project.images} />
    </div>
  );
};
