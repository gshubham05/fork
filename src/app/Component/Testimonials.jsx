"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Neha Rawat",
      location: "Rajpur Road, Dehradun",
      comment:
        "Ordered Butter Paneer and Veg Momos — everything was fresh, flavorful, and packed with care. Perfect for a cozy dinner at home!",
    },
    {
      name: "Amit Negi",
      location: "Ballupur, Dehradun",
      comment:
        "Tried their Chicken Manchurian and Fried Rice combo from Swiggy — hot, spicy, and spot-on. One of the best cloud kitchens around!",
    },
    {
      name: "Priya Nautiyal",
      location: "Prem Nagar, Dehradun",
      comment:
        "Their food always hits the mark. Love the fusion of Indian and Chinese flavors — highly recommend the Veg Hakka Noodles!",
    },
    {
      name: "Rohit Bisht",
      location: "Patel Nagar, Dehradun",
      comment:
        "Finally, a cloud kitchen that understands seasoning! The Chicken 65 was bold and flavorful — definitely ordering again.",
    },
    {
      name: "Sneha Sharma",
      location: "Sahastradhara Road, Dehradun",
      comment:
        "Timely delivery, hygienic packaging, and delicious Veg Biryani. What else can you ask for from a cloud kitchen?",
    },
    {
      name: "Deepak Joshi",
      location: "Clement Town, Dehradun",
      comment:
        "Had their Chinese combo with Schezwan Noodles and Chilli Chicken. Super tasty, filling, and affordable. Big thumbs up!",
    },
  ];

  return (
    <section className="bg-[#0f1a1a] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          What Dehradun Says
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Testimonials</h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1a1f1f] rounded-xl p-6 shadow-md border border-[#c89453]/30 hover:border-[#c89453] transition m-10 h-[250px] flex flex-col justify-between">
              <p className="text-sm text-gray-300 italic mb-4 flex-grow">
                “{t.comment}”
              </p>
              <div>
                <h4 className="text-lg font-semibold text-[#d4a45a]">
                  — {t.name}
                </h4>
                <p className="text-sm text-gray-400">{t.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
