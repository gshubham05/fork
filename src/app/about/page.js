export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#0a0f0f] text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center px-6 py-24 overflow-hidden">
        <img
          src="/about-hero.jpg"
          alt="About Fork and Sticks"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-4xl">
          <p className="text-yellow-500 tracking-widest uppercase text-sm mb-4">
            Fresh. Fast. Flavorful.
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            A bold new taste in 2025 — Fork and Sticks is Dehradun’s rising
            cloud kitchen, ready to deliver happiness to your doorstep.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="flex justify-center mt-[-1rem]"></div>

      {/* Content Section */}
      <section className="relative z-10 px-6 md:px-20 py-20 bg-[#0a0f0f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Journey Begins
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Launched in{" "}
              <span className="text-yellow-500 font-semibold">2025</span>, Fork
              and Sticks was born from a passion for delivering home-style
              Indian meals with modern convenience. As a full-fledged cloud
              kitchen, we focus entirely on crafting great food — no dine-in
              distractions, just direct-to-door deliciousness.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We’re proudly available on{" "}
              <span className="text-yellow-500 font-semibold">Swiggy</span> and{" "}
              <span className="text-yellow-500 font-semibold">Zomato</span>,
              making it easier than ever to enjoy your favorites wherever you
              are in Dehradun.
            </p>

            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 text-2xl font-bold">✔</span>
                <p className="text-gray-300">
                  100% Cloud-Based Kitchen for faster delivery
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 text-2xl font-bold">✔</span>
                <p className="text-gray-300">
                  Listed on Swiggy & Zomato for maximum reach
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 text-2xl font-bold">✔</span>
                <p className="text-gray-300">
                  Curated dishes from North Indian to Indo-Chinese
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/home.jpg"
              alt="Fork and Sticks Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#111515] py-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Order now & experience the buzz!
        </h3>
        <p className="text-gray-400 mb-6">
          Find us on your favorite food apps — or explore our in-house menu for
          exclusive deals.
        </p>
        <a
          href="/menu"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 transition text-black font-semibold py-3 px-8 rounded-xl shadow-md"
        >
          Explore Our Menu
        </a>
      </section>
    </div>
  );
}
