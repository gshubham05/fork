import Image from "next/image";

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
      name: "Chili Paneer",
      price: 240,
      desc: "Paneer / Bell Peppers / Indo-Chinese Sauce",
      label: "Recommended",
    },
    {
      name: "Spring Rolls",
      price: 120,
      desc: "Veggies / Noodles / Crispy Wrap",
    },
    {
      name: "Chicken Lollipop",
      price: 260,
      desc: "Chicken / Schezwan Sauce / Fried",
      label: "New",
    },
    {
      name: "Crispy Corn",
      price: 180,
      desc: "Golden Corn / Herbs / Spices",
    },
    {
      name: "Veg Manchurian Balls",
      price: 200,
      desc: "Cabbage / Carrot / Tangy Sauce",
    },
    {
      name: "Dragon Chicken",
      price: 270,
      desc: "Chicken / Garlic / Sweet-Spicy Glaze",
      label: "Recommended",
    },
  ];

  const mainCourse = [
    {
      name: "Schezwan Fried Rice",
      price: 220,
      desc: "Rice / Chili Garlic Sauce / Mixed Veg",
    },
    {
      name: "Hakka Noodles",
      price: 210,
      desc: "Noodles / Soy Sauce / Veg or Chicken",
    },
    {
      name: "Paneer Chilli Gravy",
      price: 250,
      desc: "Paneer / Capsicum / Spicy Gravy",
      label: "New",
    },
    {
      name: "Chicken Manchurian Gravy",
      price: 270,
      desc: "Minced Chicken / Tangy Sauce / Garlic",
    },
    {
      name: "Veg Triple Schezwan",
      price: 260,
      desc: "Rice + Noodles / Schezwan Sauce / Manchurian",
      label: "Recommended",
    },
    {
      name: "Egg Fried Rice",
      price: 190,
      desc: "Rice / Scrambled Egg / Spring Onion",
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
      </div>
    </section>
  );
}
