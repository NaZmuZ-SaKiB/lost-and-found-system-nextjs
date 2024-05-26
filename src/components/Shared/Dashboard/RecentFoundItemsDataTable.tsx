import { getAllFoundItems } from "@/lib/actions/foundItem.actions";
import Link from "next/link";

const RecentFoundItemsDataTable = async () => {
  const foundItems = await getAllFoundItems({ limit: 10 });

  return (
    <div className="mt-5 border-2 border-blue-500 rounded-lg p-2 bg-blue-50">
      <h4 className="text-lg font-semibold text-center mb-3 text-blue-600">
        Recent Found Items
      </h4>

      <div className="text-sm p-2 font-semibold bg-blue-500 text-white rounded-md grid gap-3 grid-cols-5 mb-2">
        <span className="col-span-2">Item Name</span>
        <span className="text-center">Contact No</span>
        <span className="text-center">Location</span>
        <span className="text-right">Date</span>
      </div>

      {foundItems?.data?.length > 0 ? (
        foundItems?.data?.map((item: any) => (
          <div
            key={item.id}
            className="text-sm p-2 rounded-md bg-blue-100 mb-2 grid gap-3 grid-cols-5"
          >
            <span className="col-span-2 hover:underline">
              <Link href={`/found-item/${item.id}`}>{item.foundItemName}</Link>
            </span>

            <span className="text-center">
              {item.contactNo || item.user.userProfile.contactNo}
            </span>

            <span className="text-center">{item.location}</span>

            <span className="text-right">
              {new Date(item.foundDate || item.createdAt).toLocaleDateString()}
            </span>
          </div>
        ))
      ) : (
        <div className="text-center border-2 p-3 text-lg font-semibold text-blue-600 bg-blue-100 border-blue-500">
          No items
        </div>
      )}
    </div>
  );
};

export default RecentFoundItemsDataTable;
