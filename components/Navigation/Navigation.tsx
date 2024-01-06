'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Routes } from '@/constants/endpoints';
import Link from 'next/link';
import { NAVIGATIONS } from './data';

export const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();

  const [prevPath, setPrevPath] = useState('/');

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [prevPath, path]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);


  return (
    <div
      style={{ left: '20%' }}
      className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border border-white py-7"
    >
      {NAVIGATIONS.map(nav => (
        <Link
          key={nav.icon}
          href={nav.href}
          className="mb-16 pl-4 min-w-[20%]"
        >
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.href ? 'text-purple-800' : 'text-white'
            }`}
          />
        </Link>
      ))}
    </div>
  );
};
