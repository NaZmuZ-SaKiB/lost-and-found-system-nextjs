import FiltersLoading from "@/components/Loaders/FiltersLoading";
import SearchResultLoading from "@/components/Loaders/SearchResultLoading";
import Filters from "@/components/Shared/Filters";
import SearchResults from "@/components/Shared/SearchResults";
import { Button } from "@/components/ui/button";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";

type TProps = {
  searchParams: any;
};

const MyLostItemsPage = async ({ searchParams }: TProps) => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <div className="flex max-sm:flex-col items-center justify-between gap-5">
          <h1 className="text-4xl font-semibold">My Lost Items</h1>
          <Link href="/report-lost-item">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Report A Lost Item
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
            searchFunction={(params: any) =>
              getAllLostItems({ userId: user.id, ...params })
            }
            type="lost-item"
          />
        </Suspense>
      </div>
    </main>
  );
};

export default MyLostItemsPage;
