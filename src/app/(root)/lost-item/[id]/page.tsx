import LostItemInfo from "@/components/Shared/LostItemPage/LostItemInfo";
import { getLostItemById } from "@/lib/actions/lostItem.action";
import { notFound } from "next/navigation";

type TProps = {
  params: {
    id: string;
  };
};

const SingleLostItemPage = async ({ params }: TProps) => {
  const lostItem = await getLostItemById(params.id);

  if (!lostItem) notFound();

  return (
    <main className="py-10 flex px-2 flex-col gap-10">
      <div>
        <h1 className="text-4xl font-semibold text-center">Lost Item</h1>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
      </div>

      <LostItemInfo lostItem={lostItem} />
    </main>
  );
};

export default SingleLostItemPage;
