import { Button } from "@/components/ui/button";
import CardsLoadingRow from "./CardsLoadingRow";

const ItemsBoxLoading = ({ count = 4 }: { count?: number }) => {
  return (
    <section className="container !py-10 !px-8 max-sm:!p-5 max-sm:!px-2 border border-pink-500 rounded-3xl">
      <div className="w-32 h-10 rounded-3xl animate-pulse bg-gray-200 mx-auto"></div>

      <CardsLoadingRow count={count} />

      <div className="flex justify-center mt-10">
        <Button className="bg-gray-300 hover:bg-gray-300 w-24">View All</Button>
      </div>
    </section>
  );
};

export default ItemsBoxLoading;
