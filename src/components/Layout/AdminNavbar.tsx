import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo-small-white.png";
import AdminMobileSidebar from "./AdminMobileSidebar";
import ProfileMenu from "./ProfileMenu";

const AdminNavbar = async () => {
  return (
    <header className="fixed top-0 bg-slate-900 z-10 w-full py-2 px-3">
      <div className="flex gap-3 justify-between items-center">
        <div className="flex items-center gap-3">
          <AdminMobileSidebar />
          <Link href="/" className="size-[30px] relative">
            <Image src={Logo.src} fill alt="logo" />
          </Link>
          <h1 className="text-2xl font-semibold capitalize text-slate-200">
            Admin Panel
          </h1>
        </div>
        <ProfileMenu />
      </div>
    </header>
  );
};

export default AdminNavbar;
