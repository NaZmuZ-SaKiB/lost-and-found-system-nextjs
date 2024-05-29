import LostItemForm from "@/components/Form/LostItemForm";
import { getAllCategories } from "@/lib/actions/category.actions";

const ReportLostItemPage = async () => {
  const categories = await getAllCategories();

  return (
    <section className="max-w-screen-sm mx-auto !py-20 max-sm:!py-10 px-2 sm:px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-center">Report Lost Item</h1>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
      </div>

      <LostItemForm categories={categories} />
    </section>
  );
};

export default ReportLostItemPage;
