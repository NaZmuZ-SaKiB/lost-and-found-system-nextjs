import DashboardCard from "@/components/Card/DashboardCard";
import { getDashboardData } from "@/lib/actions/user.actions";
import AdminPieChart from "./AdminPieChart";
import {
  getClaimChartData,
  getFoundVsReturnedChartData,
  getLostVsFoundChartData,
} from "@/utils/chartData";
import {
  getClaimChartConfig,
  getFoundVsReturnedChartConfig,
  getLostVsFoundChartConfig,
} from "@/utils/chartConfig";
import AdminBarChart from "./AdminBarChart";
import { AdminDashboardItems, UserDashboardItems } from "@/constants";

const DashboardMetaData = async ({ role }: { role: "ADMIN" | "USER" }) => {
  const data = await getDashboardData();

  const itemsArray =
    role === "ADMIN" ? AdminDashboardItems : UserDashboardItems;

  let lostVsFoundChartData: any;
  let lostVsFoundChartConfig: any;
  let claimPieChartData: any;
  let claimPieChartConfig: any;
  let foundVsReturnedChartData: any;
  let foundVsReturnedChartConfig: any;

  if (role === "ADMIN") {
    lostVsFoundChartData = getLostVsFoundChartData(data);
    lostVsFoundChartConfig = getLostVsFoundChartConfig(data);

    claimPieChartData = getClaimChartData(data);
    claimPieChartConfig = getClaimChartConfig(data);

    foundVsReturnedChartData = getFoundVsReturnedChartData(data);
    foundVsReturnedChartConfig = getFoundVsReturnedChartConfig(data);
  }

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5">
        {itemsArray.map((item) => (
          <DashboardCard
            key={item.field}
            className={item.className}
            title={item.title}
            value={data?.[item.field]}
          />
        ))}
      </div>

      {role === "ADMIN" && (
        <>
          <div className="mt-4 flex gap-4 flex-wrap">
            <AdminPieChart
              chartConfig={lostVsFoundChartConfig}
              chartData={lostVsFoundChartData}
              dataKey="count"
              nameKey="type"
              title={"Lost vs Found Items"}
            />

            <AdminPieChart
              chartConfig={foundVsReturnedChartConfig}
              chartData={foundVsReturnedChartData}
              dataKey="count"
              nameKey="type"
              title={"Found vs Returned Items"}
            />

            <AdminPieChart
              chartConfig={claimPieChartConfig}
              chartData={claimPieChartData}
              dataKey="count"
              nameKey="status"
              title={"Claim Status"}
            />
          </div>

          <div className="mt-4">
            <AdminBarChart />
          </div>
        </>
      )}
    </div>
  );
};

export default DashboardMetaData;
