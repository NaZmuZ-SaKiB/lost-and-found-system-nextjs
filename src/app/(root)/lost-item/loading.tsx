import SearchResultLoading from "@/components/Loaders/SearchResultLoading";
import Filters from "@/components/Shared/Filters";
import { Button } from "@/components/ui/button";

const loading = () => {
  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <div className="flex max-xs:flex-col items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold">Lost Items</h1>

          <Button className="bg-pink-500 hover:bg-pink-600">
            Report A Lost Item
          </Button>
        </div>

        <div className="mt-5 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
          <Filters />
        </div>

        <SearchResultLoading />
      </div>
    </main>
  );
};

export default loading;
