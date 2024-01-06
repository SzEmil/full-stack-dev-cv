import { FaUser } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';
import { GrContact } from 'react-icons/gr';
import { MdOutlineWeb } from "react-icons/md";
import { Routes } from '@/constants/endpoints';

export const NAVIGATIONS = [
  {
    href: Routes.home,
    icon: IoHomeOutline,
  },
  {
    href: Routes.mySkills,
    icon: FaUser,
  },
  {
    href: Routes.projects,
    icon: MdOutlineWeb,
  },
  {
    href: Routes.contact,
    icon: GrContact,
  },
];
