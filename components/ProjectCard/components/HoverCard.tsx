
type HoverCardProps = {
  name: string;
  web: string;
  git: string;
};
export const HoverCard = ({ name, git, web }: HoverCardProps) => {
  return (
    <div className="text-center">
      <p className="text-[24px]">{name}</p>
      <p className="mt-5 text-[16px]">Click for details </p>
    </div>
  );
};
