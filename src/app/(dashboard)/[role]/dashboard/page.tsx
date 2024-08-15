import DashboardMetaDataLoading from "@/components/Loaders/DashboardMetaDataLoading";
import DataTableLoading from "@/components/Loaders/DataTableLoading";
import DashboardMetaData from "@/components/Shared/Dashboard/DashboardMetaData";
import RecentFoundItemsDataTable from "@/components/Shared/Dashboard/RecentFoundItemsDataTable";
import RecentLostItemsDataTable from "@/components/Shared/Dashboard/RecentLostItemsDataTable";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { Suspense } from "react";

const DashboardPage = async () => {
  const user = await isUserLoggedIn();

  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <h1 className="text-3xl sm:text-4xl font-semibold">Dashboard</h1>

      <Suspense fallback={<DashboardMetaDataLoading />}>
        <DashboardMetaData role={user?.role as any} />
      </Suspense>

      <div className="mt-4">
        <Suspense fallback={<DataTableLoading />}>
          <RecentFoundItemsDataTable
            role={user?.role as any}
            id={user?.id as any}
          />
        </Suspense>
        <Suspense fallback={<DataTableLoading />}>
          <RecentLostItemsDataTable
            role={user?.role as any}
            id={user?.id as any}
          />
        </Suspense>
      </div>
    </main>
  );
};

export default DashboardPage;
