import ClaimCard from "@/components/Card/ClaimCard";
import { getAllClaims } from "@/lib/actions/claim.actions";

type TProps = {
  userId: string;
};

const MyClaims = async ({ userId }: TProps) => {
  const claims = await getAllClaims({ userId });
  console.log("claims", claims);

  return (
    <section className="container !py-10 !px-8 border border-pink-500 rounded-3xl">
      <h2 className="text-3xl font-semibold text-center">My Claims</h2>
      <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

      <div className="flex gap-5 mt-10 justify-center">
        {claims?.data?.map((claim: any) => (
          <ClaimCard key={claim.id} claim={claim} userId={userId} />
        ))}
      </div>
    </section>
  );
};

export default MyClaims;
