import CategoryFilter from "@/components/Form/CategoryFilter";
import LimitFilter from "@/components/Form/LimitFilter";
import SearchBar from "@/components/Form/SearchBar";
import { getAllCategories } from "@/lib/actions/category.actions";

type TProps = {
  search?: boolean;
  category?: boolean;
  limit?: boolean;
};

const Filters = async ({
  search = true,
  category = true,
  limit = true,
}: TProps) => {
  const categories = category ? await getAllCategories() : [];

  return (
    <>
      {search && (
        <div className="flex-1 basis-[250px]">
          <SearchBar />
        </div>
      )}

      {category && <CategoryFilter categories={categories} />}

      {limit && <LimitFilter />}
    </>
  );
};

export default Filters;
