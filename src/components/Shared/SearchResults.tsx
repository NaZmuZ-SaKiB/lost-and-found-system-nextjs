import FoundItemCard from "../Card/FoundItemCard";
import LostItemCard from "../Card/LostItemCard";
import ClaimCard from "../Card/ClaimCard";
import CustomPagination from "../Form/CustomPagination";

type TProps = {
  searchParams: any;
  searchFunction: Function;
  type: "found-item" | "lost-item" | "claim";
};

const SearchResults = async ({
  searchParams,
  searchFunction,
  type,
}: TProps) => {
  const items = await searchFunction(searchParams);

  return (
    <>
      <div className="custom-grid gap-5 mt-10">
        {items?.data?.map((item: any) => (
          <>
            {type === "found-item" && (
              <FoundItemCard key={item.id} foundItem={item} />
            )}

            {type === "lost-item" && (
              <LostItemCard key={item.id} lostItem={item} />
            )}

            {type === "claim" && <ClaimCard key={item.id} claim={item} />}
          </>
        ))}

        {!items?.data?.length && (
          <p className="text-pink-500 text-xl bg-pink-50 flex-1 text-center p-3">
            No Items
          </p>
        )}
      </div>
      <CustomPagination
        page={items?.meta?.page}
        limit={items?.meta?.limit}
        total={items?.meta?.total}
      />
    </>
  );
};

export default SearchResults;
