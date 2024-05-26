import DashboardMetaData from "@/components/Shared/Dashboard/DashboardMetaData";
import RecentFoundItemsDataTable from "@/components/Shared/Dashboard/RecentFoundItemsDataTable";
import RecentLostItemsDataTable from "@/components/Shared/Dashboard/RecentLostItemsDataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AdminDashboardPage = async () => {
  return (
    <main className="container !py-10">
      <div className="flex justify-between gap-4">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <Link href="/admin/manage-users">
          <Button className="bg-pink-500 hover:bg-pink-600">
            Manage Users
          </Button>
        </Link>
      </div>

      <DashboardMetaData />

      <div className="mt-10 xl:grid grid-cols-2 gap-3">
        <RecentFoundItemsDataTable />
        <RecentLostItemsDataTable />
      </div>
    </main>
  );
};

export default AdminDashboardPage;
