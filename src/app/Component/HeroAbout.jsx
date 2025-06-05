import Image from "next/image";

export default function Home() {
  return (
    <div className="flex pt-10 flex-col md:flex-row min-h-screen bg-[#0a0f0f] text-[#d4a45a] relative overflow-hidden">
      {/* Left image */}
      <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto relative">
        <Image
          src="/TD-3829.jpg"
          alt="Cloud Kitchen Interior"
          className="brightness-90 object-cover"
          fill // Automatically makes it responsive inside relative container
          priority
        />
      </div>

      {/* Right text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 py-12 space-y-6 relative z-10">
        <p className="text-white text-xl sm:text-2xl uppercase">
          Your go-to kitchen for every craving
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
          Bold Indian flavours — <em className="italic">crafted with care</em>,
          <br className="hidden sm:block" />
          sealed fresh, and delivered
          <br className="hidden sm:block" />
          right to your <em className="italic">doorstep</em>.
        </h1>
      </div>

      {/* Yellow Flourish Image */}
      <div className="absolute left-1/2 bottom-[6rem] sm:bottom-10 transform -translate-x-1/2 md:left-[68.5%] md:bottom-2">
        <Image
          src="/divider.png"
          alt="Flourish Design"
          width={400}
          height={50}
          className="w-[80vw] max-w-[470px]"
        />
      </div>
    </div>
  );
}
