import Link from "next/link";
import ProfileUpdateModal from "./ProfileUpdateModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import PlaceHolderProfileImage from "@/assets/images/placeholder-profile.webp";

type TProps = {
  name: string;
  email: string;
  age?: number;
  contactNo: string;
  bio?: string;
  image?: string;
};

const ProfileHeader = ({ name, email, age, contactNo, bio, image }: TProps) => {
  return (
    <section className="container !py-10 !px-8 max-sm:!px-3 bg-gray-100 rounded-3xl">
      <div className="flex max-xs:flex-col justify-between items-center gap-4">
        <h1 className="text-4xl font-semibold">My Profile</h1>
        <ProfileUpdateModal
          name={name}
          email={email}
          age={age}
          contactNo={contactNo}
          bio={bio}
          image={image}
        />
      </div>

      <div className="flex flex-col items-center md:flex-row mt-10 gap-3">
        <div className="mx-auto relative size-[150px] border border-pink-500 rounded-full overflow-hidden">
          <Image
            src={image || PlaceHolderProfileImage.src}
            fill
            className="object-cover object-center p-1 rounded-full"
            alt="lost item"
          />
        </div>

        <div className="flex-1">
          <div className="flex max-sm:flex-col gap-4 items-center">
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
          </div>
          <div className="w-full text-lg bg-white px-4 py-2 rounded-lg mt-4">
            <span className="font-semibold text-sm text-pink-500">Bio</span>
            <br />
            <span className="text-base">{bio || "N/A"}</span>
          </div>
        </div>
      </div>
      <div className="flex mt-4 max-sm:flex-col gap-4 items-center">
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

      <div className="mt-5">
        <Link href="/change-password">
          <Button
            variant="outline"
            className="bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
          >
            Change Password
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProfileHeader;
