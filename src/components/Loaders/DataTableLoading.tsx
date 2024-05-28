const DataTableLoading = () => {
  return (
    <div className="mt-5 border-2 border-gray-500 rounded-lg p-2 bg-gray-50">
      <div className="mb-3 mx-auto h-5 w-40 bg-gray-300 animate-pulse rounded-3xl"></div>

      <div className="overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="text-sm p-2 h-8 font-semibold bg-gray-500 text-white animate-pulse rounded-md grid gap-3 grid-cols-5 mb-2"></div>

          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                key={"item data table loading - " + i + Math.random()}
                className="rounded-md mb-2 w-full h-8 animate-pulse bg-gray-300"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DataTableLoading;
