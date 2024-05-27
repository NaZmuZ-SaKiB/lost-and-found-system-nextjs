import LostItemCard from "@/components/Card/LostItemCard";
import CustomPagination from "@/components/Form/CustomPagination";
import Filters from "@/components/Shared/Filters";
import { Button } from "@/components/ui/button";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";

type TProps = {
  searchParams: any;
};

const LostItemPage = async ({ searchParams }: TProps) => {
  console.log("searchparams", searchParams);

  const lostItems = await getAllLostItems(searchParams);

  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <div className="flex max-xs:flex-col items-center justify-between gap-4">
          <h1 className="text-4xl font-semibold">Lost Items</h1>
          <Link href="/report-lost-item">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Report A Lost Item
            </Button>
          </Link>
        </div>

        <div className="mt-5 flex gap-3 justify-center items-center flex-wrap max-w-screen-md mx-auto">
          <Filters />
        </div>

        <div className="flex gap-5 mt-10 justify-center flex-wrap">
          {lostItems?.data?.map((lostItem: any) => (
            <LostItemCard key={lostItem.id} lostItem={lostItem} />
          ))}

          {!lostItems?.data?.length && (
            <p className="text-pink-500 text-xl bg-pink-50 flex-1 text-center p-3">
              No Lost Items
            </p>
          )}
        </div>

        <CustomPagination
          page={lostItems?.meta?.page}
          limit={lostItems?.meta?.limit}
          total={lostItems?.meta?.total}
        />
      </div>
    </main>
  );
};

export default LostItemPage;
