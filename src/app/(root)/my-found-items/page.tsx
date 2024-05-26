import FoundItemCard from "@/components/Card/FoundItemCard";
import { Button } from "@/components/ui/button";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllFoundItems } from "@/lib/actions/foundItem.actions";
import Link from "next/link";
import { redirect } from "next/navigation";

const MyFoundItemsPage = async () => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  const foundItems = await getAllFoundItems({ userId: user.id, limit: 999 });

  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <div className="flex max-sm:flex-col items-center justify-between gap-5">
          <h1 className="text-4xl font-semibold">My Found Items</h1>
          <Link href="/report-found-item">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Report A Found Item
            </Button>
          </Link>
        </div>

        <div className="flex gap-5 mt-10 justify-center flex-wrap">
          {foundItems?.data?.map((foundItem: any) => (
            <FoundItemCard
              key={foundItem.id}
              userId={user.id}
              foundItem={foundItem}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyFoundItemsPage;
