import LostItemCard from "@/components/Card/LostItemCard";
import { Button } from "@/components/ui/button";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";

const RecentLostItems = async () => {
  const lostItems = await getAllLostItems({ limit: 4 });

  return (
    <section className="bg-slate-50/50 py-20 px-2 sm:px-4">
      <div className="container">
        <h2 className="text-4xl text-slate-700 font-semibold text-center">
          Recent Lost Reports
        </h2>
        <div className="w-[125px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-600" />

        {/* <div className="flex flex-wrap gap-5 mt-10 justify-center"> */}
        <div className="custom-grid gap-5 mt-10">
          {lostItems?.data?.map((item: any) => (
            <LostItemCard key={item.id} lostItem={item} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href={"/lost-item"}>
            <Button className="bg-pink-600 hover:bg-pink-700">View All</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentLostItems;
