import { Suspense } from "react";
import Filters from "@/components/Shared/Filters";
import UserSearchResults from "@/components/Shared/UserSearchResults";
import UsersDataLoading from "@/components/Loaders/UsersDataLoading";
import FiltersLoading from "@/components/Loaders/FiltersLoading";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

type TProps = {
  searchParams: any;
};

const ManageUsersPage = async ({ searchParams }: TProps) => {
  const user = await isUserLoggedIn();

  if (user?.role !== "ADMIN") {
    redirect("/user/dashboard");
  }
  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <h1 className="text-4xl font-semibold">User Management</h1>

      <div className="mt-5 mb-3 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
        <Suspense fallback={<FiltersLoading />}>
          <Filters category={false} />
        </Suspense>
      </div>

      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<UsersDataLoading />}
      >
        <UserSearchResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default ManageUsersPage;
