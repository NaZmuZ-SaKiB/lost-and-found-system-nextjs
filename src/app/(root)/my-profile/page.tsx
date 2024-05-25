import ProfileHeader from "@/components/Shared/ProfilePage/ProfileHeader";
import { currentUser } from "@/lib/actions/auth.actions";

const MyProfilePage = async () => {
  const user = await currentUser();

  return (
    <main className="py-10">
      <ProfileHeader
        name={user.name}
        email={user.user.email}
        age={user.age}
        contactNo={user.contactNo}
        bio={user.bio}
      />
    </main>
  );
};

export default MyProfilePage;
