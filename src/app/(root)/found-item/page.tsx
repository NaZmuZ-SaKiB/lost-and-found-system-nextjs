import FiltersLoading from "@/components/Loaders/FiltersLoading";
import SearchResultLoading from "@/components/Loaders/SearchResultLoading";
import Filters from "@/components/Shared/Filters";
import SearchResults from "@/components/Shared/SearchResults";
import { Button } from "@/components/ui/button";
import { getAllFoundItems } from "@/lib/actions/foundItem.actions";
import Link from "next/link";
import { Suspense } from "react";

type TProps = {
  searchParams: any;
};

const FoundItemPage = ({ searchParams }: TProps) => {
  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <div className="flex max-xs:flex-col items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold">Found Items</h1>
          <Link href="/report-found-item">
            <Button className="bg-pink-600 hover:bg-pink-700">
              Report A Found Item
            </Button>
          </Link>
        </div>

        <div className="mt-5 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
          <Suspense fallback={<FiltersLoading />}>
            <Filters />
          </Suspense>
        </div>

        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={<SearchResultLoading />}
        >
          <SearchResults
            searchParams={searchParams}
            searchFunction={getAllFoundItems}
            type="found-item"
          />
        </Suspense>
      </div>
    </main>
  );
};

export default FoundItemPage;
