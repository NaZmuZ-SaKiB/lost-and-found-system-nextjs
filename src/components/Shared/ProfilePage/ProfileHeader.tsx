import ProfileUpdateModal from "./ProfileUpdateModal";

type TProps = {
  name: string;
  email: string;
  age?: number;
  contactNo: string;
  bio?: string;
};

const ProfileHeader = ({ name, email, age, contactNo, bio }: TProps) => {
  return (
    <section className="container !py-10 !px-8 bg-gray-100 rounded-3xl">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-4xl font-semibold">My Profile</h1>
        <ProfileUpdateModal />
      </div>

      <div className="mt-10 flex max-sm:flex-col gap-4 items-center">
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Name</span>
          <br />
          <span className="font-semibold">{name}</span>
        </div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Email</span>
          <br />
          <span className="font-semibold">{email}</span>
        </div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">Age</span>
          <br />
          <span className="font-semibold">{age || "N/A"}</span>
        </div>
        <div className="felx-1 w-full text-lg bg-white px-4 py-2 rounded-lg">
          <span className="font-semibold text-sm text-pink-500">
            Contact No
          </span>
          <br />
          <span className="font-semibold">{contactNo}</span>
        </div>
      </div>
      <div className="w-full text-lg bg-white px-4 py-2 rounded-lg mt-4">
        <span className="font-semibold text-sm text-pink-500">Bio</span>
        <br />
        <span className="font-semibold">{bio || "N/A"}</span>
      </div>
    </section>
  );
};

export default ProfileHeader;
