import Spinner from "@/components/Loaders/Spinner";

const loading = () => {
  return (
    <main className="flex justify-center min-h-[calc(100svh-90px)] items-center">
      <Spinner className="size-20 border-pink-500 !border-[5px]" />
    </main>
  );
};

export default loading;
