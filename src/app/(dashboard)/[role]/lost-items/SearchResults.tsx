import CustomPagination from "@/components/Form/CustomPagination";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "@/styles/table.css";
import { getAllLostItems } from "@/lib/actions/lostItem.action";

type TProps = { role: "ADMIN" | "USER"; id: string; searchParams: any };

const SearchResults = async ({ searchParams, role, id }: TProps) => {
  const query: any = {};

  if (role === "USER") {
    query.userId = id;
  }

  const lostItemsData = await getAllLostItems({ ...searchParams, ...query });
  const lostItems = lostItemsData?.data;

  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-webkit bg-white p-2 rounded-lg">
      <div className="min-w-[700px]">
        <table className="table-auto admin-table">
          <thead className="text-left">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Lost Date</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {lostItems.length > 0 ? (
              lostItems.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.lostItemName}</td>

                  <td>{item.location}</td>

                  <td>
                    {new Date(
                      item.lostDate || item.createdAt
                    ).toLocaleDateString()}
                  </td>
                  <td>{item.contactNo || item.user.userProfile.contactNo}</td>
                  <td className="flex justify-end">
                    <Link href={`/lost-item/${item.id}`} target="_blank">
                      <Button>View</Button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="mt-5 text-center border-2 p-3 text-lg font-semibold">
                <td colSpan={4}>No Items</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <CustomPagination
        page={lostItemsData?.meta?.page}
        limit={lostItemsData?.meta?.limit}
        total={lostItemsData?.meta?.total}
      />
    </div>
  );
};

export default SearchResults;
