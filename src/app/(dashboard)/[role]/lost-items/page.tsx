import FiltersLoading from "@/components/Loaders/FiltersLoading";
import UsersDataLoading from "@/components/Loaders/UsersDataLoading";

import Filters from "@/components/Shared/Filters";
import { Suspense } from "react";
import SearchResults from "./SearchResults";

type TProps = {
  searchParams: any;
};

const AdminFoundItemsPage = ({ searchParams }: TProps) => {
  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <h1 className="text-4xl font-semibold">Lost Items</h1>

      <div className="mt-5 mb-3 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
        <Suspense fallback={<FiltersLoading />}>
          <Filters />
        </Suspense>
      </div>

      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<UsersDataLoading />}
      >
        <SearchResults searchParams={searchParams} />
      </Suspense>
    </main>
  );
};

export default AdminFoundItemsPage;
