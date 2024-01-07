import { topProjects } from '@/mocks/projectsList';
import { easyProjects } from '@/mocks/projectsList';
import { ProjectsSlider } from '@/components/ProjectsSlider/ProjectsSlider';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/Mountains.jpg)' }}
      className="w-screen h-screen flex flex-col gap-10 items-center justify-center bg-center bg-cover"
    >
      <ProjectsSlider
        projects={topProjects}
        title="Most recent projects"
      />
      <ProjectsSlider
        projects={easyProjects}
        speed={4000}
        title="Learning jurney"
      />
    </div>
  );
};

export default Page;
