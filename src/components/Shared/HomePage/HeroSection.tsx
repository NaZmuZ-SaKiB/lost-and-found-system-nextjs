import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import GridImage from "@/assets/images/grid.png";
import SearchingImage1 from "@/assets/images/searching-image-1.png";

const HeroSection = () => {
  return (
    <section
      className={`min-h-[calc(100svh-100px)] bg-cover grid place-items-center p-5`}
      style={{
        backgroundImage: `linear-gradient(rgba(255 255 255/0.8), rgba(255 255 255/0.8)), url("${GridImage.src}")`,
      }}
    >
      <div className="container flex max-md:flex-col-reverse items-center gap-5">
        <div className="flex flex-col gap-5 max-md:items-center items-start max-w-[60%]">
          <h1 className="text-4xl lg:text-5xl max-md:text-center lg:font-bold font-semibold uppercase lg:leading-[3.8rem]">
            <span className="text-pink-500">Connecting People</span> <br />
            with Their Possessions!
          </h1>

          <p className="text-xl max-md:text-center lg:w-[70%]">
            Reuniting Lost Items with Their Owners. Report Found Items. Search
            and Claim What {"You've"} Lost.
          </p>

          <div className="flex max-md:flex-col mt-3 md:mt-8 gap-5 justify-center">
            <Link href="/report-lost-item">
              <Button className="bg-pink-500 w-full hover:bg-pink-600">
                Report A Lost Item
              </Button>
            </Link>
            <Link href="/report-found-item">
              <Button
                variant="outline"
                className="bg-transparent border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
              >
                Report A Found Item
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative size-[40vw]">
          <Image
            fill
            src={SearchingImage1.src}
            className="object-cover"
            alt="Searching item"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
