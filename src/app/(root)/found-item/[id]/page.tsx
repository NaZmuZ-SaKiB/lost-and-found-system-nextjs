import ClaimForm from "@/components/Shared/FoundItemPage/ClaimForm";
import FoundItemInfo from "@/components/Shared/FoundItemPage/FoundItemInfo";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import {
  getFoundItemById,
  isFoundItemClaimedByMe,
} from "@/lib/actions/foundItem.actions";

type TProps = {
  params: {
    id: string;
  };
};

const SingleLostItemPage = async ({ params }: TProps) => {
  const user = await isUserLoggedIn();

  const foundItem = await getFoundItemById(params.id);

  const isClaimed = await isFoundItemClaimedByMe(params.id);

  const isFoundBy = user?.id === foundItem.user.id;

  return (
    <main className="py-10 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-semibold text-center">Lost Item</h1>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
      </div>

      <FoundItemInfo foundItem={foundItem} />
      {!isFoundBy && !isClaimed ? (
        <ClaimForm lostItemId={foundItem.id} />
      ) : (
        <div className="container !py-5 bg-pink-50 border border-pink-500 rounded-3xl">
          <h2 className="text-3xl text-pink-500 text-center">
            You have claimed this item.
          </h2>
        </div>
      )}
    </main>
  );
};

export default SingleLostItemPage;
