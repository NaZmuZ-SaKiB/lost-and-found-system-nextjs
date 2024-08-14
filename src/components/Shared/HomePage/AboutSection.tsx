import Image from "next/image";

import AboutUsImage from "@/assets/images/man-returning-lost-item.webp";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="bg-slate-50/50 px-5 pt-10 pb-20" id="about-us">
      <div className="container">
        <div className="max-md:mb-5 max-md:text-center">
          <h2 className="text-4xl text-slate-700 font-semibold">About Us</h2>
          <h5 className="text-xl font-light mt-1 text-pink-600">
            Purpose and Mission
          </h5>
        </div>
        <div className="flex max-md:flex-col-reverse justify-between items-center gap-10">
          <div className="flex-1">
            <div className="text-lg text-slate-900 leading-8">
              <p className="mb-3">
                Our mission is to create a seamless connection between those who
                have lost items and those who have found them. We aim to foster
                a community-driven platform where people can easily report found
                items and search for lost belongings.
              </p>
              <p>
                By bridging the gap, we strive to ensure that lost items are
                reunited with their rightful owners quickly and efficiently,
                making the world a more connected place.
              </p>
            </div>
            <div className="mt-5">
              <Link href="/report-lost-item">
                <Button className="bg-pink-600 hover:bg-pink-700 w-auto">
                  Report A Lost Item
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-[40%]">
            <Image
              src={AboutUsImage}
              alt="man returning lost item"
              className="rounded-2xl size-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
