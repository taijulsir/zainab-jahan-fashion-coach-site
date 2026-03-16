"use client";

import Banner from "./(pages)/(home)/components/Banner/Banner";
import Podcast from "./(pages)/(home)/components/Podcast/Podcast";
import Service from "./(pages)/(home)/components/Service/Service";
import TestimonialSlider from "./(pages)/(home)/components/testimonials/Testimonials";
import About from "./(pages)/about/page";

const Page = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Podcast />
      <TestimonialSlider />
    </div>
  );
};

export default Page;
