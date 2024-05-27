import Image from "next/image";

const LostItemInfo = ({ lostItem }: { lostItem: any }) => {
  return (
    <section className="container !py-10 !px-8 max-sm:!p-5 bg-gray-100 rounded-3xl">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-3xl font-semibold">{lostItem.lostItemName}</h2>
        {lostItem.found && (
          <span className="px-3 py-1 text-white bg-green-600 rounded-md">
            Found
          </span>
        )}
      </div>

      <div className="flex">
        {lostItem?.image && (
          <div className="relative">
            <Image
              src={lostItem?.image}
              fill
              className="object-cover object-center"
              alt="lost item"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="mt-10 flex max-sm:flex-col gap-4 items-center">
            <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
              <span className="font-semibold text-sm text-pink-500">
                Category
              </span>
              <br />
              <span className="font-semibold">{lostItem.category.name}</span>
            </div>
            <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
              <span className="font-semibold text-sm text-pink-500">
                Location
              </span>
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
          <div className="mt-4 flex max-sm:flex-col gap-4 items-center">
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
    </section>
  );
};

export default LostItemInfo;
