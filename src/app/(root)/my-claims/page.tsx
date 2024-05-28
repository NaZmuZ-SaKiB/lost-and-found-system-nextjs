import LimitFilter from "@/components/Form/LimitFilter";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllClaims } from "@/lib/actions/claim.actions";
import { redirect } from "next/navigation";
import SearchResults from "@/components/Shared/SearchResults";
import { Suspense } from "react";
import SearchResultLoading from "@/components/Loaders/SearchResultLoading";

type TProps = {
  searchParams: any;
};

const MyClaimsPage = async ({ searchParams }: TProps) => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <h1 className="text-4xl max-md:text-center font-semibold">My Claims</h1>

        <div className="mt-5 flex max-md:justify-center justify-start">
          <LimitFilter />
        </div>

        <Suspense
          key={JSON.stringify(searchParams)}
          fallback={<SearchResultLoading />}
        >
          <SearchResults
            searchParams={searchParams}
            searchFunction={(params: any) =>
              getAllClaims({ userId: user.id, ...params })
            }
            type="claim"
          />
        </Suspense>
      </div>
    </main>
  );
};

export default MyClaimsPage;
