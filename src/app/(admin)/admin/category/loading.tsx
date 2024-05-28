import { Button } from "@/components/ui/button";

const loading = () => {
  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex max-sm:flex-col justify-between gap-4 items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">Manage Category</h1>

        <Button className="bg-gray-300 hover:bg-gray-300 w-28"></Button>
      </div>

      <div className="mt-5 container !py-10 !px-8 max-sm:!px-3 bg-gray-100 rounded-3xl flex flex-col xs:flex-row gap-3 flex-wrap justify-start items-center">
        {Array(10)
          .fill(0)
          ?.map((_, i) => (
            <div
              key={"category-loading-" + i}
              className="felx-1 max-xs:w-full h-10 animate-pulse w-40 bg-white px-8 py-3 rounded-lg"
            ></div>
          ))}
      </div>
    </main>
  );
};

export default loading;
