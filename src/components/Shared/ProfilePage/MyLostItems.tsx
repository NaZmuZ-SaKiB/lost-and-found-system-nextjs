import LostItemCard from "@/components/Card/LostItemCard";
import { Button } from "@/components/ui/button";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";

type TProps = {
  userId: string;
};

const MyLostItems = async ({ userId }: TProps) => {
  const lostItems = await getAllLostItems({ userId });

  return (
    <section className="container bg-gray-50 max-sm:!p-5 max-sm:!px-2 !py-10 !px-8 border border-gray-200 rounded-3xl">
      <h2 className="text-3xl font-semibold text-center">My Lost Items</h2>
      <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

      <div className="flex gap-5 mt-10 justify-center flex-wrap">
        {lostItems?.data?.length ? (
          lostItems?.data?.map((lostItem: any) => (
            <LostItemCard
              key={lostItem.id}
              userId={userId}
              lostItem={lostItem}
            />
          ))
        ) : (
          <p>No Lost Items</p>
        )}
      </div>

      {lostItems?.data?.length > 0 && (
        <div className="flex justify-center mt-10">
          <Link href={"/my-lost-items"}>
            <Button className="bg-pink-500 hover:bg-pink-600">View All</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyLostItems;
