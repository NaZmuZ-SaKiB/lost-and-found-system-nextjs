import LostItemInfo from "@/components/Shared/LostItemPage/LostItemInfo";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getLostItemById } from "@/lib/actions/lostItem.action";

type TProps = {
  params: {
    id: string;
  };
};

const SingleLostItemPage = async ({ params }: TProps) => {
  const user = await isUserLoggedIn();

  const lostItem = await getLostItemById(params.id);

  const isLostBy = user?.id === lostItem.user.id;

  return (
    <main className="py-10 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-semibold text-center">Lost Item</h1>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
      </div>

      <LostItemInfo lostItem={lostItem} />
    </main>
  );
};

export default SingleLostItemPage;
