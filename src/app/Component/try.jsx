"use client";

import Image from "next/image";
import menu from "@/assets"; // import your array
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useLocation } from "react-router-dom";
// import { menu } from "../../../public/menu/assets";

export default function HeroMenu() {
  const p = useLocation()
  console.log(p)
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <Carousel className="w-full max-w-7xl">
        <CarouselContent>
        {menu.map((src, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/4 xl:basis-1/8"
            >
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
              src={src.src}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover rounded-xl"
            />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
