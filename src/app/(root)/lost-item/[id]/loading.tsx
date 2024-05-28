import InfoLoading from "@/components/Loaders/InfoLoading";

const loading = () => {
  return (
    <main className="py-10 flex px-2 flex-col gap-10">
      <div>
        <h1 className="text-4xl font-semibold text-center">Lost Item</h1>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
      </div>

      <InfoLoading />
    </main>
  );
};

export default loading;
