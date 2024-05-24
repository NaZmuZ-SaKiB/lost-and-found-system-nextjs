import Link from "next/link";
import { MdEmail } from "react-icons/md";

import { FooterLinks, FooterSocialLinks } from "@/constants";
import Logo from "@/assets/images/logo-small-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section className=" pt-20 pb-10 bg-gray-900">
      <div className="container">
        <div className="flex justify-center">
          <Image src={Logo.src} alt="logo" height={100} width={100} />
        </div>
        <p className="text-gray-300 mt-5 text-center flex justify-center items-center gap-3">
          <MdEmail className="text-2xl" />{" "}
          <span>lostandfoundsystem@gmail.com</span>
        </p>
        <div className="mt-10 flex justify-center gap-3 text-gray-300">
          {FooterLinks.map((link, index) => (
            <Link
              key={index + link.label}
              href={link.href}
              className="hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-5">
          {FooterSocialLinks.map((link, index) => (
            <Link
              key={index + link.label}
              href={link.href}
              className={`text-white ${link.color}`}
            >
              <span className={`text-2xl`}>
                <link.icon />
              </span>
            </Link>
          ))}
        </div>

        <p className="text-gray-300 text-center mt-8">
          © 2024 Lost & Found System. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
