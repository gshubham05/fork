"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Menus", href: "/menu" },

  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Main Nav */}
      <nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-colors duration-500 ${
          pathname === "/" && !scrolled
            ? "bg-transparent text-white"
            : "bg-black/30 text-white backdrop-blur-md shadow-md"
        }`}
      >
        <Link href="/">
          <h1 className="text-2xl font-bold">Fork and Sticks</h1>
        </Link>
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <Link href={href} className="relative group inline-block">
                <span
                  className={`${
                    pathname === href ? "text-yellow-500 font-bold" : ""
                  }`}
                >
                  {name}
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[300px] bg-[#0e161b] z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FiX
            className="text-white text-2xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul className="flex flex-col items-start space-y-6 px-6 mt-8 font-semibold text-white text-lg">
          {navLinks.map(({ name, href }) => (
            <li key={name} onClick={toggleMenu}>
              <Link href={href} className="relative group inline-block">
                <span
                  className={`${
                    pathname === href ? "text-yellow-500 font-bold" : ""
                  }`}
                >
                  {name}
                </span>
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
