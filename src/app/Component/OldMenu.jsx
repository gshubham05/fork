"use client";
import { useState } from "react";
import OrderModal from "../Component/Order";

export default function MenuPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const sections = [
    {
      title: "Appetizers – Veg",
      description:
        "Crispy, spicy, and fusion veg starters to kick off your meal.",
      image: "/TD-3792.jpg",
      items: [
        {
          name: "Crispy Chilli Potato",
          tags: "Saucy / Garlic / Fried",
          price: "₹169",
        },
        {
          name: "Honey Crispy Potato",
          tags: "Sweet & Spicy / Sesame",
          price: "₹169",
        },
        {
          name: "Classic Paneer Tikka",
          tags: "Tandoori / Spiced / Capsicum",
          price: "₹229",
        },
        { name: "Chilli Chaap Dry", tags: "Soya / Spicy Sauce", price: "₹229" },
        {
          name: "Classic Manchurian Dry",
          tags: "Fried Balls / Spicy Sauce",
          price: "₹199",
        },
      ],
    },
    {
      title: "Appetizers – Non-Veg",
      description:
        "Bold and flavorful non-veg starters with Indo-Chinese flair.",
      image: "/TD-3811.jpg",
      items: [
        {
          name: "Classic Chilli Chicken Dry",
          tags: "Tangy / Spicy / Bell Peppers",
          price: "₹229",
        },
        {
          name: "Chicken 65",
          tags: "Yogurt Marinated / Curry Leaves",
          price: "₹229",
        },
        { name: "Crispy Chicken Dry", tags: "Sweet / Spicy", price: "₹309" },
        {
          name: "Drums of Heaven",
          tags: "Soy / Schezwan / Herbs",
          price: "₹309",
        },
        { name: "Chicken Lollypop", tags: "Crunchy / Schezwan", price: "₹309" },
      ],
    },
    {
      title: "Noodles – Veg & Non-Veg",
      description:
        "Stir-fried noodles with spicy, garlicky sauces and fresh vegetables.",
      image: "/TD-3758.jpg",
      items: [
        {
          name: "Vegetables Hakka Noodles",
          tags: "Veg / Garlic / Scallions",
          price: "₹179",
        },
        {
          name: "Chilli Garlic Noodles",
          tags: "Spicy / Aromatic / Veg",
          price: "₹199",
        },
        {
          name: "Schezwan Noodles",
          tags: "Spicy / Veg / Saucy",
          price: "₹199",
        },
        {
          name: "Hakka Noodles (Non-Veg)",
          tags: "Chicken / Garlic / Soy",
          price: "₹209",
        },
        {
          name: "Schezwan Noodles (Non-Veg)",
          tags: "Chicken / Egg / Spicy",
          price: "₹229",
        },
      ],
    },
    {
      title: "Momos & Dimsums",
      description:
        "Steamed or fried dumplings with flavorful veg and chicken fillings.",
      image: "/TD-3771.jpg",
      items: [
        {
          name: "Classic Veg Momo (6 pcs)",
          tags: "Steamed / Cabbage / Soya",
          price: "₹119",
        },
        {
          name: "Peri Peri Momo (Veg)",
          tags: "Fried / Spicy / Sauce",
          price: "₹139",
        },
        { name: "Afghani Momo (Veg)", tags: "Smoky / Tandoori", price: "₹169" },
        {
          name: "Classic Non-Veg Momo",
          tags: "Minced Chicken / Steamed",
          price: "₹139",
        },
        {
          name: "Pan Fried Dimsums",
          tags: "Chicken / Crispy Base",
          price: "₹139",
        },
      ],
    },
    {
      title: "Fried Rice – Veg & Non-Veg",
      description:
        "Indo-Chinese style rice tossed with sauces, veggies, and meats.",
      image: "/TD-3807.jpg",
      items: [
        { name: "Classic Fried Rice", tags: "Veg / Mild Soy", price: "₹179" },
        {
          name: "Chilli Garlic Fried Rice",
          tags: "Spicy / Garlic / Spring Onion",
          price: "₹199",
        },
        {
          name: "Chicken Fried Rice",
          tags: "Chicken / Savory Soy",
          price: "₹199",
        },
        {
          name: "Chicken Garlic Fried Rice",
          tags: "Spicy / Chilli Garlic",
          price: "₹209",
        },
        {
          name: "Chicken Schezwan Fried Rice",
          tags: "Schezwan / Bold / Spicy",
          price: "₹209",
        },
      ],
    },
    {
      title: "Main Course (Gravy)",
      description:
        "Rich, creamy Indo-Chinese gravies perfect with rice or noodles.",
      image: "/TD-3829.jpg",
      items: [
        {
          name: "Chilli Paneer Gravy",
          tags: "Spicy / Bell Pepper",
          price: "₹229",
        },
        {
          name: "Veg Manchurian Gravy",
          tags: "Fried Balls / Tangy Sauce",
          price: "₹199",
        },
        { name: "Chilli Chicken Gravy", tags: "Spicy / Savory", price: "₹249" },
      ],
    },
    {
      title: "Beverages & Shakes",
      description: "Cool down with creamy shakes and chilled drinks.",
      image: "/TD-3802.jpg",
      items: [
        { name: "Oreo Shake", tags: "Creamy / Rich", price: "₹189" },
        { name: "Cold Coffee", tags: "Iced / Strong", price: "₹199" },
        { name: "Soft Drink", tags: "Coke / Sprite / Pepsi", price: "₹69" },
        { name: "Water Bottle", tags: "Packaged / 500ml", price: "₹29" },
      ],
    },
  ];

  const handleCheckboxChange = (item, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i.name !== item.name));
    }
  };

  const totalPrice = selectedItems.reduce((total, item) => {
    const priceNum = Number(item.price.replace(/[^\d]/g, ""));
    return total + priceNum;
  }, 0);

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

      <div className="bg-[#0a0f0f] text-white px-4 py-12 space-y-32 mb-24">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto"
          >
            <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={section.image}
                alt={`${section.title} Image`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-300 mb-8">{section.description}</p>
              <ul className="space-y-6">
                {section.items.map((item, idx) => {
                  const isChecked = selectedItems.some(
                    (i) => i.name === item.name
                  );
                  return (
                    <li
                      key={idx}
                      className="flex justify-between items-center border-b border-white/10 pb-2"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-[#d9a55d]">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-400">{item.tags}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[#d9a55d] font-medium">
                          {item.price}
                        </span>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) =>
                            handleCheckboxChange(item, e.target.checked)
                          }
                          className="w-5 h-5 cursor-pointer"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {selectedItems.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#121212] border-t border-gray-700 text-white p-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 z-50 px-6">
          <div className="flex flex-wrap gap-3 max-w-full overflow-x-auto">
            {selectedItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#d9a55d] text-black px-3 py-1 rounded-full whitespace-nowrap font-semibold"
                title={`${item.name} - ${item.price}`}
              >
                {item.name} - {item.price}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <p className="text-lg font-semibold">Total: ₹{totalPrice}</p>
            <button
              onClick={() => setShowModal(true)}
              className="px-6 py-2 rounded-md font-semibold bg-[#d9a55d] text-black hover:bg-[#c49e43]"
            >
              Place Order
            </button>
          </div>
        </div>
      )}

      <OrderModal
        show={showModal}
        onClose={() => setShowModal(false)}
        selectedItems={selectedItems}
      />
    </>
  );
}