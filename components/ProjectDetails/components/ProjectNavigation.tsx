import { FaGithub } from 'react-icons/fa';
import { RiPagesLine } from 'react-icons/ri';
import Link from 'next/link';

type ProjectNavigationProps = {
  web: string;
  git: string;
};

export const ProjectNavigation = ({ web, git }: ProjectNavigationProps) => {
  return (
    <div className="flex gap-12 mt-16 mb-20">
      <Link href={git}>
        <div className="inline-flex gap-4 text-white transition-colors items-center hover:text-[#ad4475] hover:cursor-pointer">
          <FaGithub size={40} />
          <p> Project repo</p>
        </div>
      </Link>
      <Link href={web}>
        <div className="inline-flex gap-4 text-white transition-colors items-center hover:text-[#ad4475] hover:cursor-pointer">
          <RiPagesLine size={40} />
          <p> Demo</p>
        </div>
      </Link>
    </div>
  );
};
