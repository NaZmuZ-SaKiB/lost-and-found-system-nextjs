import ItemsBoxLoading from "@/components/Loaders/ItemsBoxLoading";
import MyClaims from "@/components/Shared/ProfilePage/MyClaims";
import MyFoundItems from "@/components/Shared/ProfilePage/MyFoundItems";
import MyLostItems from "@/components/Shared/ProfilePage/MyLostItems";
import ProfileHeader from "@/components/Shared/ProfilePage/ProfileHeader";
import { currentUser } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const MyProfilePage = async () => {
  const user = await currentUser();
  if (!user?.id) {
    redirect("/sign-in");
  }

  return (
    <main className="max-md:py-7 py-10 px-2 flex flex-col gap-10">
      <ProfileHeader
        name={user?.name}
        email={user?.user?.email}
        age={user?.age}
        contactNo={user?.contactNo}
        bio={user?.bio}
        image={user?.image}
      />

      <Suspense fallback={<ItemsBoxLoading />}>
        <MyClaims userId={user?.user?.id} />
      </Suspense>

      <Suspense fallback={<ItemsBoxLoading />}>
        <MyLostItems userId={user?.user?.id} />
      </Suspense>

      <Suspense fallback={<ItemsBoxLoading />}>
        <MyFoundItems userId={user?.user?.id} />
      </Suspense>
    </main>
  );
};

export default MyProfilePage;
