import FiltersLoading from "@/components/Loaders/FiltersLoading";
import UsersDataLoading from "@/components/Loaders/UsersDataLoading";

const loading = () => {
  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <h1 className="text-4xl font-semibold">User Management</h1>

      <div className="mt-5 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
        <FiltersLoading />
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
