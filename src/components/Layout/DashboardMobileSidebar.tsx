"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AdminSidebarItems, UserSidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Line } from "react-icons/ri";

const AdminMobileSidebar = ({ role }: { role: "ADMIN" | "USER" }) => {
  const pathname = usePathname();

  const sidebarItems = role === "ADMIN" ? AdminSidebarItems : UserSidebarItems;

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <RiMenu3Line className="size-6 text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="w-[220px] bg-slate-900 border-0 p-0">
        <div className="flex justify-end">
          <SheetClose className="text-white p-2 right-0">
            <X className="size-6" />
          </SheetClose>
        </div>
        {sidebarItems.map((item) => (
          <Link
            key={item.route}
            href={item.route}
            className={cn("p-3 text-white flex hover:bg-slate-800", {
              "bg-pink-800 hover:bg-pink-800": pathname === item.route,
            })}
          >
            <SheetClose className="w-full flex items-center gap-3">
              <item.icon className="w-6 h-6" />
              <span className="font-medium text-sm">{item.label}</span>
            </SheetClose>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default AdminMobileSidebar;
