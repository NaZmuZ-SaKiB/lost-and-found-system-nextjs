import ClaimCard from "@/components/Card/ClaimCard";
import { Button } from "@/components/ui/button";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllClaims } from "@/lib/actions/claim.actions";
import Link from "next/link";
import { redirect } from "next/navigation";

const MyClaimsPage = async () => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  const claims = await getAllClaims({ userId: user.id, limit: 999 });
  return (
    <main>
      <div className="container !py-20">
        <div className="flex justify-between gap-4">
          <h1 className="text-4xl font-semibold">My Claims</h1>
        </div>

        <div className="flex gap-5 mt-10 justify-center flex-wrap">
          {claims?.data?.map((claim: any) => (
            <ClaimCard key={claim.id} userId={user.id} claim={claim} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyClaimsPage;
