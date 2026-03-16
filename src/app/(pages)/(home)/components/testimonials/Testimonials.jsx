"use client";

import { useFetch } from "@/hooks";
import { Env } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function TestimonialSlider() {
  const { data } = useFetch("/testimonial");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === data?.data?.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? data?.data?.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [data?.data?.length]); // Rerun if data length changes

  if (!data || !data.data || data.data.length === 0) {
    return <div className="py-10 text-center">Loading testimonials...</div>;
  }

  const currentTestimonial = data.data[currentIndex];
  function formatDateToShortMonth(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#ECE3D8] via-[#F5EDE2] to-[#C0B3A1] px-4 pb-4 pt-16 lg:pb-20 lg:pt-28 extraLg:pt-32 2xl:pt-[10.5rem]">
      <div className="relative mx-auto w-[95%] max-w-[64rem] rounded-lg border-2 border-[#4b3e4883] lg:w-[70%]">
        {/* Quote mark */}
        <div className="absolute -left-4 top-0 -translate-y-1/2 font-serif text-[200px] leading-[1] text-neutral-700 lg:-left-6">
          <Image
            src="/quote.svg"
            alt="Quote Mark"
            width={200}
            height={200}
            className="size-9 object-cover lg:size-20"
          />
        </div>

        <div className="flex flex-col items-center">
          <div>
            {/* Profile image */}
            <div className="mx-auto w-fit -translate-y-9 lg:-translate-y-12">
              <div className="relative z-10 mb-2 h-[3.125rem] w-[3.125rem] overflow-hidden rounded-full border-2 border-neutral-200 lg:h-[6.25rem] lg:w-[6.25rem]">
                <Image
                  src={Env.spaces_url + currentTestimonial?.image || "/placeholder.svg"}
                  alt={currentTestimonial?.name || "User"}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Date */}
              <p className="text-center font-mada text-[10px] font-light text-[#4B3E48] md:text-xs lg:text-sm extraLg:text-base">
                {formatDateToShortMonth(currentTestimonial?.date)}
              </p>
            </div>

            {/* Main quote */}
            <div className="mx-auto -mt-8 mb-8 w-full space-y-3 px-4 text-center lg:mb-16 lg:w-[80%] lg:space-y-6 lg:px-0">
              <p className="font-mada text-xs font-medium text-[#4B3E48] md:text-sm lg:text-lg extraLg:text-xl 2xl:text-2xl">
                {currentTestimonial?.title}
              </p>

              <p className="font-mada text-xs font-light text-[#4B3E48] md:text-sm lg:text-lg extraLg:text-xl 2xl:text-2xl">
                {currentTestimonial?.message}
              </p>
            </div>
          </div>

          {/* Name and title */}
          <div className="absolute -bottom-2 left-0 right-0 mx-auto w-fit bg-[#d5ccbe] px-4 text-center font-bold lg:-bottom-4">
            <p className="font-serif text-[10px] tracking-wider text-[#4B3E48] md:text-xs lg:text-base extraLg:text-xl">
              {currentTestimonial?.designation}
              <span className="font-normal">,</span> {currentTestimonial?.campany}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="mb-4 mt-8 flex justify-center space-x-2">
        {data?.data?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-neutral-700" : "bg-neutral-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
