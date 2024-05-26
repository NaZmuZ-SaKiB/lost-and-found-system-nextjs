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

export const DashboardItems2 = [
  "userCount",
  "lostItemCount",
  "foundItemCount",
  "returnedItemCount",
  "claimCount",
];
export const DashboardItems = [
  {
    title: "Active Users",
    field: "userCount",
    className: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "Lost Items",
    field: "lostItemCount",
    className: "bg-red-500 hover:bg-red-600",
  },
  {
    title: "Found Items",
    field: "foundItemCount",
    className: "bg-purple-500 hover:bg-purple-600",
  },

  {
    title: "Total Claims",
    field: "claimCount",
    className: "bg-pink-500 hover:bg-pink-600",
  },
  {
    title: "Successful Reunions",
    field: "returnedItemCount",
    className: "bg-green-500 hover:bg-green-600 col-span-2",
  },
];

export const ClaimStatusEnum = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
};
