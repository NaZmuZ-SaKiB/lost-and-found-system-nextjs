import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { currentUser } from "@/lib/actions/auth.actions";
import PlaceHolderProfileImage from "@/assets/images/placeholder-profile.webp";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "../Shared/LogoutButton";

const ProfileMenu = async () => {
  const profile = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none no-focus flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-md font-semibold">
        {profile?.name?.split(" ")[0]}
        <div className="mx-auto relative size-[40px] rounded-full overflow-hidden">
          <Image
            src={profile?.image || PlaceHolderProfileImage.src}
            fill
            className="object-cover object-center rounded-full"
            alt="profile pic"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="cursor-pointer">
          <Link
            href={`/${profile.user.role.toLowerCase()}/dashboard`}
            className="w-full"
          >
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link
            href={`/${profile.user.role.toLowerCase()}/profile`}
            className="w-full"
          >
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link
            href={`/${profile.user.role.toLowerCase()}/profile/edit`}
            className="w-full"
          >
            Edit Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Link
            href={`/${profile.user.role.toLowerCase()}/change-password`}
            className="w-full"
          >
            Change Password
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
