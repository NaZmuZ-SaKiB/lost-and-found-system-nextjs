import Link from "next/link";
import { Button } from "../ui/button";

type TProps = { claim: any; userId: string };

const ClaimCard = ({ claim, userId }: TProps) => {
  const isMyClaim = userId === claim?.userId;
  console.log(userId);
  console.log(claim?.userId);

  return (
    <div className="rounded-xl p-4 pb-16 border border-black bg-white relative basis-[300px]">
      <h3 className="text-xl font-semibold text-center mb-3">
        {claim.foundItem.foundItemName}
      </h3>
      <div className="flex flex-col gap-1">
        <p className="mb-3">{claim.foundItem.description}</p>
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {claim.foundItem.category.name}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {claim.foundItem.location}
        </p>
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(
            claim.foundItem.foundDate || claim.foundItem.createdAt
          ).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Found By:</span>{" "}
          {claim.foundItem.user.userProfile.name}
        </p>
        <p>
          <span className="font-semibold">Contact:</span>{" "}
          {claim.foundItem.contactNo ||
            claim.foundItem.user.userProfile.contactNo}
        </p>
      </div>
      <div className="text-center w-full left-0 px-2 absolute bottom-2 flex gap-3">
        <Link href={`/found-item/${claim.foundItem.id}`} className="flex-1">
          <Button
            variant="outline"
            className="w-full bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
            size="sm"
          >
            View
          </Button>
        </Link>
        {isMyClaim && (
          <Button variant="destructive" size="sm">
            Delete
          </Button>
        )}
      </div>
    </div>
  );
};

export default ClaimCard;
