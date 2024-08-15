import Link from "next/link";
import { Button } from "../ui/button";
import FoundItemCardDeleteButton from "../Shared/FoundItemCardDeleteButton";
import Image from "next/image";
import PlaceHolderImage from "@/assets/images/placeholder-image.webp";
import { cn } from "@/lib/utils";

type TProps = {
  foundItem: any;
  userId?: string;
};

const FoundItemCard = ({ foundItem, userId }: TProps) => {
  const isMyItem = userId === foundItem?.user?.id;

  return (
    <div className="item_card">
      <div
        className={cn(
          "w-full h-[200px] rounded-xl overflow-hidden relative mb-3 border border-slate-300",
          { "bg-slate-100 border-0": !foundItem?.image }
        )}
      >
        <Image
          src={foundItem?.image || PlaceHolderImage.src}
          className="object-cover object-center"
          fill
          alt={foundItem?.foundItemName}
        />
      </div>
      <h3 className="text-xl text-slate-700 font-semibold mb-3 p-1">
        {foundItem.foundItemName}
      </h3>

      <p className="text-slate-600 text-sm leading-6 p-1">
        {foundItem.foundItemName} was found on{" "}
        {new Date(foundItem.lostDate).toDateString()} at {foundItem.location}.
        If this belongs to you or your friend, please contact me at{" "}
        {foundItem.contactNo || foundItem.user.userProfile.contactNo}.
      </p>

      <div className="text-center w-full left-0 px-3.5 absolute bottom-3.5 flex gap-3">
        <Link href={`/found-item/${foundItem.id}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full rounded-md bg-transparent border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-pink-50"
            size="sm"
          >
            View / Claim
          </Button>
        </Link>
        {isMyItem && <FoundItemCardDeleteButton foundItemId={foundItem.id} />}
      </div>
    </div>
  );
};

export default FoundItemCard;
