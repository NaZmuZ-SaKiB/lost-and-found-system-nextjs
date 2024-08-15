import { currentUser } from "@/lib/actions/auth.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import PlaceHolderProfileImage from "@/assets/images/placeholder-profile.webp";

const MyProfilePage = async () => {
  const profile = await currentUser();
  if (!profile?.id) {
    redirect("/sign-in");
  }

  return (
    <main className="container !py-10 !px-2 sm:!px-4">
      <div className="flex flex-col items-center gap-5">
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
            {profile?.aboutMe || "No About Me"}
          </p>

          <h3 className="text-lg font-semibold text-slate-700 mt-2">
            Interests
          </h3>
          <p className="text-sm sm:text-base text-slate-700">
            {profile?.interests}
          </p>

          <h3 className="text-lg font-semibold text-slate-700 mt-2">Contact</h3>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-medium">Email:</span> {profile?.user?.email}
          </p>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-medium">Phone:</span> {profile?.contactNo}
          </p>
          <p className="text-sm sm:text-base text-slate-700">
            <span className="font-medium">Location:</span> {profile?.location}
          </p>
        </div>
      </div>

      {/* <Suspense fallback={<ItemsBoxLoading />}>
        <MyClaims userId={user?.user?.id} />
      </Suspense>

      <Suspense fallback={<ItemsBoxLoading />}>
        <MyLostItems userId={user?.user?.id} />
      </Suspense>

      <Suspense fallback={<ItemsBoxLoading />}>
        <MyFoundItems userId={user?.user?.id} />
      </Suspense> */}
    </main>
  );
};

export default MyProfilePage;
