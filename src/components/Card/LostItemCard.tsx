import { Button } from "../ui/button";

const LostItemCard = () => {
  return (
    <div className="rounded-xl p-4 border border-black">
      <h3 className="text-xl font-semibold text-center mb-3">Lost Item</h3>
      <div className="flex flex-col gap-1">
        <p className="mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <p>
          <span className="font-semibold">Category:</span> Electronics
        </p>
        <p>
          <span className="font-semibold">Location:</span> Lahore, Pakistan
        </p>
        <p>
          <span className="font-semibold">Date:</span> 21/02/24
        </p>
        <p>
          <span className="font-semibold">Name:</span> Sakib
        </p>
        <p>
          <span className="font-semibold">Contact:</span> 02342344234
        </p>
      </div>
      <div className="text-center mt-5">
        <Button className="px-6" size="sm">
          View
        </Button>
      </div>
    </div>
  );
};

export default LostItemCard;
