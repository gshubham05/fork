"use client";
import { useState } from "react";
import OrderModal from "../Component/Ordermodel";
import FloatingAssistantButton from "../Component/FloatingAssistantButton";

export default function MenuPage() {
  const [showModal, setShowModal] = useState(false);
  const sections = [
    {
      title: "Starters – Veg",
      description: "Crispy and spicy vegetarian delights to start your meal.",
      image: "/TD-3792.jpg",
      items: [
        {
          name: "Paneer Tikka",
          tags: "Grilled / Spicy / Cottage Cheese",
          price: "₹180",
        },
        {
          name: "Veg Spring Rolls",
          tags: "Crispy / Stuffed / Fried",
          price: "₹150",
        },
        {
          name: "Hara Bhara Kabab",
          tags: "Spinach / Peas / Shallow Fried",
          price: "₹160",
        },
        {
          name: "Stuffed Mushrooms",
          tags: "Cheesy / Baked / Garlicky",
          price: "₹170",
        },
        {
          name: "Corn Cheese Balls",
          tags: "Crispy / Cheesy / Golden",
          price: "₹160",
        },
        {
          name: "Tandoori Aloo",
          tags: "Potato / Smoky / Masala",
          price: "₹170",
        },
      ],
    },
    {
      title: "Starters – Non-Veg",
      description: "Delicious meaty appetizers for a bold beginning.",
      image: "/TD-3811.jpg",
      items: [
        {
          name: "Chicken Tikka",
          tags: "Grilled / Smoky / Spiced",
          price: "₹220",
        },
        {
          name: "Chicken 65",
          tags: "Crispy / Spicy / South Indian",
          price: "₹200",
        },
        {
          name: "Mutton Seekh Kebab",
          tags: "Minced / Grilled / Juicy",
          price: "₹260",
        },
        {
          name: "Tandoori Chicken",
          tags: "Charred / Full Leg / Tangy",
          price: "₹240",
        },
        {
          name: "Fish Fingers",
          tags: "Breaded / Crunchy / Dip",
          price: "₹230",
        },
        {
          name: "Chicken Popcorn",
          tags: "Bite Size / Crispy / Mild",
          price: "₹190",
        },
      ],
    },
    {
      title: "Chinese – Veg",
      description: "Classic Indo-Chinese flavors with vegetarian twists.",
      image: "/TD-3792.jpg",
      items: [
        {
          name: "Chilli Paneer",
          tags: "Paneer / Spicy / Saucy",
          price: "₹190",
        },
        {
          name: "Veg Manchurian",
          tags: "Fried / Tangy / Gravy",
          price: "₹180",
        },
        {
          name: "Honey Chilli Potatoes",
          tags: "Sweet / Crispy / Sesame",
          price: "₹170",
        },
        {
          name: "Crispy Veg",
          tags: "Batter-fried / Indo-Chinese / Dry",
          price: "₹160",
        },
        {
          name: "Paneer Schezwan",
          tags: "Spicy / Red Sauce / Garlic",
          price: "₹200",
        },
        {
          name: "Chinese Bhel",
          tags: "Crispy Noodles / Tangy / Street Style",
          price: "₹150",
        },
      ],
    },
    {
      title: "Chinese – Non-Veg",
      description: "Bold Chinese fusion with meaty mains.",
      image: "/cc.jpg",
      items: [
        {
          name: "Chicken Manchurian",
          tags: "Fried / Tangy / Chicken",
          price: "₹210",
        },
        {
          name: "Chilli Chicken",
          tags: "Dry / Spicy / Indo-Chinese",
          price: "₹220",
        },
        {
          name: "Garlic Chicken",
          tags: "Sautéed / Soy / Garlic Sauce",
          price: "₹210",
        },
        {
          name: "Schezwan Chicken",
          tags: "Hot / Bold / Red Sauce",
          price: "₹230",
        },
        {
          name: "Pepper Chicken",
          tags: "Spicy / Black Pepper / Dry",
          price: "₹220",
        },
        {
          name: "Dragon Chicken",
          tags: "Sweet / Chili / Crunchy",
          price: "₹240",
        },
      ],
    },
    {
      title: "Fried Rice & Noodles",
      description:
        "Comfort bowls of rice and noodles – wok-tossed to perfection.",
      image: "/TD-3758.jpg",
      items: [
        {
          name: "Veg Fried Rice",
          tags: "Rice / Mixed Veggies / Light Spices",
          price: "₹160",
        },
        {
          name: "Chicken Fried Rice",
          tags: "Chicken / Soy / Aromatic",
          price: "₹200",
        },
        {
          name: "Veg Hakka Noodles",
          tags: "Noodles / Capsicum / Soy",
          price: "₹180",
        },
        {
          name: "Schezwan Noodles",
          tags: "Spicy / Red Sauce / Tossed",
          price: "₹190",
        },
        {
          name: "Egg Fried Rice",
          tags: "Fluffy Rice / Egg / Scallions",
          price: "₹190",
        },
        {
          name: "Triple Schezwan",
          tags: "Rice & Noodles / Gravy / Mixed",
          price: "₹220",
        },
      ],
    },
    {
      title: "Rolls & Dimsums – Veg & Non-Veg",
      description: "Quick bites wrapped or steamed – full of flavor.",
      image: "/home.jpg",
      items: [
        {
          name: "Paneer Kathi Roll",
          tags: "Soft Roti / Spiced Paneer / Chutney",
          price: "₹180",
        },
        {
          name: "Chicken Kathi Roll",
          tags: "Roti / Chicken / Sauce",
          price: "₹200",
        },
        {
          name: "Veg Momos",
          tags: "Steamed / Juicy / Garlic Dip",
          price: "₹140",
        },
        {
          name: "Chicken Momos",
          tags: "Spicy / Steamed / Tangy Sauce",
          price: "₹150",
        },
        { name: "Fried Momos", tags: "Crispy / Paneer / Spicy", price: "₹160" },
        {
          name: "Tandoori Momos",
          tags: "Grilled / Smoky / Veg or Chicken",
          price: "₹170",
        },
      ],
    },
    {
      title: "Drinks",
      description: "Cool off with our shakes and refreshing beverages.",
      image: "/TD-3802.jpg",
      items: [
        {
          name: "Chocolate Shake",
          tags: "Rich / Creamy / Cold",
          price: "₹120",
        },
        {
          name: "Oreo Shake",
          tags: "Cookies / Chocolate / Milk",
          price: "₹130",
        },
        { name: "Cold Coffee", tags: "Coffee / Ice / Sweet", price: "₹110" },
        { name: "Mango Lassi", tags: "Sweet / Mango / Yogurt", price: "₹100" },
        {
          name: "Fresh Lime Soda",
          tags: "Refreshing / Lemon / Mint",
          price: "₹90",
        },
        {
          name: "Masala Cola",
          tags: "Tangy / Fizzy / Indian Twist",
          price: "₹90",
        },
      ],
    },
    {
      title: "Main Course – Veg",
      description: "Rich, hearty vegetarian mains to satisfy your hunger.",
      image: "/mv.jpg",
      items: [
        {
          name: "Paneer Butter Masala",
          tags: "Creamy / Spiced / Punjabi",
          price: "₹220",
        },
        {
          name: "Dal Makhani",
          tags: "Lentils / Butter / Slow-cooked",
          price: "₹180",
        },
        {
          name: "Kadai Paneer",
          tags: "Capsicum / Onion / Spicy",
          price: "₹210",
        },
        {
          name: "Palak Paneer",
          tags: "Spinach / Mild / Healthy",
          price: "₹200",
        },
        {
          name: "Veg Kofta Curry",
          tags: "Malai / Rich / Gravy",
          price: "₹210",
        },
        {
          name: "Aloo Gobi Masala",
          tags: "Cauliflower / Potato / Dry",
          price: "₹180",
        },
      ],
    },
    {
      title: "Main Course – Non-Veg",
      description: "Bold, traditional mains full of meaty goodness.",
      image: "/mnv.jpg",
      items: [
        {
          name: "Butter Chicken",
          tags: "Creamy / Chicken / Tomato",
          price: "₹250",
        },
        {
          name: "Chicken Curry",
          tags: "Masala / Indian Style / Spicy",
          price: "₹230",
        },
        {
          name: "Mutton Rogan Josh",
          tags: "Spicy / Kashmiri / Deep Flavour",
          price: "₹270",
        },
        {
          name: "Egg Curry",
          tags: "Boiled Egg / Masala / North Indian",
          price: "₹190",
        },
        {
          name: "Chicken Korma",
          tags: "Cashew / Creamy / Mild",
          price: "₹240",
        },
        {
          name: "Fish Curry",
          tags: "Tangy / Coastal / South Indian",
          price: "₹260",
        },
      ],
    },
  ];

  return (
    <>
      <section className="relative bg-[#0a0f0f] text-white py-24 overflow-hidden">
        <div className="text-center max-w-2xl mx-auto z-10 relative">
          <p className="uppercase tracking-widest text-sm text-gray-300 mb-2">
            Cloud Kitchen Specials
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Full Menu</h1>
          <p className="text-lg text-gray-400">
            From bold Indian mains to quick Chinese bites — everything is
            crafted fresh, just for you.
          </p>
        </div>
      </section>

      <div className="bg-[#0a0f0f] text-white px-4 py-12 space-y-32">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto"
          >
            {/* Image */}
            <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={section.image}
                alt={`${section.title} Image`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-300 mb-8">{section.description}</p>
              <ul className="space-y-6">
                {section.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-start border-b border-white/10 pb-2"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-[#d9a55d]">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400">{item.tags}</p>
                    </div>
                    <span className="text-[#d9a55d] font-medium">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <FloatingAssistantButton onClick={() => setShowModal(true)} />
      <OrderModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
