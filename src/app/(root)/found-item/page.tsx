import FoundItemCard from "@/components/Card/FoundItemCard";
import CustomPagination from "@/components/Form/CustomPagination";
import Filters from "@/components/Shared/Filters";
import { Button } from "@/components/ui/button";
import { getAllFoundItems } from "@/lib/actions/foundItem.actions";
import Link from "next/link";

export const fetchCache = "force-no-store";

type TProps = {
  searchParams: any;
};

const FoundItemPage = async ({ searchParams }: TProps) => {
  const foundItems = await getAllFoundItems(searchParams);

  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <div className="flex max-xs:flex-col items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold">Found Items</h1>
          <Link href="/report-found-item">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Report A Found Item
            </Button>
          </Link>
        </div>

        <div className="mt-5 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
          <Filters />
        </div>

        <div className="flex gap-5 mt-10 justify-center flex-wrap">
          {foundItems?.data?.map((foundItem: any) => (
            <FoundItemCard key={foundItem.id} foundItem={foundItem} />
          ))}

          {!foundItems?.data?.length && (
            <p className="text-pink-500 text-xl bg-pink-50 flex-1 text-center p-3">
              No Found Items
            </p>
          )}
        </div>

        <CustomPagination
          page={foundItems?.meta?.page}
          limit={foundItems?.meta?.limit}
          total={foundItems?.meta?.total}
        />
      </div>
    </main>
  );
};

export default FoundItemPage;
