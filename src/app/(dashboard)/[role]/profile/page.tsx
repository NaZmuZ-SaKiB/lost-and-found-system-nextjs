import { currentUser } from "@/lib/actions/auth.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import PlaceHolderProfileImage from "@/assets/images/placeholder-profile.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";

const MyProfilePage = async () => {
  const profile = await currentUser();
  if (!profile?.id) {
    redirect("/sign-in");
  }

  return (
    <main className="container !py-6 !px-2 sm:!px-4">
      <div className="flex flex-col items-center gap-5">
        <Link
          href={`/${profile.user.role.toLowerCase()}/profile/edit`}
          className="self-end"
        >
          <Button className="bg-pink-600 hover:bg-pink-700" size="sm">
            <FaEdit className="mr-2" /> Edit Profile
          </Button>
        </Link>
        <div className="mx-auto relative size-[250px] bg-white rounded-full overflow-hidden shadow-lg">
          <Image
            src={profile.image || PlaceHolderProfileImage.src}
            fill
            className="object-cover object-center p-1.5 rounded-full"
            alt="profile pic"
          />
        </div>

        <div>
          <h1 className="text-lg font-semibold text-slate-600 text-center">
            {profile.name}
          </h1>
          <h2 className="text-2xl font-bold text-slate-700 text-center">
            {profile?.jobTitle || "No Job Title"}
          </h2>
          <p className="text-center max-w-md text-sm text-gray-500 mt-2">
            {profile?.bio || "No Bio"}
          </p>
        </div>

        <div className="bg-white rounded-lg p-5 w-full">
          <h3 className="text-xl font-semibold text-slate-700">
            About {profile.name}
          </h3>
          <p className="whitespace-pre-wrap break-words mt-2 text-sm sm:text-base text-slate-700">
            {profile?.aboutMe || "N/A"}
          </p>
        </div>

        <div className="bg-white rounded-lg p-5 w-full">
          <h3 className="text-lg font-semibold text-slate-700">Interests</h3>
          <p className="text-sm sm:text-base text-slate-700">
            {profile?.interests || "N/A"}
          </p>

          <h3 className="text-lg font-semibold text-slate-700 mt-2">Contact</h3>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-medium">Email:</span> {profile?.user?.email}
          </p>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-medium">Phone:</span>{" "}
            {profile?.contactNo || "N/A"}
          </p>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-medium">Location:</span>{" "}
            {profile?.location || "N/A"}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MyProfilePage;
