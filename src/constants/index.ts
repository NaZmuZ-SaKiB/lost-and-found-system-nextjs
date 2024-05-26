import { configureStore } from "@reduxjs/toolkit";
export * from "./teamMembers";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const FooterLinks = [
  { href: "/", label: "About Us" },
  { href: "/", label: "Terms of Use" },
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "FAQ" },
  { href: "/", label: "Community Guidelines" },
  { href: "/", label: "Support" },
];

export const FooterSocialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: FaFacebook,
    color: "hover:text-blue-500",
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter",
    icon: FaTwitter,
    color: "hover:text-blue-400",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: FaInstagramSquare,
    color: "hover:text-pink-700",
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: FaLinkedin,
    color: "hover:text-blue-600",
  },
  {
    href: "https://www.youtube.com",
    label: "YouTube",
    icon: FaYoutube,
    color: "hover:text-red-500",
  },
];

export const ClaimStatusEnum = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
};
