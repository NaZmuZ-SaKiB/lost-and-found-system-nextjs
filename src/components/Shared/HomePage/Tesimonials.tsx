import TestimonialCard from "@/components/Card/TestimonialCard";
import Marquee from "@/components/magicui/marquee";
import { testimonials } from "@/constants";

const Tesimonials = () => {
  return (
    <section className="container !py-20 !px-2 sm:!px4">
      <h2 className="text-4xl text-slate-700 font-semibold text-center">
        Testimonials
      </h2>
      <h5 className="text-xl text-center font-light mt-1 text-pink-600">
        What people are saying about us
      </h5>
      <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-600" />

      <div className="relative flex flex-wrap gap-3 mt-10">
        <Marquee pauseOnHover>
          {testimonials.slice(0, 3).map((item) => (
            <TestimonialCard testimony={item} key={item.name} />
          ))}
        </Marquee>
        <Marquee pauseOnHover reverse>
          {testimonials.slice(3, 6).map((item) => (
            <TestimonialCard testimony={item} key={item.name} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

export default Tesimonials;
