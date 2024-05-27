import Image from "next/image";

const LostItemInfo = ({ lostItem }: { lostItem: any }) => {
  const statusColor = lostItem.found ? "bg-green-600" : "bg-red-600";

  return (
    <section className="container !py-10 !px-8 max-sm:!p-5 bg-gray-100 rounded-3xl">
      <div className="flex max-sm:flex-col justify-between items-center gap-4">
        <h2 className="text-3xl text-center font-semibold">
          {lostItem.lostItemName}
        </h2>

        <span className={`px-3 py-1 text-white ${statusColor} rounded-md`}>
          {lostItem.found ? "Found" : "Not Found"}
        </span>
      </div>

      <div className="flex flex-col md:flex-row mt-10 gap-3">
        {lostItem?.image && (
          <div className="mx-auto relative w-[200px] max-md:h-[200px] rounded-lg overflow-hidden">
            <Image
              src={lostItem?.image}
              fill
              className="object-cover object-center"
              alt="lost item"
            />
          </div>
        )}

        <div className="flex-1">
          <div className="flex max-sm:flex-col gap-4 items-center">
            <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
              <span className="font-semibold text-sm text-pink-500">
                Found By
              </span>
              <br />
              <span className="font-semibold">
                {lostItem.user.userProfile.name}
              </span>
            </div>

            <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
              <span className="font-semibold text-sm text-pink-500">
                Contact No
              </span>
              <br />
              <span className="font-semibold">
                {lostItem.contactNo || lostItem.user.userProfile.contactNo}
              </span>
            </div>
          </div>

          <div className="w-full text-lg bg-white px-4 py-2 rounded-lg mt-4">
            <span className="font-semibold text-sm text-pink-500">
              Description
            </span>
            <br />
            <span className="text-base">{lostItem.description}</span>
          </div>
        </div>
      </div>
      <div className="flex mt-4 max-sm:flex-col gap-4 items-center">
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Category</span>
          <br />
          <span className="font-semibold">{lostItem.category.name}</span>
        </div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Location</span>
          <br />
          <span className="font-semibold">{lostItem.location}</span>
        </div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">
            Found Date
          </span>
          <br />
          <span className="font-semibold">
            {new Date(
              lostItem.foundDate || lostItem.createdAt
            ).toLocaleDateString()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default LostItemInfo;
