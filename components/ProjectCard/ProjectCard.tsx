import { Routes } from '@/constants/endpoints';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import { HoverCard } from './components/HoverCard';
import Image from 'next/image';
import { dynamicBlurDataUrl } from '@/helpers/dynamicBlurDataUrl';

type ProjectCardProps = {
  id: string;
  name: string;
  picture: string;
  tech: string[];
  overview: string;
  web: string;
  git: string;
};

export const ProjectCard = async ({
  id,
  name,
  picture,
  tech,
  overview,
  web,
  git,
}: ProjectCardProps) => {
  const blurURL = await dynamicBlurDataUrl(picture)
  return (
    <div className="lg:w-[450px] lg:h-[280px] w-[350px] h-[200px] rounded-md hover:border relative group ">
      <Link href={`${Routes.projects}/${id}`}>
        <div
        //  style={{ backgroundImage: `url(${picture})` }}
          className="w-full  h-full  bg-cover bg-center text-white rounded-lg relative"
        >
        <Image
          src={picture}
          alt={name}
          placeholder='blur'
          blurDataURL={blurURL}
          objectFit='cover'
          layout='fill'
          objectPosition='center'
          className="w-full  h-full  text-white rounded-lg absolute left-0 top-0"
        />
        <div className=" inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-80 transition-opacity">
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center flex-col">
            <HoverCard name={name} web={web} git={git} />
          </div>
        </div>

        </div>
      </Link>
    </div>
  );
};
