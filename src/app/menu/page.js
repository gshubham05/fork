export default function MenuPage() {
  const sections = [
    {
      title: "Indian Delights",
      description:
        "Taste authentic Indian flavors made with traditional spices and cooking styles.",
      image: "/indian.jpg",
      items: [
        {
          name: "Paneer Butter Masala",
          tags: "Paneer / Curry / Butter",
          price: "₹220",
        },
        {
          name: "Chicken Biryani",
          tags: "Chicken / Rice / Spicy",
          price: "₹250",
        },
        { name: "Masala Dosa", tags: "South / Veg / Crispy", price: "₹180" },
      ],
    },
    {
      title: "Chinse Fusion",
      description:
        "Delicious Indo-Chinese meals with bold flavors and aromatic sauces.",
      image: "chinse.jpg",
      items: [
        {
          name: "Chilli Paneer",
          tags: "Paneer / Spicy / Indo-Chinese",
          price: "₹210",
        },
        {
          name: "Veg Hakka Noodles",
          tags: "Noodles / Veg / Soy Sauce",
          price: "₹180",
        },
        {
          name: "Manchurian Gravy",
          tags: "Veg / Deep-fried / Tangy",
          price: "₹190",
        },
      ],
    },
    {
      title: "Snacks & Starters",
      description:
        "Perfect bites for anytime cravings – crispy, spicy, and satisfying.",
      image: "/snacks.jpg",
      items: [
        {
          name: "Samosa Chaat",
          tags: "Spicy / Chutney / Crunchy",
          price: "₹120",
        },
        {
          name: "Pav Bhaji",
          tags: "Butter / Pav / Mashed Veggies",
          price: "₹160",
        },
        {
          name: "Aloo Tikki",
          tags: "Fried / Veg / North Indian",
          price: "₹140",
        },
      ],
    },
    {
      title: "Sweet Treats",
      description:
        "End your meal on a sweet note with our rich and indulgent desserts.",
      image: "/sweet.jpg",
      items: [
        { name: "Gulab Jamun", tags: "Milk / Sweet / Syrup", price: "₹100" },
        { name: "Rasgulla", tags: "Soft / Bengali / Syrupy", price: "₹100" },
        {
          name: "Kulfi Falooda",
          tags: "Ice Cream / Noodles / Sweet",
          price: "₹150",
        },
      ],
    },
  ];

  return (
    <>
      <section className="relative bg-[#0a0f0f] text-white py-24 overflow-hidden">
        <div className="text-center max-w-2xl mx-auto z-10 relative">
          <p className="uppercase tracking-widest text-sm text-gray-300 mb-2">
            Fresh & Flavorful
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Satisfy Your Cravings
          </h1>
          <p className="text-lg text-gray-400">
            From crispy starters to rich curries and sweet treats — our menu has
            everything you crave.
          </p>
        </div>
      </section>
      <div className="bg-[#0a0f0f] text-white px-4 py-12 space-y-24">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto"
          >
            {/* Image */}
            <div className="lg:w-1/2 w-full overflow-hidden rounded-2xl shadow-lg">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 w-full">
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-300 mb-8">{section.description}</p>

              {/* Menu Items */}
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
    </>
  );
}
