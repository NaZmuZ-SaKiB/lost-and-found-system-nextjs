import { Button } from "../ui/button";

const LostItemCard = ({ lostItem }: { lostItem: any }) => {
  return (
    <div className="rounded-xl p-4 pb-16 border border-black bg-white relative basis-[300px]">
      <h3 className="text-xl font-semibold text-center mb-3">
        {lostItem.lostItemName}
      </h3>
      <div className="flex flex-col gap-1">
        <p className="mb-3">{lostItem.description}</p>
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {lostItem.category.name}
        </p>
        <p>
          <span className="font-semibold">Location:</span> {lostItem.location}
        </p>
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(
            lostItem.lostDate || lostItem.createdAt
          ).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Owner Name:</span>{" "}
          {lostItem.user.userProfile.name}
        </p>
        <p>
          <span className="font-semibold">Contact:</span>{" "}
          {lostItem.contactNo || lostItem.user.userProfile.contactNo}
        </p>
      </div>
      <div className="text-center w-full left-0 px-2 absolute bottom-2">
        <Button
          variant="outline"
          className="w-full bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
          size="sm"
        >
          View
        </Button>
      </div>
    </div>
  );
};

export default LostItemCard;
