import CustomPagination from "@/components/Form/CustomPagination";
import { Button } from "@/components/ui/button";
import { getAllClaims } from "@/lib/actions/claim.actions";
import { cn } from "@/lib/utils";
import Link from "next/link";
import "@/styles/table.css";

type TProps = { id: string; searchParams: any };

const SearchResults = async ({ searchParams, id }: TProps) => {
  const claimsData = await getAllClaims({ ...searchParams, userId: id });
  const claims = claimsData?.data;

  return (
    <div className="overflow-x-auto scrollbar-thin scrollbar-webkit bg-white p-2 rounded-lg">
      <div className="min-w-[700px]">
        <table className="table-auto admin-table">
          <thead className="text-left">
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {claims.length > 0 ? (
              claims.map((item: any) => (
                <tr key={item.id}>
                  <td>{item?.foundItem?.foundItemName}</td>

                  <td>{item?.foundItem?.location}</td>

                  <td>{item?.foundItem?.contactNo || "N/A"}</td>
                  <td>
                    <span
                      className={cn(
                        "text-sm px-3 py-1.5 rounded-full capitalize",
                        {
                          "bg-green-600 text-white": item.status === "APPROVED",
                          "bg-yellow-600 text-white": item.status === "PENDING",
                          "bg-red-600 text-white": item.status === "REJECTED",
                        }
                      )}
                    >
                      {item.status.toLowerCase()}
                    </span>
                  </td>
                  <td className="flex justify-end">
                    <Link href={`/lost-item/${item.id}`} target="_blank">
                      <Button size="sm">View</Button>
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
        page={claimsData?.meta?.page}
        limit={claimsData?.meta?.limit}
        total={claimsData?.meta?.total}
      />
    </div>
  );
};

export default SearchResults;
