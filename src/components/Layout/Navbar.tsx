import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/images/logo-small.png";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="border-b py-3">
      <div className="container flex gap-3 justify-between items-center">
        <Link href="/">
          <Image src={Logo.src} height={50} width={50} alt="logo" />
        </Link>

        <div className="text-gray-600 space-x-4">
          <Link
            className="hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-pink-500 border-b-2 border-transparent hover:border-pink-500"
            href="/#about-us"
          >
            About Us
          </Link>
        </div>

        <div className="space-x-3">
          <Link href="/sign-in">
            <Button
              variant="outline"
              className="bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
            >
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-pink-500 hover:bg-pink-600">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;