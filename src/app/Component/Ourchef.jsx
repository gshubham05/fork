"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import dishImg from "/public/ourchef.png";

export default function ChefRecommend() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const section = document.getElementById("chef-recommend-section");

    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const sectionHeight = rect.height;
        const scrollProgress =
          (windowHeight - rect.top) / (windowHeight + sectionHeight);
        const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);
        const translateY = clampedProgress * 80;
        setOffset(translateY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="chef-recommend-section"
      className="bg-[#0D1413] text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      <div className="max-w-xl">
        <p className="tracking-widest text-sm mb-4">FRESH. FLAVORFUL. FAST.</p>
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          Chef’s Picks
        </h2>
        <p className="text-lg text-gray-300 mb-10">
          Dive into the best of Indian-Chinese fusion, fast food favorites, and
          mouthwatering vegetarian & chicken dishes. Cooked fresh in our
          kitchen and delivered hot to your doorstep — this is comfort food,
          redefined.
        </p>
      </div>

      <div className="relative w-full max-w-md mt-6 sm:mt-10 md:mt-20">
        <div
          className="relative z-10 transition-transform duration-500 ease-out will-change-transform"
          style={{ transform: `translateY(-${offset}px)` }}
        >
          <Image
            src={dishImg}
            alt="Chef’s Signature Dish"
            className="w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
