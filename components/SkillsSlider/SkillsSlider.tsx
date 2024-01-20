import { SkillsPicker } from './components/SkillsPicker';

export const SkillsSlider = () => {
  return (
    <div className="flex flex-col gap-10 w-[100%] text-center items-center mb-[150px] md:mb-0 mt-[350px] md:mt-0">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-semibold text-white text-[50px]">
          Skills
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {' '}
            &{' '}
          </span>
          Technologies
        </h1>
        <p className="text-gray-300 text-[20px]">
          Using the latest tech this world has to offer
        </p>
      </div>
      <SkillsPicker />
    </div>
  );
};
