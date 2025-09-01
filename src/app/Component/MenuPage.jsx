"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { menu } from "../../../public/menu/assets";
import Image from "next/image";

const categories = [
  { id: "soups", name: "Soups", img: menu.soup.src },
  { id: "beverages", name: "Beverages & Desserts", img: menu.beverages.src },
  { id: "rice", name: "Rice & Breads", img: menu.rice.src },
  { id: "noodles", name: "Noodles & Pasta", img: menu.noodles.src },
  { id: "momos", name: "Momos", img: menu.momos.src },
  { id: "meals", name: "Thali & Meals", img: menu.thali.src },
  { id: "starters", name: "Starters", img: menu.starters.src },
  { id: "main", name: "Main Course", img: menu.maincourse.src },
];

export default function MenuPage() {
  const [active, setActive] = useState("soups");

  return (
    <div className="w-full mx-auto p-4 sm:p-6 bg-[#0a0f0f] text-white min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-[#040A26]">
        Our Menu
      </h1>

      <Tabs defaultValue="soups" value={active} onValueChange={setActive}>
        {/* ✅ Desktop / Laptop Tabs */}
        <div className="hidden sm:flex sm:justify-center sm:w-full">
          <TabsList className="flex bg-yellow-500 flex-wrap justify-center gap-2 mb-6 overflow-x-auto">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="px-3 sm:px-4 py-2 rounded-xl shadow-sm text-sm sm:text-base font-medium whitespace-nowrap data-[state=active]:bg-[#040A26] data-[state=active]:text-white"
              >
                {cat.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* ✅ Mobile Dropdown */}
        <div className="sm:hidden mb-6">
          <Select value={active} onValueChange={setActive}>
            <SelectTrigger className="w-full bg-black text-white rounded-xl shadow-sm">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id}>
            <motion.div
              className="w-full flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="rounded-2xl shadow-md overflow-hidden w-full max-w-4xl sm:max-w-5xl">
                <div className="relative w-full h-64 sm:h-96">
                {console.log(cat.img)}
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    className="object-contain"
                    fill
                    sizes="(max-width: 640px) 100vw, 800px"
                  />
                </div>
              </div>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
