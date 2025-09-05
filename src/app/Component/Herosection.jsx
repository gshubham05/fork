import Link from "next/link";
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
        <source src="/mobilehero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-8 pt-10">
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Flavours of <br /> India, Delivered
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-gray-100">
          From <span className="font-semibold">crispy chilli potatoes</span> to{" "}
          <span className="font-semibold">butter chicken</span> — experience the
          rich taste of India,
          <br />
          delivered fresh from our kitchen to your doorstep.
        </p>
      </div>
    </div>
  );
}
