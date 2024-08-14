import Link from "next/link";
import LostItemCardDeleteButton from "../Shared/LostItemCardDeleteButton";
import MarkAsFoundButton from "../Shared/MarkAsFoundButton";
import { Button } from "../ui/button";
import Image from "next/image";
import PlaceHolderImage from "@/assets/images/placeholder-image.webp";
import { cn } from "@/lib/utils";

type TProps = {
  lostItem: any;
  userId?: string;
};

const LostItemCard = ({ lostItem, userId }: TProps) => {
  const isMyItem = userId === lostItem?.user?.id;

  return (
    <div className="item_card">
      <div
        className={cn(
          "w-full h-[200px] rounded-xl overflow-hidden relative mb-3 border border-slate-300",
          { "bg-slate-100 border-0": !lostItem?.image }
        )}
      >
        <Image
          src={lostItem?.image || PlaceHolderImage.src}
          className="object-cover object-center"
          fill
          alt={lostItem?.lostItemName}
        />
      </div>
      <h3 className="text-xl text-slate-700 font-semibold mb-3 p-1">
        {lostItem.lostItemName}
      </h3>

      <p className="text-slate-600 text-sm leading-6 p-1">
        {lostItem.lostItemName} was lost on{" "}
        {new Date(lostItem.lostDate).toDateString()} at {lostItem.location}. If
        found, please contact the owner at{" "}
        {lostItem.contactNo || lostItem.user.userProfile.contactNo}.
      </p>
      <div className="text-center w-full left-0 px-3.5 absolute bottom-3.5 flex gap-3">
        <Link href={`/lost-item/${lostItem.id}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full rounded-md bg-transparent border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-pink-50"
            size="sm"
          >
            View
          </Button>
        </Link>
        {isMyItem && (
          <>
            <MarkAsFoundButton
              lostItemId={lostItem.id}
              found={lostItem.found}
            />
            <LostItemCardDeleteButton lostItemId={lostItem.id} />
          </>
        )}
      </div>
    </div>
  );
};

export default LostItemCard;
