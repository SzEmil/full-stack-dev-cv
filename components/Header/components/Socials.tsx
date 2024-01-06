import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Socials = () => {
  return (
    <div className="flex flex-row gap-5 mb-2">
      <FaGithub size={30} color={"white"}/>
      <FaLinkedin size={30} color={"white"}/>
    </div>
  );
};
