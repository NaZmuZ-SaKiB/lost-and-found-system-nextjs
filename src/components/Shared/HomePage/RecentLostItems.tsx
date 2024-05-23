import LostItemCard from "@/components/Card/LostItemCard";

const RecentLostItems = () => {
  return (
    <section className=" py-20">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center">
          Recent Lost Reports
        </h2>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-black" />

        <div className="flex gap-3 mt-10">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <LostItemCard key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default RecentLostItems;
