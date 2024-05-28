import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import GridImage from "@/assets/images/grid.png";
import SearchingImage1 from "@/assets/images/searching-image-1.png";

const HeroSection = () => {
  return (
    <section
      className={`min-h-svh md:-mt-20 bg-cover bg-center grid place-items-center p-5`}
      style={{
        backgroundImage: `linear-gradient(rgba(255 255 255/0), rgba(255 255 255/0)), url("${GridImage.src}")`,
      }}
    >
      <div className="container flex flex-col-reverse md:flex-row items-center gap-5">
        <div className="flex flex-col gap-5 max-md:items-center items-start max-w-[60%]">
          <h1 className="text-4xl sm:text-5xl max-md:text-center lg:font-bold font-semibold uppercase lg:leading-[3.8rem]">
            <span className="text-pink-500">Connecting People</span> <br />
            with Their Possessions!
          </h1>

          <p className="text-lg sm:text-xl max-md:text-center lg:w-[70%]">
            Reuniting Lost Items with Their Owners. Report Found Items. Search
            and Claim What {"You've"} Lost.
          </p>

          <div className="flex max-md:flex-col mt-3 md:mt-8 gap-2 md:gap-5 justify-center">
            <Link href="/report-lost-item">
              <Button className="bg-pink-500 w-full hover:bg-pink-600">
                Report A Lost Item
              </Button>
            </Link>
            <Link href="/report-found-item">
              <Button
                variant="outline"
                className="bg-transparent border-pink-500 bg-pink-50 text-pink-500 hover:bg-pink-100 hover:text-pink-600"
              >
                Report A Found Item
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative max-sm:size-[70vw] sm:size-[50vw] lg:size-[40vw]">
          <Image
            fill
            src={SearchingImage1.src}
            className="object-contain"
            alt="Searching item"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
