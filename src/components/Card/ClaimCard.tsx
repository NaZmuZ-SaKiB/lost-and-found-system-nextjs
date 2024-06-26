import Link from "next/link";
import { Button } from "../ui/button";
import ClaimCardDeleteButton from "../Shared/ClaimCardDeleteButton";
import ClaimStatusChangeButton from "../Shared/ClaimStatusChangeButton";
import { ClaimStatusEnum } from "@/constants";

type TProps = { claim: any; userId?: string; isFoundItemPage?: boolean };

const ClaimCard = ({ claim, userId, isFoundItemPage }: TProps) => {
  const isMyClaim = userId === claim?.userId;

  return (
    <div className="item_card p-4">
      <h3 className="text-xl font-semibold text-center mb-3">
        {claim.foundItem.foundItemName}
      </h3>
      <ul className="flex flex-col gap-1 text-gray-600 text-sm list-inside list-disc">
        <p className="mb-3 text-black text-center">
          {claim.foundItem.description}
        </p>
        <li className="list-item">
          <span className="font-semibold">Status:</span> {claim.status}
        </li>

        <li className="list-item">
          <span className="font-semibold">Location:</span>{" "}
          {claim.foundItem.location}
        </li>
        <li className="list-item">
          <span className="font-semibold">Lost Date:</span>{" "}
          {new Date(claim.lostDate || claim.createdAt).toLocaleDateString()}
        </li>

        <li className="list-item">
          <span className="font-semibold">Claimed By:</span>{" "}
          {claim.user.userProfile.name}
        </li>
        <li className="list-item">
          <span className="font-semibold">Contact:</span>{" "}
          {claim.user.userProfile.contactNo}
        </li>
        <li className="mb-3 list-item">
          <span className="font-semibold">Proof:</span>{" "}
          {claim.distinguishingFeatures}
        </li>
      </ul>
      <div className="text-center w-full left-0 px-2 absolute bottom-3 flex gap-3">
        {!isFoundItemPage && (
          <Link href={`/found-item/${claim.foundItem.id}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
              size="sm"
            >
              View
            </Button>
          </Link>
        )}
        {isMyClaim && <ClaimCardDeleteButton claimId={claim.id} />}

        {isFoundItemPage && claim.status === ClaimStatusEnum.PENDING && (
          <>
            <ClaimStatusChangeButton claimId={claim.id} type="APPROVED" />
            <ClaimStatusChangeButton claimId={claim.id} type="REJECTED" />
          </>
        )}

        {claim.status !== ClaimStatusEnum.PENDING && (
          <Button
            size="sm"
            className="disabled:bg-gray-200 disabled:text-black w-full"
            disabled
          >
            {claim.status}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ClaimCard;
