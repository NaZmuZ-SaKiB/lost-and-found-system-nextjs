import InfoLoading from "@/components/Loaders/InfoLoading";
import ItemsBoxLoading from "@/components/Loaders/ItemsBoxLoading";

const loading = () => {
  return (
    <main className="py-10 px-2 flex flex-col gap-10">
      <div>
        <h1 className="text-4xl font-semibold text-center">Found Item</h1>
        <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />
      </div>

      <InfoLoading />

      <ItemsBoxLoading />
    </main>
  );
};

export default loading;
