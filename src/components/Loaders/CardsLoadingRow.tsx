import CardLoading from "./CardLoading";

const CardsLoadingRow = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-10 justify-center">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <CardLoading key={"cards row loading - " + i + Math.random()} />
        ))}
    </div>
  );
};

export default CardsLoadingRow;
