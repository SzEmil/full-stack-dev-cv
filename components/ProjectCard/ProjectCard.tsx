import { Routes } from '@/constants/endpoints';
import Link from 'next/link';

type ProjectCardProps = {
  id: string;
  name: string;
  picture: string;
  tech: string[];
  overview: string;
  web: string;
  git: string;
};

export const ProjectCard = ({
  id,
  name,
  picture,
  tech,
  overview,
  web,
  git,
}: ProjectCardProps) => {
  return (
    <div className="lg:w-[450px] lg:h-[280px] w-[350px] h-[200px] rounded-md">
      <Link href={`${Routes.projects}/${id}`}>
        <div
          style={{ backgroundImage: `url(${picture})` }}
          className="w-full  h-full  bg-cover bg-center text-white rounded-lg p-4"
        >
          <div className=" inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40">
            <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
              Learn more &gt;
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
