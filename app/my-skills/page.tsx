import { SkillsSlider } from '@/components/SkillsSlider/SkillsSlider';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/bg-2.jpg)' , overflowY: "scroll"}}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
    >
      <SkillsSlider />
    </div>
  );
};

export default Page;
