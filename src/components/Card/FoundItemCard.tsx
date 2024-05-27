import Link from "next/link";
import { Button } from "../ui/button";
import FoundItemCardDeleteButton from "../Shared/FoundItemCardDeleteButton";
import Image from "next/image";
import PlaceHolderImage from "@/assets/images/placeholder-image.jpg";

type TProps = {
  foundItem: any;
  userId?: string;
};

const FoundItemCard = ({ foundItem, userId }: TProps) => {
  const isMyItem = userId === foundItem?.user?.id;

  return (
    <div className="rounded-xl overflow-hidden pb-16 border border-black bg-white relative basis-[300px]">
      <div className="w-full h-[200px] relative mb-3 border-b">
        <Image
          src={foundItem?.image || PlaceHolderImage.src}
          className="object-cover object-center"
          fill
          alt={foundItem?.foundItemName}
        />
      </div>
      <h3 className="text-xl font-semibold px-2 mb-3">
        {foundItem.foundItemName}
      </h3>
      <div className="flex flex-col gap-1 px-2">
        <p>
          <span className="font-semibold">Location:</span> {foundItem.location}
        </p>
        <p>
          <span className="font-semibold">Found Date:</span>{" "}
          {new Date(
            foundItem.foundDate || foundItem.createdAt
          ).toLocaleDateString()}
        </p>

        <p>
          <span className="font-semibold">Contact:</span>{" "}
          {foundItem.contactNo || foundItem.user.userProfile.contactNo}
        </p>
      </div>
      <div className="text-center w-full left-0 px-2 absolute bottom-2 flex gap-3">
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
