const FoundItemInfo = ({ foundItem }: { foundItem: any }) => {
  return (
    <section className="container !py-10 !px-8 bg-gray-100 rounded-3xl">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-3xl font-semibold">{foundItem.foundItemName}</h2>
        {foundItem.returned && (
          <span className="px-3 py-1 text-white bg-green-600 rounded-md">
            Returned
          </span>
        )}
      </div>

      <div className="mt-10 flex max-sm:flex-col gap-4 items-center">
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
      <div className="mt-4 flex max-sm:flex-col gap-4 items-center">
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Found By</span>
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
        <span className="font-semibold text-sm text-pink-500">Description</span>
        <br />
        <span className="text-base">{foundItem.description}</span>
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
