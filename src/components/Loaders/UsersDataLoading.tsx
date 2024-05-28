const UsersDataLoading = () => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            key={"user data loading - " + i}
            className="p-2 border rounded-md mb-1 w-full h-10 bg-gray-300 animate-pulse"
          ></div>
        ))}
    </>
  );
};

export default UsersDataLoading;
