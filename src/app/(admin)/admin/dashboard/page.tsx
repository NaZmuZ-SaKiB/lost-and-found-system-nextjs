import DashboardMetaDataLoading from "@/components/Loaders/DashboardMetaDataLoading";
import DataTableLoading from "@/components/Loaders/DataTableLoading";
import DashboardMetaData from "@/components/Shared/Dashboard/DashboardMetaData";
import RecentFoundItemsDataTable from "@/components/Shared/Dashboard/RecentFoundItemsDataTable";
import RecentLostItemsDataTable from "@/components/Shared/Dashboard/RecentLostItemsDataTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

const AdminDashboardPage = () => {
  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex justify-between gap-4">
        <h1 className="text-4xl font-semibold">Dashboard</h1>
        <Link href="/admin/manage-users">
          <Button className="bg-pink-500 hover:bg-pink-600">
            Manage Users
          </Button>
        </Link>
      </div>

      <Suspense fallback={<DashboardMetaDataLoading />}>
        <DashboardMetaData />
      </Suspense>

      <div className="mt-10 xl:grid grid-cols-2 gap-3">
        <Suspense fallback={<DataTableLoading />}>
          <RecentFoundItemsDataTable />
        </Suspense>
        <Suspense fallback={<DataTableLoading />}>
          <RecentLostItemsDataTable />
        </Suspense>
      </div>
    </main>
  );
};

export default AdminDashboardPage;
