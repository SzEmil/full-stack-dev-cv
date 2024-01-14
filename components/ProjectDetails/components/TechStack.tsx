import { generateRandomColor } from '@/helpers/generateRandomColors';

type TechStackProps = {
  techStack: string[];
};

export const TechStack = ({ techStack }: TechStackProps) => {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      {techStack.map(tech => (
        <div key={tech}>
          <p
            style={{ backgroundColor: generateRandomColor() }}
            className="px-2 py-1 text-white rounded-lg"
          >
            {tech}
          </p>
        </div>
      ))}
    </div>
  );
};
