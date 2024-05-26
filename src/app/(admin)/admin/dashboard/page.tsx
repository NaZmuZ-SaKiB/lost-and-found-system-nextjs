import DashboardMetaData from "@/components/Shared/Dashboard/DashboardMetaData";
import RecentFoundItemsDataTable from "@/components/Shared/Dashboard/RecentFoundItemsDataTable";
import RecentLostItemsDataTable from "@/components/Shared/Dashboard/RecentLostItemsDataTable";

const AdminDashboardPage = async () => {
  return (
    <main className="container !py-10">
      <h1 className="text-4xl font-semibold">Dashboard</h1>

      <DashboardMetaData />

      <div className="mt-10 xl:grid grid-cols-2 gap-3">
        <RecentFoundItemsDataTable />
        <RecentLostItemsDataTable />
      </div>
    </main>
  );
};

export default AdminDashboardPage;
