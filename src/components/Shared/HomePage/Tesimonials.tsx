import TestimonialCard from "@/components/Card/TestimonialCard";
import { testimonials } from "@/constants";

const Tesimonials = () => {
  return (
    <section className="container !py-20 !px-2 sm:!px4">
      <h2 className="text-4xl font-semibold text-center">Testimonials</h2>
      <h5 className="text-xl text-center font-light mt-1 text-pink-500">
        What people are saying about us
      </h5>
      <div className="w-[75px] h-[5px] mx-auto mt-4 rounded-3xl bg-pink-500" />

      <div className="flex flex-wrap gap-3 mt-10">
        {testimonials.map((item) => (
          <TestimonialCard testimony={item} key={item.name} />
        ))}
      </div>
    </section>
  );
};

export default Tesimonials;
