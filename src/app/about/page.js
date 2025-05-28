export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#0a0f0f] text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center px-6 py-24 overflow-hidden">
        <img
          src="/about-hero.jpg" // Add a hero image in your /public folder
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative z-10 max-w-4xl">
          <p className="text-yellow-500 tracking-widest uppercase text-sm mb-4">
            Deliciously Authentic
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We’re not just another kitchen — we’re India’s digital dining
            experience, redefined.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="flex justify-center mt-[-1rem]">
        <svg
          width="100"
          height="40"
          viewBox="0 0 100 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 20C20 0 80 0 100 20C80 40 20 40 0 20Z" fill="#C2884B" />
        </svg>
      </div>

      {/* Content Section */}
      <section className="relative z-10 px-6 md:px-20 py-20 bg-[#0a0f0f]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founded with a love for bold flavors and convenience,{" "}
              <span className="text-yellow-500 font-semibold">
                Flavours of India
              </span>{" "}
              brings authentic cuisine from the heart of India straight to your
              door. From regional specialties to timeless classics, our chefs
              pour tradition into every meal.
            </p>

            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 text-2xl font-bold">✔</span>
                <p className="text-gray-300">
                  Fresh, locally-sourced ingredients
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 text-2xl font-bold">✔</span>
                <p className="text-gray-300">
                  Authentic regional Indian recipes
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-yellow-500 text-2xl font-bold">✔</span>
                <p className="text-gray-300">
                  Fast delivery with eco-friendly packaging
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/kitchen.jpg" // Use a photo of chefs or food prep
              alt="Our Kitchen Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-[#111515] py-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Want to taste the magic?
        </h3>
        <p className="text-gray-400 mb-6">
          Check out our menu and order your next favorite meal.
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
