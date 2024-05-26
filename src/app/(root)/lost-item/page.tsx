import LostItemCard from "@/components/Card/LostItemCard";
import { Button } from "@/components/ui/button";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";

const LostItemPage = async () => {
  const lostItems = await getAllLostItems({ limit: 999 });

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

        <div className="flex gap-5 mt-10 justify-center flex-wrap">
          {lostItems?.data?.map((lostItem: any) => (
            <LostItemCard key={lostItem.id} lostItem={lostItem} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default LostItemPage;
