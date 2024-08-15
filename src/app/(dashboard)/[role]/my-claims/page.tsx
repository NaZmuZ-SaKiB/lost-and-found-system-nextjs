import LimitFilter from "@/components/Form/LimitFilter";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllClaims } from "@/lib/actions/claim.actions";
import { redirect } from "next/navigation";

import { Suspense } from "react";
import UsersDataLoading from "@/components/Loaders/UsersDataLoading";
import SearchResults from "./SearchResults";

type TProps = {
  searchParams: any;
};

const MyClaimsPage = async ({ searchParams }: TProps) => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <h1 className="text-4xl text-slate-900 font-semibold">My Claims</h1>

      <div className="mt-5 mb-3 w-full flex justify-center">
        <LimitFilter />
      </div>

      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<UsersDataLoading />}
      >
        <SearchResults searchParams={searchParams} id={user.id} />
      </Suspense>
    </main>
  );
};

export default MyClaimsPage;
