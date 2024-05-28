import { getAllCategories } from "@/lib/actions/category.actions";
import AddCategoryModal from "./components/AddCategoryModal";

const ManageCategoryPage = async () => {
  const categories = await getAllCategories();

  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex max-sm:flex-col justify-between gap-4 items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">Manage Category</h1>

        <AddCategoryModal />
      </div>

      <div className="mt-5 container !py-10 !px-8 max-sm:!px-3 bg-gray-100 rounded-3xl flex flex-col xs:flex-row gap-3 flex-wrap justify-start items-center">
        {categories?.map((item: any) => (
          <div
            key={item?.id}
            className="felx-1 text-center max-xs:w-full text-lg bg-white px-8 py-3 rounded-lg"
          >
            {item?.name}
          </div>
        ))}
      </div>
    </main>
  );
};

export default ManageCategoryPage;
