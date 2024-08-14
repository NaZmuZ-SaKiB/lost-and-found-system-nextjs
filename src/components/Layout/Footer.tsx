import Link from "next/link";
import { MdEmail } from "react-icons/md";

import { FooterLinks, FooterLinks2, FooterSocialLinks } from "@/constants";
import Logo from "@/assets/images/logo-small-white.png";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="pt-10 max-md:pb-20 bg-slate-900">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-10">
        <div className="flex flex-col items-center justify-center">
          <Image src={Logo.src} alt="logo" height={100} width={100} />

          <p className="text-slate-300 mt-5 text-center flex justify-center items-center gap-3">
            <MdEmail className="text-xl" />{" "}
            <span className="text-sm">lostandfoundsystem@gmail.com</span>
          </p>
        </div>
        <div className="flex flex-col max-sm:items-center mx-auto gap-3 text-slate-300">
          <h3 className="text-xl font-semibold">Info</h3>
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
        <div className="flex flex-col max-sm:items-center mx-auto gap-3 text-slate-300">
          <h3 className="text-xl font-semibold">Pages</h3>
          {FooterLinks2.map((link, index) => (
            <Link
              key={index + link.label}
              href={link.href}
              className="hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col max-sm:items-center mx-auto gap-3 text-slate-300">
          <h3 className="text-xl font-semibold">Contact</h3>
          <div className="space-y-1">
            <p className="text-sm">+91 9876543210</p>
            <p className="text-sm">+91 8764849383</p>
            <p className="text-sm">City, State, Country</p>
          </div>

          <h3 className="mt-2 text-xl font-semibold">Social</h3>
          <div className="flex gap-3 justify-center">
            {FooterSocialLinks.map((link, index) => (
              <Link
                key={index + link.label}
                href={link.href}
                className={`${link.color}`}
              >
                <span className={`text-2xl`}>
                  <link.icon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-slate-300 text-center mt-8 border-t border-slate-500 py-3">
        © 2024 Lost & Found System. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
