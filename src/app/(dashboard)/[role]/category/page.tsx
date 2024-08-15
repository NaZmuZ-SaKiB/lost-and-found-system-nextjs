import { getAllCategories } from "@/lib/actions/category.actions";
import AddCategoryModal from "./components/AddCategoryModal";
import "@/styles/table.css";
import UpdateCategoryModal from "./components/UpdateCategoryModal";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";

const ManageCategoryPage = async () => {
  const user = await isUserLoggedIn();

  if (user?.role !== "ADMIN") {
    redirect("/user/dashboard");
  }

  const categories = await getAllCategories();

  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex max-sm:flex-col justify-between gap-4 items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">Manage Category</h1>

        <AddCategoryModal />
      </div>

      <div className="overflow-x-auto scrollbar-thin scrollbar-webkit mt-5 p-2 bg-white rounded-lg">
        <div className="min-w-[700px]">
          <table className="table-auto admin-table">
            <thead className="text-left">
              <tr>
                <th>Name</th>
                <th>Found Items</th>
                <th>Lost Items</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((item: any) => (
                <tr key={item?.id}>
                  <td>{item?.name}</td>
                  <td>{item?._count?.foundItem}</td>
                  <td>{item?._count?.lostItem}</td>
                  <td>
                    <div className="flex justify-end">
                      <UpdateCategoryModal id={item?.id} name={item?.name} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ManageCategoryPage;
