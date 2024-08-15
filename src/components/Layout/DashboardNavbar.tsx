import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo-small-white.png";
import DashboardMobileSidebar from "./DashboardMobileSidebar";
import ProfileMenu from "./DashboardProfileMenu";

const DashboardNavbar = ({ role }: { role: "ADMIN" | "USER" }) => {
  return (
    <header className="fixed top-0 bg-slate-900 z-10 w-full py-2 px-3">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex items-center gap-3">
          <DashboardMobileSidebar role={role} />
          <Link href="/" className="size-[30px] relative">
            <Image src={Logo.src} fill alt="logo" />
          </Link>
          <h1 className="text-2xl font-semibold capitalize text-slate-200 max-sm:hidden">
            {role === "ADMIN" ? "Admin Panel" : "Dashboard"}
          </h1>
        </div>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default DashboardNavbar;
