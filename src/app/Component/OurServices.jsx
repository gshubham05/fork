"use client";
import { FaMotorcycle, FaUtensils, FaFireAlt, FaBoxOpen } from "react-icons/fa";
import { SiSwiggy, SiZomato } from "react-icons/si";

export default function OurServices() {
  const services = [
    {
      icon: <FaUtensils className="text-4xl text-[#d4a45a]" />,
      title: "Freshly Cooked Meals",
      description:
        "We prepare every order fresh with rich Indian spices and high-quality ingredients.",
    },
    {
      icon: <FaMotorcycle className="text-4xl text-[#d4a45a]" />,
      title: "Fast Home Delivery",
      description:
        "Enjoy lightning-fast delivery across the city — hot, fresh, and on time.",
    },
    {
      icon: <FaFireAlt className="text-4xl text-[#d4a45a]" />,
      title: "Indian-Chinese Fusion",
      description:
        "From Butter Chicken to Schezwan Fried Rice, our menu blends bold flavors for every craving.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-[#d4a45a]" />,
      title: "Eco-Friendly Packaging",
      description:
        "Every dish is packed in sustainable, spill-proof packaging — great for you and the planet.",
    },
  ];

  return (
    <section className="bg-[#0D1413] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          What We Offer
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Services</h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1a1f1f] p-6 rounded-xl text-center shadow-lg hover:shadow-[#d4a45a]/30 transition duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Delivery Platform Promotion */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-300 mb-4">
          Also available on your favorite food delivery apps
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.swiggy.com/menu/1093013?source=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#f58634] hover:underline"
          >
            <SiSwiggy className="text-3xl" />
            <span className="text-lg">Swiggy</span>
          </a>
          <a
            href="https://zomato.onelink.me/xqzv/z3ww6vwb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#e23744] hover:underline"
          >
            <SiZomato className="text-3xl" />
            <span className="text-lg">Zomato</span>
          </a>
        </div>
      </div>
    </section>
  );
}
