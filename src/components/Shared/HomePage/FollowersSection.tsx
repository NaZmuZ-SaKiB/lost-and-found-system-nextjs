"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import NumberTicker from "@/components/magicui/number-ticker";
import { FollowersCountList } from "@/constants";

const FollowersSection = () => {
  return (
    <section className="py-10 px-2 sm:px-4">
      <div className="container">
        <h2 className="text-4xl text-slate-700 font-semibold text-center">
          Followers
        </h2>
        <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-600" />

        <div className="flex justify-center flex-wrap gap-3 items-center mt-10">
          {FollowersCountList.map((item) => (
            <div
              key={"follower" + item.label}
              className={`relative flex-1 rounded-xl text-white basis-[140px] flex flex-col items-center gap-5 p-5 ${item.bgColor} hover:bg-opacity-90 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}
            >
              <BorderBeam
                colorFrom="#fff"
                colorTo="#ffffffb3"
                borderWidth={2}
                size={100}
                duration={10}
              />
              <item.icon className="text-7xl max-md:text-5xl" />
              <span className="text-5xl max-md:text-4xl">
                <NumberTicker value={item.count} className="text-white" />
                {item.countAfterText}
              </span>
              <span className="text-xl max-md:text-lg">{item.subText}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowersSection;
