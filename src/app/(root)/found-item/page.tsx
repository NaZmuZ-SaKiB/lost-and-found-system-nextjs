import FoundItemCard from "@/components/Card/FoundItemCard";
import { Button } from "@/components/ui/button";
import { getAllFoundItems } from "@/lib/actions/foundItem.actions";
import Link from "next/link";

export const fetchCache = "force-no-store";

const FoundItemPage = async () => {
  const foundItems = await getAllFoundItems();

  return (
    <main>
      <div className="container !py-20">
        <div className="flex justify-between gap-4">
          <h1 className="text-4xl font-semibold">Found Items</h1>
          <Link href="/report-found-item">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Report A Found Item
            </Button>
          </Link>
        </div>

        <div className="flex gap-3 mt-10 justify-center flex-wrap">
          {foundItems.map((foundItem: any) => (
            <FoundItemCard key={foundItem.id} foundItem={foundItem} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FoundItemPage;
