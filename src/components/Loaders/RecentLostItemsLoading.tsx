import { Button } from "../ui/button";
import CardsLoadingRow from "./CardsLoadingRow";

const RecentLostItemsLoading = () => {
  return (
    <section className="bg-gray-50 py-20 px-2 sm:px-4">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">
          Recent Lost Reports
        </h2>
        <div className="w-[125px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

        <CardsLoadingRow />

        <div className="flex justify-center mt-10">
          <Button className="bg-pink-500 hover:bg-pink-600">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default RecentLostItemsLoading;
