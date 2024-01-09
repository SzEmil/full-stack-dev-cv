import Link from 'next/link';
import { Socials } from './components/Socials';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <Link href={'/'}>
        <div className="flex flex-row gap-3 items-center">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <h1 className="text-white text-[25px] font-semibold">
            Web
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {' '}
              Creation{' '}
            </span>
          </h1>
        </div>
      </Link>
      <Socials />
    </div>
  );
};
