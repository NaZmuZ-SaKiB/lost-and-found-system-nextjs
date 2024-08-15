"use client";

import { AdminSidebarItems, UserSidebarItems } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSidebar = ({ role }: { role: "ADMIN" | "USER" }) => {
  const pathname = usePathname();

  const sidebarItems = role === "ADMIN" ? AdminSidebarItems : UserSidebarItems;

  return (
    <div className="hidden lg:flex flex-col w-[220px] h-svh pt-16 bg-slate-900 border-r border-slate-300">
      {sidebarItems.map((item) => (
        <Link
          href={item.route}
          key={item.route}
          className={cn(
            "p-3 flex items-center gap-3 text-white hover:bg-slate-800",
            {
              "bg-pink-800 hover:bg-pink-800": pathname === item.route,
            }
          )}
        >
          <item.icon className="w-6 h-6" />
          <span className="font-medium text-sm">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default DashboardSidebar;
