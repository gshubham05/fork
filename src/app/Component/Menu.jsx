import Image from "next/image";
import Link from "next/link";

function MenuItemCard({ label, name, price, desc }) {
  return (
    <div className="bg-[#1a1f1f] rounded-lg overflow-hidden shadow-md">
      {label && (
        <div className="bg-[#c89453] px-4 py-1 text-sm font-bold uppercase text-white">
          {label}
        </div>
      )}
      <div className="px-4 py-3">
        <div className="flex justify-between text-lg font-semibold text-[#CA9C5E]">
          <span>{name}</span>
          <span>₹{price}</span>
        </div>
        <p className="text-sm text-gray-300">{desc}</p>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const starters = [
    {
      name: "Crispy Chilli Potato",
      price: 169,
      desc: "Fried / Saucy / Garlic & Capsicum",
      label: "Recommended",
    },
    {
      name: "Honey Crispy Potato",
      price: 169,
      desc: "Sweet & Spicy / Sesame",
    },
    {
      name: "Classic Paneer Tikka",
      price: 229,
      desc: "Tandoori / Spiced / Cottage Cheese",
      label: "New",
    },
    {
      name: "Crispy Corn Salt Pepper",
      price: 199,
      desc: "Golden Corn / Herbs / Spices",
    },
    {
      name: "Classic Chilli Paneer",
      price: 229,
      desc: "Paneer / Onion / Bell Peppers",
    },
    {
      name: "Chilli Chaap Dry",
      price: 229,
      desc: "Soya Chunks / Rich Chilli Sauce",
      label: "Recommended",
    },
  ];

  const mainCourse = [
    {
      name: "Schezwan Fried Rice",
      price: 199,
      desc: "Rice / Chili Garlic Sauce / Mixed Veg",
    },
    {
      name: "Hakka Noodles (Non-Veg)",
      price: 209,
      desc: "Chicken / Soy Sauce / Garlic",
    },
    {
      name: "Veg Manchurian Gravy",
      price: 199,
      desc: "Veg Balls / Tangy Soy Sauce",
      label: "New",
    },
    {
      name: "Chilli Chicken Gravy",
      price: 249,
      desc: "Chicken / Garlic / Bell Peppers",
    },
    {
      name: "Chicken Schezwan Fried Rice",
      price: 209,
      desc: "Chicken / Veggies / Schezwan Sauce",
      label: "Recommended",
    },
    {
      name: "Egg Fried Rice",
      price: 190,
      desc: "Egg / Rice / Spring Onion",
    },
  ];

  return (
    <section className="relative bg-[#0f1a1a] text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Decorative Top Left Image */}
      <div className="absolute top-0 left-[-176px] w-64 md:w-80 z-0">
        <Image
          src="/menu.png"
          alt="Decorative Dish"
          width={320}
          height={320}
          className="rounded-bl-full object-cover"
          priority
        />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Fast. Fresh. Flavorful.
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Image
              src="/menu2.png"
              alt="Decorative flourish left"
              width={80}
              height={20}
            />
            <h2 className="text-5xl font-bold text-white">Our Menu</h2>
            <Image
              src="/menu2.png"
              alt="Decorative flourish right"
              width={80}
              height={20}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Starters */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-white">Starters</h3>
            <div className="space-y-6">
              {starters.map((dish, index) => (
                <MenuItemCard
                  key={index}
                  name={dish.name}
                  price={dish.price}
                  desc={dish.desc}
                  label={dish.label}
                />
              ))}
            </div>
          </div>

          {/* Main Course */}
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-white">
              Main Course
            </h3>
            <div className="space-y-6">
              {mainCourse.map((dish, index) => (
                <MenuItemCard
                  key={index}
                  name={dish.name}
                  price={dish.price}
                  desc={dish.desc}
                  label={dish.label}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/menu">
            <button className="border-2 border-yellow-600 px-6 py-3 text-xl tracking-wide hover:bg-yellow-600 hover:text-black transition duration-300">
              Explore Our Full Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
