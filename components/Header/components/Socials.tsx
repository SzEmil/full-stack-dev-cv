import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import css from './Socials.module.css';

export const Socials = () => {
  return (
    <div className="flex flex-row gap-5 mb-2">
      <Link href="https://github.com/SzEmil" className={css.icon}>
        <FaGithub size={30} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/emil-szymczyk-209613209/"
        className={css.icon}
      >
        <FaLinkedin size={30} />
      </Link>
    </div>
  );
};
