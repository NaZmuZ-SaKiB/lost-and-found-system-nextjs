import { cn } from "@/lib/utils";

type TProps = {
  className: string;
  title: string;
  value: number;
};

const DashboardCard = ({ className, title, value }: TProps) => {
  return (
    <div
      className={cn(
        "rounded-lg text-white p-3 xs:p-5 xs:py-5 text-center cursor-pointer",
        className
      )}
    >
      <h2 className="xs:text-xl xs:mb-3">{title}</h2>
      <span className="max-xs:text-2xl text-4xl">{value}</span>
    </div>
  );
};

export default DashboardCard;
