import MyClaims from "@/components/Shared/ProfilePage/MyClaims";
import MyFoundItems from "@/components/Shared/ProfilePage/MyFoundItems";
import MyLostItems from "@/components/Shared/ProfilePage/MyLostItems";
import ProfileHeader from "@/components/Shared/ProfilePage/ProfileHeader";
import { currentUser } from "@/lib/actions/auth.actions";

const MyProfilePage = async () => {
  const user = await currentUser();

  return (
    <main className="py-10 flex flex-col gap-10">
      <ProfileHeader
        name={user.name}
        email={user.user.email}
        age={user.age}
        contactNo={user.contactNo}
        bio={user.bio}
      />
      <MyClaims userId={user.user.id} />
      <MyLostItems userId={user.user.id} />
      <MyFoundItems userId={user.user.id} />
    </main>
  );
};

export default MyProfilePage;
