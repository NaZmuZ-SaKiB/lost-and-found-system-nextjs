import FoundItemForm from "@/components/Form/FoundItemForm";
import { getAllCategories } from "@/lib/actions/category.actions";

const ReportFoundItemPage = async () => {
  const categories = await getAllCategories();

  return (
    <section className="max-w-screen-sm mx-auto !py-20 max-sm:!py-10 px-2 sm:px-4">
      <div className="mb-5">
        <h1 className="text-4xl font-semibold text-center">
          Report Found Item
        </h1>
        <div className="w-[125px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-600" />
      </div>

      <FoundItemForm categories={categories} />
    </section>
  );
};

export default ReportFoundItemPage;
