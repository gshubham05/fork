"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f1a1a] text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-[#d4a45a]">
        {/* Left Section: Logo and Brand */}
        <div className="flex items-center justify-center md:justify-start space-x-3 text-[#d4a45a] w-full md:w-1/3 py-6 md:py-0">
          <Image
            src="/logo.png"
            alt="Dehradun Eats Logo"
            width={140}
            height={50}
            className="object-contain"
            priority
          />
          <span className="text-2xl font-bold">Fork and Stickes</span>
        </div>

        {/* Middle Section: Navigation Links */}
        <nav className="flex flex-col items-center justify-center space-y-3 w-full md:w-1/3 py-6 md:py-0">
          <a
            href="/"
            className="hover:text-[#c89453] transition text-sm uppercase tracking-wide text-white"
          >
            Home
          </a>
          <a
            href="/menu"
            className="hover:text-[#c89453] transition text-sm uppercase tracking-wide text-white"
          >
            Menu
          </a>
          <a
            href="/about"
            className="hover:text-[#c89453] transition text-sm uppercase tracking-wide text-white"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-[#c89453] transition text-sm uppercase tracking-wide text-white"
          >
            Contact
          </a>
        </nav>

        {/* Right Section: Social Icons + Copyright */}
        <div className="flex flex-col items-center justify-center space-y-4 w-full md:w-1/3 py-6 md:py-0">
          <div className="flex space-x-6">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#d4a45a] hover:text-white transition"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 10-11.5 9.8v-6.9h-2.5v-2.9h2.5V9.3c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v6.9A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#d4a45a] hover:text-white transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37a4 4 0 11-4.74-4.74 4 4 0 014.74 4.74z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>

            {/* TripAdvisor (Placeholder as an eye icon) */}
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tripadvisor"
              className="text-[#d4a45a] hover:text-white transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="9" cy="12" r="2" />
                <circle cx="15" cy="12" r="2" />
              </svg>
            </a>
          </div>

          <p className="text-[#d4a45a] text-xs">
            &copy; Copyright CodewareIT Pvt Ltd All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
