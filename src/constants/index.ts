export * from "./teamMembers";
export * from "./testimonials";
export * from "./tags";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {
  AiFillAppstore,
  AiFillExclamationCircle,
  AiFillHome,
} from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { BsPostcardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";

export const FooterLinks = [
  { href: "/", label: "About Us" },
  { href: "/", label: "Terms of Use" },
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "FAQ" },
  { href: "/", label: "Community Guidelines" },
  { href: "/", label: "Support" },
];

export const FooterLinks2 = [
  { href: "/", label: "Home" },
  { href: "/recent-posts", label: "Recently Added" },
  { href: "/found-item", label: "Found Items" },
  { href: "/lost-item", label: "Lost Items" },
  { href: "/report-lost-item", label: "Report Lost Item" },
  { href: "/report-found-item", label: "Report Found Item" },
];

export const FooterSocialLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: FaFacebook,
    color: "!text-blue-500/80 hover:!text-blue-500",
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter",
    icon: FaTwitter,
    color: "!text-blue-400/80 hover:!text-blue-400",
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: FaInstagramSquare,
    color: "!text-pink-600/80 hover:!text-pink-600",
  },
  {
    href: "https://www.linkedin.com",
    label: "LinkedIn",
    icon: FaLinkedin,
    color: "!text-blue-600/80 hover:!text-blue-600",
  },
  {
    href: "https://www.youtube.com",
    label: "YouTube",
    icon: FaYoutube,
    color: "!text-red-500/80 hover:!text-red-500",
  },
];

export const FollowersCountList = [
  {
    label: "Facebook",
    icon: FaFacebook,
    count: 750,
    countAfterText: "K+",
    bgColor: "bg-blue-600",
    subText: "Likes",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    count: 470,
    countAfterText: "K+",
    bgColor: "bg-blue-500",
    subText: "Followers",
  },
  {
    label: "Instagram",
    icon: FaInstagramSquare,
    count: 600,
    countAfterText: "K+",
    bgColor: "bg-pink-700",
    subText: "Followers",
  },

  {
    label: "YouTube",
    icon: FaYoutube,
    count: 1.5,
    countAfterText: "M+",
    bgColor: "bg-red-500",
    subText: "Subscribers",
  },
];

export const DashboardItems2 = [
  "userCount",
  "lostItemCount",
  "foundItemCount",
  "returnedItemCount",
  "claimCount",
];

export const AdminDashboardItems = [
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

export const UserDashboardItems = [
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
    className: "bg-green-500 hover:bg-green-600 col-span-1 md:col-span-3",
  },
];

export const BottomBarItems = [
  {
    label: "Home",
    route: "/",
    icon: AiFillHome,
  },
  {
    label: "About Us",
    route: "/#about-us",
    icon: FaInfoCircle,
  },
  {
    label: "Recent Posts",
    route: "/recent-posts",
    icon: BsPostcardFill,
  },
  {
    label: "Profile",
    route: "/my-profile",
    icon: FaUser,
  },
];

export const AdminSidebarItems = [
  {
    label: "Dashboard",
    route: "/admin/dashboard",
    icon: AiFillAppstore,
  },
  {
    label: "Lost Items",
    route: "/admin/lost-items",
    icon: BsPostcardFill,
  },
  {
    label: "Found Items",
    route: "/admin/found-items",
    icon: BsPostcardFill,
  },
  {
    label: "Users",
    route: "/admin/manage-users",
    icon: FaUserGroup,
  },
  {
    label: "Categories",
    route: "/admin/category",
    icon: BiSolidCategory,
  },
  {
    label: "Back to Home",
    route: "/",
    icon: AiFillHome,
  },
];

export const UserSidebarItems = [
  {
    label: "Dashboard",
    route: "/user/dashboard",
    icon: AiFillAppstore,
  },
  {
    label: "My Lost Items",
    route: "/user/lost-items",
    icon: BsPostcardFill,
  },
  {
    label: "My Found Items",
    route: "/user/found-items",
    icon: BsPostcardFill,
  },
  {
    label: "Claims",
    route: "/user/my-claims",
    icon: AiFillExclamationCircle,
  },
  {
    label: "Back to Home",
    route: "/",
    icon: AiFillHome,
  },
];

export const ClaimStatusEnum = {
  APPROVED: "APPROVED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
};
