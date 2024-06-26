import Image from "next/image";

import AboutUsImage from "@/assets/images/man-returning-lost-item.webp";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 px-5 py-20" id="about-us">
      <div className="container">
        <div className="max-md:mb-5 max-md:text-center">
          <h2 className="text-4xl font-semibold">About Us</h2>
          <h5 className="text-xl font-light mt-1 text-pink-500">
            Purpose and Mission
          </h5>
        </div>
        <div className="flex max-md:flex-col-reverse justify-between items-center gap-10">
          <div className="flex-1">
            <div className="mt-5">
              <p className="text-lg leading-8">
                Our mission is to create a seamless connection between those who
                have lost items and those who have found them. We aim to foster
                a community-driven platform where people can easily report found
                items and search for lost belongings.
              </p>
              <br />
              <p className="text-lg leading-8">
                By bridging the gap, we strive to ensure that lost items are
                reunited with their rightful owners quickly and efficiently,
                making the world a more connected place.
              </p>
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
