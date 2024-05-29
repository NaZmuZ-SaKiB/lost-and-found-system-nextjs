import Link from "next/link";
import LostItemCardDeleteButton from "../Shared/LostItemCardDeleteButton";
import MarkAsFoundButton from "../Shared/MarkAsFoundButton";
import { Button } from "../ui/button";
import Image from "next/image";
import PlaceHolderImage from "@/assets/images/placeholder-image.jpg";

type TProps = {
  lostItem: any;
  userId?: string;
};

const LostItemCard = ({ lostItem, userId }: TProps) => {
  const isMyItem = userId === lostItem?.user?.id;

  return (
    <div className="item_card">
      <div className="w-full h-[200px] relative mb-3 border-b">
        <Image
          src={lostItem?.image || PlaceHolderImage.src}
          className="object-cover object-center"
          fill
          alt={lostItem?.lostItemName}
        />
      </div>
      <h3 className="text-lg font-semibold px-2 mb-3">
        {lostItem.lostItemName}
      </h3>
      <ul className="flex flex-col gap-1 px-2 text-gray-600 text-sm list-inside list-disc">
        <li className="list-item">
          <span className="font-semibold">Location:</span> {lostItem.location}
        </li>
        <li className="list-item">
          <span className="font-semibold">Lost Date:</span>{" "}
          {new Date(
            lostItem.lostDate || lostItem.createdAt
          ).toLocaleDateString()}
        </li>

        <li className="list-item">
          <span className="font-semibold">Contact:</span>{" "}
          {lostItem.contactNo || lostItem.user.userProfile.contactNo}
        </li>
      </ul>
      <div className="text-center w-full left-0 px-2 absolute bottom-2 flex gap-3">
        <Link href={`/lost-item/${lostItem.id}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
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
