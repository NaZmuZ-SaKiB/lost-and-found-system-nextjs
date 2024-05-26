import LostItemCard from "@/components/Card/LostItemCard";
import { Button } from "@/components/ui/button";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import { getAllLostItems } from "@/lib/actions/lostItem.action";
import Link from "next/link";
import { redirect } from "next/navigation";

const MyLostItemsPage = async () => {
  const user = await isUserLoggedIn();
  if (!user?.id) {
    redirect("/sign-in");
  }

  const lostItems = await getAllLostItems({ userId: user.id, limit: 999 });

  return (
    <main className="px-2 sm:px-4">
      <div className="container !py-10">
        <div className="flex max-sm:flex-col items-center justify-between gap-5">
          <h1 className="text-4xl font-semibold">My Lost Items</h1>
          <Link href="/report-lost-item">
            <Button className="bg-pink-500 hover:bg-pink-600">
              Report A Lost Item
            </Button>
          </Link>
        </div>

        <div className="flex gap-5 mt-10 justify-center flex-wrap">
          {lostItems?.data?.map((lostItem: any) => (
            <LostItemCard
              key={lostItem.id}
              userId={user.id}
              lostItem={lostItem}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyLostItemsPage;
