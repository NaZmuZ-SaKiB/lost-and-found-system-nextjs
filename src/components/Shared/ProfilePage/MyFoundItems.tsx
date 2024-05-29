import FoundItemCard from "@/components/Card/FoundItemCard";
import { Button } from "@/components/ui/button";
import { getAllFoundItems } from "@/lib/actions/foundItem.actions";
import Link from "next/link";

type TProps = {
  userId: string;
};

const MyFoundItems = async ({ userId }: TProps) => {
  const foundItems = await getAllFoundItems({ userId });
  return (
    <section className="container bg-gray-50 max-sm:!p-5 max-sm:!px-2 !py-10 !px-8 border border-gray-200 rounded-3xl">
      <h2 className="text-3xl font-semibold text-center">My Found Items</h2>
      <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

      <div className="flex gap-5 mt-10 justify-center flex-wrap">
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

      {foundItems?.data?.length > 0 && (
        <div className="flex justify-center mt-10">
          <Link href={"/my-found-items"}>
            <Button className="bg-pink-500 hover:bg-pink-600">View All</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyFoundItems;
