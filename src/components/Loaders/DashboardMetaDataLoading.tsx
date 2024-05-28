const DashboardMetaDataLoading = () => {
  return (
    <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <div
            className={`rounded-lg h-32 bg-gray-200 animate-pulse ${
              i === 4 ? "col-span-2" : ""
            }`}
            key={"dashobard card loading - " + i}
          ></div>
        ))}
    </div>
  );
};

export default DashboardMetaDataLoading;
