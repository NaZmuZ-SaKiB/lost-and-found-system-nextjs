import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";

const RecentLostItemsDataTable = async () => {
  const lostItems = await getAllLostItems({ limit: 10 });

  return (
    <div className="mt-5 border-2 border-purple-500 rounded-lg p-2 bg-purple-50">
      <h4 className="text-lg font-semibold text-center mb-3 text-purple-600">
        Recent Lost Items
      </h4>

      <div className="overflow-x-auto scrollbar-thin scrollbar-webkit">
        <div className="min-w-[580px]">
          <div className="text-sm p-2 font-semibold bg-purple-500 text-white rounded-md grid gap-3 grid-cols-5 mb-2">
            <span className="col-span-2">Item Name</span>
            <span className="text-center">Contact No</span>
            <span className="text-center">Location</span>
            <span className="text-right">Date</span>
          </div>

          {lostItems?.data?.length > 0 ? (
            lostItems?.data?.map((item: any) => (
              <div
                key={item.id}
                className="text-sm p-2 rounded-md bg-purple-100 mb-2 grid gap-3 grid-cols-5"
              >
                <span className="col-span-2 hover:underline">
                  <Link href={`/lost-item/${item.id}`}>
                    {item.lostItemName}
                  </Link>
                </span>

                <span className="text-center">
                  {item.contactNo || item.user.userProfile.contactNo}
                </span>

                <span className="text-center">{item.location}</span>

                <span className="text-right">
                  {new Date(
                    item.lostDate || item.createdAt
                  ).toLocaleDateString()}
                </span>
              </div>
            ))
          ) : (
            <div className="text-center border-2 p-3 text-lg font-semibold text-blue-600 bg-blue-100 border-blue-500">
              No items
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentLostItemsDataTable;
