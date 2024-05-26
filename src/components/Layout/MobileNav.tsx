import { BottomBarItems } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {BottomBarItems.map((link) => {
          return (
            <div key={link.label}>
              <Link href={link.route} className={`bottombar_link`}>
                <div className="text-[22px]">
                  <link.icon />
                </div>

                <p className="text-sm max-sm:hidden">
                  {link.label.split(/\s+/)[0]}
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
