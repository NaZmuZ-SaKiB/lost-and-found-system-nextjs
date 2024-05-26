import DashboardCard from "@/components/Card/DashboardCard";
import { DashboardItems } from "@/constants";
import { getDashboardData } from "@/lib/actions/user.actions";

const DashboardMetaData = async () => {
  const data = await getDashboardData();

  return (
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5">
      {DashboardItems.map((item) => (
        <DashboardCard
          key={item.field}
          className={item.className}
          title={item.title}
          value={data?.[item.field]}
        />
      ))}
    </div>
  );
};

export default DashboardMetaData;
