import ItemsBoxLoading from "@/components/Loaders/ItemsBoxLoading";

const loading = () => {
  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <h1 className="text-4xl font-semibold mb-10">Recent Posts</h1>

        <ItemsBoxLoading count={6} />

        <ItemsBoxLoading count={6} />
      </div>
    </main>
  );
};

export default loading;
