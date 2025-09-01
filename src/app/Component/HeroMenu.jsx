"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { menu } from "@/menu/assets";
import Image from "next/image";

export default function HeroMenu() {
  return (
<div className="w-full h-screen flex flex-col items-center justify-center bg-black relative">
<div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#d9a55d] mb-6">
          Our Menu 
        </h2>
        </div>
  <Carousel className="w-[408px] sm:w-full max-w-5xl">
    <CarouselContent>
      {menu.map((src, index) => (
        <CarouselItem key={index} className="basis-full">
          <div className="relative w-full  h-[35rem] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
          {console.log(src.src)}
            <Image
              src={src.src}
              alt={`Photo ${index + 1}`}
              fill
              className="sm:object-contain rounded-xl"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>

    {/* Navigation buttons */}
    <CarouselPrevious className="absolute left-2 sm:left-4 top-[3rem] -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 sm:p-3 hover:bg-black/70" />
    <CarouselNext className="absolute right-2 sm:right-4 top-[3rem] -translate-y-1/2 z-10 bg-black/50 text-white rounded-full p-2 sm:p-3 hover:bg-black/70" />
  </Carousel>
</div>

  
  );
}
