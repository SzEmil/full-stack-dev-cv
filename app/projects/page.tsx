import { topProjects } from '@/mocks/projectsList';
import { easyProjects } from '@/mocks/projectsList';
import { ProjectsList } from '@/components/ProjectsList/ProjectsList';
import { projects } from '@/mocks/projectsList';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/Mountains.jpg)' }}
      className="w-screen h-screen flex flex-col gap-10 items-center justify-center bg-center bg-cover "
    >
      <ProjectsList projects={projects} />
    </div>
  );
};

export default Page;
