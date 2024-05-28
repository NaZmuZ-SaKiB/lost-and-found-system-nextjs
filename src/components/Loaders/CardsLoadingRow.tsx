import CardLoading from "./CardLoading";

const CardsLoadingRow = ({ count = 4 }: { count?: number }) => {
  return (
    <div className="flex flex-wrap gap-5 mt-10 justify-center">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <CardLoading key={"cards row loading - " + i + Math.random()} />
        ))}
    </div>
  );
};

export default CardsLoadingRow;
