import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimony }: { testimony: any }) => {
  const emptyRating = 5 - testimony.rating;
  return (
    <div className="rounded-xl bg-gray-100 flex-1 p-4 overflow-hidden basis-[250px]">
      <div className="flex gap-3 items-center">
        <div className="relative size-[75px] rounded-full overflow-hidden">
          <Image
            className="object-cover object-center"
            src={testimony?.image}
            alt={testimony.name}
            fill
          />
        </div>
        <div className="flex-1">
          <div className="flex gap-1">
            {Array(testimony.rating)
              .fill(0)
              .map((_, i) => (
                <FaStar
                  className="text-pink-500"
                  key={i + testimony.name + "-rating"}
                />
              ))}
            {emptyRating !== 0 &&
              Array(emptyRating)
                .fill(0)
                .map((_, i) => (
                  <FaRegStar
                    className="text-pink-500"
                    key={i + testimony.name + "-rating empty"}
                  />
                ))}
          </div>
          <div className="text-lg font-semibold mt-1">{testimony?.name}</div>
        </div>
      </div>
      <div className="mt-3 text-gray-600">
        <p>
          <span className="font-semibold text-2xl">&quot;</span>
          {testimony?.testimonial}
          <span className="font-semibold text-2xl">&quot;</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
