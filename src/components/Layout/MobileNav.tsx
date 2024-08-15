import { isUserLoggedIn } from "@/lib/actions/auth.actions";
import Link from "next/link";

const MobileNav = async ({ items }: { items: any }) => {
  const user = await isUserLoggedIn();

  return (
    <section className="bottombar border-t">
      <div className="bottombar_container">
        {items.map((link: any) => {
          if (link.label === "Profile") {
            link.route = `/${user?.role?.toLowerCase()}/profile`;
          }
          return (
            <div key={link?.label}>
              <Link href={link?.route} className={`bottombar_link`}>
                <div className="text-[22px]">
                  <link.icon />
                </div>

                <p className="text-xs sm:text-sm">
                  {link?.label.split(/\s+/)[0]}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNav;
