import CategoryFilter from "@/components/Form/CategoryFilter";
import LimitFilter from "@/components/Form/LimitFilter";
import SearchBar from "@/components/Form/SearchBar";

type TProps = {
  search?: boolean;
  category?: boolean;
  limit?: boolean;
};

const Filters = ({ search = true, category = true, limit = true }: TProps) => {
  return (
    <>
      {search && (
        <div className="flex-1 basis-[250px]">
          <SearchBar />
        </div>
      )}

      {category && <CategoryFilter />}

      {limit && <LimitFilter />}
    </>
  );
};

export default Filters;
