import { projects } from '@/mocks/projectsList';
import { ProjectDetails } from '@/components/ProjectDetails/ProjectDetails';

type Params = {
  id: string;
};

type ProductPageProps = {
  params: Params;
};

export async function generateStaticParams() {
  const params = projects.map(project => ({
    id: project.name,
  }));

  return params;
}

const ProjectPage = async ({ params }: ProductPageProps) => {
  const projectId = params?.id;
  const project = projects.find(project => project.id === projectId);

  return (
    <div
      style={{ backgroundImage: 'url(/bg-2.jpg)', overflowY: 'scroll' }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      {project ? (
        <ProjectDetails project={project} />
      ) : (
        <p>Project with id: {projectId} not found</p>
      )}
    </div>
  );
};

export default ProjectPage;
