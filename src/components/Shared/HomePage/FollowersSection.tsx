import { FollowersCountList } from "@/constants";

const FollowersSection = () => {
  return (
    <section className="py-10 bg-gray-500 px-2 sm:px-4">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center text-white">
          Followers
        </h2>
        <div className="w-[50px] h-[5px] mx-auto mt-4 rounded-3xl bg-white" />

        <div className="flex max-md:justify-center justify-between flex-wrap gap-10 items-center mt-10">
          {FollowersCountList.map((item) => (
            <div
              key={"follower" + item.label}
              className="text-white basis-[140px] flex flex-col items-center gap-5"
            >
              <item.icon className="text-7xl max-md:text-5xl" />
              <span className="text-5xl max-md:text-4xl">{item.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowersSection;
