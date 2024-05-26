import FoundItemCard from "@/components/Card/FoundItemCard";
import LostItemCard from "@/components/Card/LostItemCard";
import { Button } from "@/components/ui/button";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllFoundItems } from "@/lib/actions/foundItem.actions";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";
import { redirect } from "next/navigation";

const RecentPostsPage = async () => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  const foundItems = await getAllFoundItems({ limit: 10 });
  const lostItems = await getAllLostItems({ limit: 10 });

  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <h1 className="text-4xl font-semibold mb-10">Recent Posts</h1>

        <section className="container !py-10 !px-8 border border-pink-500 rounded-3xl">
          <h2 className="text-3xl font-semibold text-center">Found Items</h2>
          <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

          <div className="flex gap-5 mt-10 justify-center flex-wrap">
            {foundItems?.data?.length ? (
              foundItems?.data?.map((foundItem: any) => (
                <FoundItemCard
                  key={foundItem.id}
                  userId={user.id}
                  foundItem={foundItem}
                />
              ))
            ) : (
              <p>No Found Items</p>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Link href={"/found-item"}>
              <Button className="bg-pink-500 hover:bg-pink-600">
                View All
              </Button>
            </Link>
          </div>
        </section>

        <section className="container !py-10 !px-8 border border-pink-500 rounded-3xl mt-10">
          <h2 className="text-3xl font-semibold text-center">Lost Items</h2>
          <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

          <div className="flex gap-5 mt-10 justify-center flex-wrap">
            {lostItems?.data?.length ? (
              lostItems?.data?.map((lostItem: any) => (
                <LostItemCard
                  key={lostItem.id}
                  userId={user.id}
                  lostItem={lostItem}
                />
              ))
            ) : (
              <p>No Lost Items</p>
            )}
          </div>

          <div className="flex justify-center mt-10">
            <Link href={"/lost-item"}>
              <Button className="bg-pink-500 hover:bg-pink-600">
                View All
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RecentPostsPage;
