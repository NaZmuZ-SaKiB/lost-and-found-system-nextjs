import ClaimForm from "@/components/Shared/FoundItemPage/ClaimForm";
import FoundItemClaims from "@/components/Shared/FoundItemPage/FoundItemClaims";
import FoundItemInfo from "@/components/Shared/FoundItemPage/FoundItemInfo";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import {
  getFoundItemById,
  isFoundItemClaimedByMe,
} from "@/lib/actions/foundItem.actions";
import { notFound } from "next/navigation";

type TProps = {
  params: {
    id: string;
  };
};

const SingleFoundItemPage = async ({ params }: TProps) => {
  const foundItem = await getFoundItemById(params.id);

  if (!foundItem) notFound();

  const user = await isUserLoggedIn();

  const isClaimed = await isFoundItemClaimedByMe(params.id);

  const isFoundBy = user?.id === foundItem.user.id;

  return (
    <main className="py-10 px-2 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-semibold text-center">Found Item</h1>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
      </div>

      <FoundItemInfo foundItem={foundItem} />

      {user?.id && !isFoundBy && !isClaimed && (
        <ClaimForm lostItemId={foundItem.id} />
      )}

      {isClaimed && !isFoundBy && (
        <div className="container !py-5 bg-pink-50 border border-pink-500 rounded-3xl">
          <h2 className="text-3xl text-pink-500 text-center">
            You have claimed this item.
          </h2>
        </div>
      )}

      {isFoundBy && !foundItem.returned && (
        <FoundItemClaims claims={foundItem.claim} userId={user!.id} />
      )}
    </main>
  );
};

export default SingleFoundItemPage;
