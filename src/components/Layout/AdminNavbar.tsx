import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoutButton from "../Shared/LogoutButton";
import Logo from "@/assets/images/logo-small-white.png";
import AdminMobileSidebar from "./AdminMobileSidebar";

const AdminNavbar = async () => {
  const user = await isUserLoggedIn();

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
      </div>
    </header>
  );
};

export default AdminNavbar;
