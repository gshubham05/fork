export default function Achievements() {
  return (
    <section className="bg-[#0a0f0f] text-white py-16 px-6" id="achievements">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#d9a55d] mb-6">
          Our Achievements 🏆
        </h2>

        <p className="text-gray-400 mb-10">
          Recognized for outstanding quality, hygiene, and taste across the
          city. Proud winner of
          <span className="text-[#d9a55d] font-semibold">
            {" "}
            Best Cloud Kitchen Award 2025
          </span>
          .
        </p>

        {/* Award Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/Award2.jpeg"
              alt="Receiving Award 1"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/Award1.jpg"
              alt="Receiving Award 2"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="/award3.jpeg"
              alt="Award Group Photo"
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <p className="text-gray-500 italic">More milestones to come... 🚀</p>
      </div>
    </section>
  );
}
