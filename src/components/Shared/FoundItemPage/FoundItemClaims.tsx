import ClaimCard from "@/components/Card/ClaimCard";

type TProps = {
  claims: any;
  userId: string;
};

const FoundItemClaims = ({ claims, userId }: TProps) => {
  return (
    <section className="container !py-10 !px-8 border border-pink-500 rounded-3xl">
      <h2 className="text-3xl font-semibold text-center">Claim Requests</h2>
      <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

      <div className="flex gap-5 mt-10 justify-center flex-wrap">
        {claims?.length ? (
          claims?.map((claim: any) => (
            <ClaimCard
              key={claim.id}
              isFoundItemPage={true}
              claim={claim}
              userId={userId}
            />
          ))
        ) : (
          <p>No Claim Requests</p>
        )}
      </div>
    </section>
  );
};

export default FoundItemClaims;
