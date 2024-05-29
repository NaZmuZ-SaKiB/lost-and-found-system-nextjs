import Link from "next/link";
import { Button } from "../ui/button";
import FoundItemCardDeleteButton from "../Shared/FoundItemCardDeleteButton";
import Image from "next/image";
import PlaceHolderImage from "@/assets/images/placeholder-image.webp";

type TProps = {
  foundItem: any;
  userId?: string;
};

const FoundItemCard = ({ foundItem, userId }: TProps) => {
  const isMyItem = userId === foundItem?.user?.id;

  return (
    <div className="item_card">
      <div className="w-full h-[200px] relative mb-3 border-b">
        <Image
          src={foundItem?.image || PlaceHolderImage.src}
          className="object-cover object-center"
          fill
          alt={foundItem?.foundItemName}
        />
      </div>
      <h3 className="text-lg font-semibold px-2 mb-3">
        {foundItem.foundItemName}
      </h3>
      <ul className="flex flex-col gap-1 px-2 list-disc list-inside text-gray-600 text-sm">
        <li className="list-item">
          <span className="font-semibold">Location:</span> {foundItem.location}
        </li>
        <li className="list-item">
          <span className="font-semibold">Found Date:</span>{" "}
          {new Date(
            foundItem.foundDate || foundItem.createdAt
          ).toLocaleDateString()}
        </li>

        <li className="list-item">
          <span className="font-semibold">Contact:</span>{" "}
          {foundItem.contactNo || foundItem.user.userProfile.contactNo}
        </li>
      </ul>
      <div className="text-center w-full left-0 px-2 absolute bottom-3 flex gap-3">
        <Link href={`/found-item/${foundItem.id}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
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
