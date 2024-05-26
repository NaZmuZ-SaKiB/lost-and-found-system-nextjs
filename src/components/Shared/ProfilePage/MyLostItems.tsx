import LostItemCard from "@/components/Card/LostItemCard";
import { getAllLostItems } from "@/lib/actions/lostItem.action";

type TProps = {
  userId: string;
};

const MyLostItems = async ({ userId }: TProps) => {
  const lostItems = await getAllLostItems({ userId });

  return (
    <section className="container !py-10 !px-8 border border-pink-500 rounded-3xl">
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
    </section>
  );
};

export default MyLostItems;
