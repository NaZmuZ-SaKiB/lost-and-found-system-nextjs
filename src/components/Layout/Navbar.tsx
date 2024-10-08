import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo-small.webp";
import { Button } from "../ui/button";
import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import ProfileMenu from "./ProfileMenu";

const Navbar = async () => {
  const user = await isUserLoggedIn();

  return (
    <header className="border-b fixed top-0 bg-white bg-opacity-90 backdrop-blur-lg z-10 w-full py-2 px-3">
      <div className="container flex gap-3 justify-between items-center">
        <Link href="/" className="size-[30px] sm:size-[50px] relative">
          <Image src={Logo.src} fill alt="logo" />
        </Link>

        <div className="text-slate-600 space-x-4 hidden md:block">
          <Link
            className="hover:text-pink-600 border-b-2 border-transparent hover:border-pink-600"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-pink-600 border-b-2 border-transparent hover:border-pink-600"
            href="/#about-us"
          >
            About Us
          </Link>
          <Link
            className="hover:text-pink-600 border-b-2 border-transparent hover:border-pink-600"
            href="/recent-posts"
          >
            Recent Posts
          </Link>
          {user?.id && (
            <>
              <Link
                className="hover:text-pink-600 border-b-2 border-transparent hover:border-pink-600"
                href={`/${user.role.toLowerCase()}/profile`}
              >
                My Profile
              </Link>
            </>
          )}
        </div>

        <div className="space-x-3">
          {user?.id ? (
            <ProfileMenu />
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-pink-600 text-pink-600 hover:bg-pink-50 hover:text-pink-700"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
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

export default Navbar;
