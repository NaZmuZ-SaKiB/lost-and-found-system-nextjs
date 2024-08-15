import { currentUser } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import EditProfileForm from "./EditProfileForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProfileEditPage = async () => {
  const profile = await currentUser();
  if (!profile?.id) {
    redirect("/sign-in");
  }

  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex justify-between items-center gap-3">
        <h1 className="text-4xl font-semibold">Edit Profile</h1>
        <Link href={`/${profile.user.role.toLowerCase()}/profile`}>
          <Button
            variant="outline"
            size="sm"
            className="border-pink-600 hover:bg-pink-600 text-pink-600 bg-transparent hover:text-white"
          >
            Profile
          </Button>
        </Link>
      </div>

      <div className="mx-auto bg-white rounded-e-lg p-5 mt-5">
        <EditProfileForm
          name={profile?.name}
          email={profile?.user?.email}
          age={profile?.age}
          contactNo={profile?.contactNo}
          bio={profile?.bio}
          jobTitle={profile?.jobTitle}
          location={profile?.location}
          interests={profile?.interests}
          aboutMe={profile?.aboutMe}
          image={profile?.image}
        />
      </div>
    </main>
  );
};

export default ProfileEditPage;
