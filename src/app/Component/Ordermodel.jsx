"use client";

import { useEffect, useState } from "react";

export default function OrderModal({ show, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const mobileRegex =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [show]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const openAppWithFallback = (appUrl, fallbackUrl) => {
    const now = new Date().getTime();
    const timeout = setTimeout(() => {
      const elapsed = new Date().getTime() - now;
      if (elapsed < 1500) {
        window.location.href = fallbackUrl;
      }
    }, 1000);
    window.location.href = appUrl;
    setTimeout(() => clearTimeout(timeout), 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold text-center text-black mb-2">
          🍽️ Order From Us Directly
        </h2>
        <p className="text-center text-gray-700 mb-6">
          ✅ You can now order directly from our website or through your
          favorite apps.
        </p>

        {/* Website Order Button */}
        <div className="mb-4">
          <button
            onClick={() => (window.location.href = "/menu")}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition"
          >
            Order on Our Website
          </button>
        </div>

        {/* Divider */}
        <div className="text-center text-gray-400 text-sm mb-3">
          Also available on
        </div>

        {/* App Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() =>
              isMobile
                ? openAppWithFallback(
                    "https://zomato.onelink.me/xqzv/z3ww6vwb",
                    "https://zomato.onelink.me/xqzv/z3ww6vwb"
                  )
                : window.open(
                    "https://zomato.onelink.me/xqzv/z3ww6vwb",
                    "_blank"
                  )
            }
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition"
          >
            Zomato
          </button>

          <button
            onClick={() =>
              isMobile
                ? openAppWithFallback(
                    "https://www.swiggy.com/menu/1093013?source=sharing",
                    "https://www.swiggy.com/menu/1093013?source=sharing"
                  )
                : window.open(
                    "https://www.swiggy.com/menu/1093013?source=sharing",
                    "_blank"
                  )
            }
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition"
          >
            Swiggy
          </button>
        </div>
      </div>
    </div>
  );
}
