"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "Chef Arjun Mehta",
    role: "Head Chef - Indian Cuisine",
    image: "/chef.jpg",
    desc: "Specializes in North Indian and Mughlai dishes with over 12 years of experience in cloud kitchen operations.",
  },
  {
    name: "Chef Nisha Verma",
    role: "Chinese Fusion Expert",
    image: "/chef2.jpg",
    desc: "Master of Indo-Chinese fusion, crafting bold flavors in dishes like Manchurian and Hakka noodles.",
  },
  {
    name: "Chef Sameer Iqbal",
    role: "Fast Food Specialist",
    image: "/chef.jpg",
    desc: "Innovates with wraps, burgers, and street-style bites using authentic Indian spices and modern techniques.",
  },
  {
    name: "Priya Sharma",
    role: "Packaging & Quality Control",
    image: "/chef2.jpg",
    desc: "Ensures every dish is packed hot, fresh, and eco-friendly for the perfect doorstep experience.",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-[#0D1413] text-white py-20 px-6 md:px-20">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Meet the Faces Behind the Flavors
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Our Team</h2>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#1a1f1f] rounded-xl overflow-hidden shadow-md hover:shadow-[#d4a45a]/30 transition duration-300"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#d4a45a] mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{member.role}</p>
              <p className="text-sm text-gray-300">{member.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
