import FoundItemCard from "@/components/Card/FoundItemCard";
import { getAllFoundItems } from "@/lib/actions/foundItem.actions";

type TProps = {
  userId: string;
};

const MyFoundItems = async ({ userId }: TProps) => {
  const foundItems = await getAllFoundItems({ userId });
  return (
    <section className="container !py-10 !px-8 border border-pink-500 rounded-3xl">
      <h2 className="text-3xl font-semibold text-center">My Found Items</h2>
      <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

      <div className="flex gap-5 mt-10 justify-center">
        {foundItems?.data?.length ? (
          foundItems?.data?.map((foundItem: any) => (
            <FoundItemCard
              key={foundItem.id}
              userId={userId}
              foundItem={foundItem}
            />
          ))
        ) : (
          <p>No Found Items</p>
        )}
      </div>
    </section>
  );
};

export default MyFoundItems;
