import UsersDataLoading from "@/components/Loaders/UsersDataLoading";
import { Button } from "@/components/ui/button";

const loading = () => {
  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex max-sm:flex-col justify-between gap-4 items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">Manage Category</h1>

        <Button className="bg-gray-300 hover:bg-gray-300 w-28"></Button>
      </div>

      <div className="overflow-x-auto">
        <div className="mt-3 min-w-[700px]">
          <div className="text-sm p-2 font-semibold border rounded-md mb-1 bg-gray-50 border-gray-300 grid gap-3 grid-cols-6">
            <span className="col-span-2">Email</span>
            <span className="text-center">Role</span>
            <span className="text-center">Status</span>
            <span className="text-right col-span-2">Actions</span>
          </div>
          <UsersDataLoading />
        </div>
      </div>
    </main>
  );
};

export default loading;
