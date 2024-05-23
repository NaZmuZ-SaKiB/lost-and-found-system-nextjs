import GirlLostItemImage from "@/assets/images/girl-lost-item.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      className={`min-h-svh container grid place-items-center`}
      //   style={{
      //     backgroundImage: `linear-gradient(rgba(0 0 0/0.3), rgba(0 0 0/0.4)), url("${GirlLostItemImage.src}")`,
      //   }}
    >
      <div className="">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="text-5xl font-semibold text-center uppercase leading-[3.8rem]">
            Connecting People with Their <br /> Possessions!
          </h1>
          {/* <h2 className="text-3xl text-center">
            Reclaim {"What's"} Yours, Return What You Found!
          </h2> */}

          <p className="text-xl text-center w-[60%]">
            Reuniting Lost Items with Their Owners. Report Found Items. Search
            and Claim What {"You've"} Lost.
          </p>
        </div>

        <div className="flex mt-8 gap-5 justify-center">
          <Button>Report A Lost Item</Button>
          <Button variant="outline" className="bg-transparent border-black">
            Report A Found Item
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
