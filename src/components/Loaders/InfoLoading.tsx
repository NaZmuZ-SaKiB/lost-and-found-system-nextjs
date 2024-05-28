import { Button } from "../ui/button";

const InfoLoading = ({ isProfile = false }: { isProfile?: boolean }) => {
  return (
    <section className="container !py-10 !px-8 max-sm:!px-3 bg-gray-100 rounded-3xl ">
      <div className="flex max-xs:flex-col justify-between items-center gap-4">
        <div className="w-40 h-10 bg-gray-200 rounded-3xl animate-pulse"></div>
        <Button className="bg-gray-300 hover:bg-gray-300 w-28"></Button>
      </div>

      <div className="flex flex-col items-center md:flex-row mt-10 gap-3">
        <div
          className={`mx-auto relative size-[150px] bg-gray-200 border animate-pulse ${
            isProfile ? "rounded-full" : "rounded-lg"
          } overflow-hidden`}
        ></div>

        <div className="flex-1">
          <div className="flex max-sm:flex-col gap-4 items-center">
            <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg h-16 animate-pulse"></div>
            <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg h-16 animate-pulse"></div>
          </div>
          <div className="w-full text-lg bg-white px-4 py-2 rounded-lg mt-4 h-16 animate-pulse"></div>
        </div>
      </div>
      <div className="flex mt-4 max-sm:flex-col gap-4 items-center">
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg h-16 animate-pulse"></div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg h-16 animate-pulse"></div>
      </div>
    </section>
  );
};

export default InfoLoading;
