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
import DashboardLogoutButton from "../Shared/DashboardLogoutButton";

const ProfileMenu = async () => {
  const profile = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none no-focus">
        <div className="mx-auto relative size-[40px] rounded-full overflow-hidden">
          <Image
            src={profile?.image || PlaceHolderProfileImage.src}
            fill
            className="object-cover object-center rounded-full"
            alt="profile pic"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-slate-900 border-0 text-slate-50">
        <DropdownMenuItem className="cursor-pointer hover:!bg-slate-700 hover:!text-slate-50">
          <Link href={`/${profile.user.role.toLowerCase()}/profile`}>
            {profile?.name}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer hover:!bg-slate-700 hover:!text-slate-50">
          <DashboardLogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
