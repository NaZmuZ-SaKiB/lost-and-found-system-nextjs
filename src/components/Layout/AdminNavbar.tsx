import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import LogoutButton from "../Shared/LogoutButton";
import Logo from "@/assets/images/logo-small.png";

const AdminNavbar = async () => {
  const user = await isUserLoggedIn();

  return (
    <header className="border-b fixed top-0 bg-white bg-opacity-95 z-10 w-full py-3 px-3">
      <div className="container flex gap-3 justify-between items-center">
        <Link href="/" className="size-[30px] sm:size-[50px] relative">
          <Image src={Logo.src} fill alt="logo" />
        </Link>

        <div className="text-gray-600 space-x-4 hidden md:block">
          <Link
            className="hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500"
            href="/"
          >
            Home
          </Link>

          {user?.id && (
            <>
              <Link
                className="hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500"
                href="/my-profile"
              >
                My Profile
              </Link>
            </>
          )}

          <Link
            className="hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500"
            href="/admin/manage-users"
          >
            Manage Users
          </Link>

          <Link
            className="hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500"
            href="/admin/category"
          >
            Manage Category
          </Link>
        </div>

        <div className="space-x-3">
          {user?.id ? (
            <>
              <Link href="/admin/dashboard">
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                  Dashboard
                </Button>
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
