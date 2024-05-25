import LostItemCard from "@/components/Card/LostItemCard";
import { getAllLostItems } from "@/lib/actions/lostItem.action";

export const fetchCache = "force-no-store";

const RecentLostItems = async () => {
  const lostItems = await getAllLostItems({ limit: 4 });

  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">
          Recent Lost Reports
        </h2>
        <div className="w-[125px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

        <div className="flex gap-3 mt-10 justify-center">
          {lostItems.map((item: any) => (
            <LostItemCard key={item.id} lostItem={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentLostItems;
