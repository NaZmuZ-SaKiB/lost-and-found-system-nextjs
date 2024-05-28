import DashboardMetaDataLoading from "@/components/Loaders/DashboardMetaDataLoading";
import DataTableLoading from "@/components/Loaders/DataTableLoading";
import { Button } from "@/components/ui/button";

const loading = () => {
  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex justify-between gap-4">
        <h1 className="text-4xl font-semibold">Dashboard</h1>

        <Button className="bg-pink-500 hover:bg-pink-600">Manage Users</Button>
      </div>

      <DashboardMetaDataLoading />

      <div className="mt-10 xl:grid grid-cols-2 gap-3">
        <DataTableLoading />
        <DataTableLoading />
      </div>
    </main>
  );
};

export default loading;
