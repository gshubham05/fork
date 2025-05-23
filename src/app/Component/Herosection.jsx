export default function HomePage() {
  return (
    <div className="relative h-screen w-full text-white bg-[#0a0f0f] ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-8 pt-10">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Flavours of <br /> India, Delivered
        </h1>
        <p className="mt-6 text-xl">
          From biryanis to butter chicken — experience the rich taste of India
          <br />
          straight from our cloud kitchen to your doorstep.
        </p>
        <button className="mt-8 border-2 border-yellow-600 px-6 py-3 text-xl tracking-wide hover:bg-yellow-600 transition">
          VIEW MENU
        </button>
      </div>
    </div>
  );
}
