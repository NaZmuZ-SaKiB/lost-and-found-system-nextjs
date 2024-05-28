import InfoLoading from "@/components/Loaders/InfoLoading";
import ItemsBoxLoading from "@/components/Loaders/ItemsBoxLoading";

const loading = () => {
  return (
    <main className="max-md:py-7 py-10 px-2 flex flex-col gap-10">
      <InfoLoading isProfile />
      <ItemsBoxLoading />
    </main>
  );
};

export default loading;
