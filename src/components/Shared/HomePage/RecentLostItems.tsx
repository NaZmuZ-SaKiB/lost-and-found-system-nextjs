import LostItemCard from "@/components/Card/LostItemCard";
import { Button } from "@/components/ui/button";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";

export const fetchCache = "force-no-store";

const RecentLostItems = async () => {
  const lostItems = await getAllLostItems({ limit: 4 });

  return (
    <section className="bg-gray-50 py-20 px-2 sm:px-4">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">
          Recent Lost Reports
        </h2>
        <div className="w-[125px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

        <div className="flex flex-wrap gap-5 mt-10 justify-center">
          {lostItems?.data?.map((item: any) => (
            <LostItemCard key={item.id} lostItem={item} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href={"/lost-item"}>
            <Button className="bg-pink-500 hover:bg-pink-600">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentLostItems;
