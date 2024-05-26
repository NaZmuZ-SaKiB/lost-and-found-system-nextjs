import ClaimCard from "@/components/Card/ClaimCard";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllClaims } from "@/lib/actions/claim.actions";
import { redirect } from "next/navigation";

const MyClaimsPage = async () => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  const claims = await getAllClaims({ userId: user.id, limit: 999 });
  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <h1 className="text-4xl max-md:text-center font-semibold">My Claims</h1>

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
