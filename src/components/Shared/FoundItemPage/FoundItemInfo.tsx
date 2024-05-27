import Image from "next/image";

const FoundItemInfo = ({ foundItem }: { foundItem: any }) => {
  const statusColor = foundItem?.returned ? "bg-green-600" : "bg-red-600";

  return (
    <section className="container !py-10 !px-8 max-sm:!p-5 bg-gray-100 rounded-3xl">
      <div className="flex max-sm:flex-col justify-between items-center gap-4">
        <h2 className="text-3xl text-center font-semibold">
          {foundItem.foundItemName}
        </h2>

        <span className={`px-3 py-1 text-white ${statusColor} rounded-md`}>
          {foundItem.returned ? "Returned" : "Not Returned"}
        </span>
      </div>

      <div className="flex flex-col md:flex-row mt-10 gap-3">
        {foundItem?.image && (
          <div className="mx-auto relative w-[200px] max-md:h-[200px] rounded-lg overflow-hidden">
            <Image
              src={foundItem?.image}
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
                {foundItem.user.userProfile.name}
              </span>
            </div>

            <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
              <span className="font-semibold text-sm text-pink-500">
                Contact No
              </span>
              <br />
              <span className="font-semibold">
                {foundItem.contactNo || foundItem.user.userProfile.contactNo}
              </span>
            </div>
          </div>

          <div className="w-full text-lg bg-white px-4 py-2 rounded-lg mt-4">
            <span className="font-semibold text-sm text-pink-500">
              Description
            </span>
            <br />
            <span className="text-base">{foundItem.description}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex max-sm:flex-col gap-4 items-center">
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Category</span>
          <br />
          <span className="font-semibold">{foundItem.category.name}</span>
        </div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Location</span>
          <br />
          <span className="font-semibold">{foundItem.location}</span>
        </div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">
            Found Date
          </span>
          <br />
          <span className="font-semibold">
            {new Date(
              foundItem.foundDate || foundItem.createdAt
            ).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="w-full text-lg bg-white px-4 py-2 rounded-lg mt-4">
        <span className="font-semibold text-sm text-pink-500">
          Claim Process
        </span>
        <br />
        <span className="text-base">{foundItem.claimProcess}</span>
      </div>
    </section>
  );
};

export default FoundItemInfo;
