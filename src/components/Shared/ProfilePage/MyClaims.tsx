import ClaimCard from "@/components/Card/ClaimCard";
import { Button } from "@/components/ui/button";
import { getAllClaims } from "@/lib/actions/claim.actions";
import Link from "next/link";

type TProps = {
  userId: string;
};

const MyClaims = async ({ userId }: TProps) => {
  const claims = await getAllClaims({ userId });

  return (
    <section className="container !py-10 !px-8 max-sm:!p-5 max-sm:!px-2 border border-pink-500 rounded-3xl">
      <h2 className="text-3xl font-semibold text-center">My Claims</h2>
      <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

      <div className="flex gap-5 mt-10 justify-center flex-wrap">
        {claims?.data?.length ? (
          claims?.data?.map((claim: any) => (
            <ClaimCard key={claim.id} claim={claim} userId={userId} />
          ))
        ) : (
          <p>No Claim Requests</p>
        )}
      </div>

      {claims?.data?.length > 0 && (
        <div className="flex justify-center mt-10">
          <Link href={"/my-claims"}>
            <Button className="bg-pink-500 hover:bg-pink-600">View All</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyClaims;
