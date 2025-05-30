'use client';
import { useEffect, useState } from 'react';
export default function OrderModal({ show, onClose }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    setIsMobile(mobileRegex.test(userAgent));
  }, []);

  const openAppWithFallback = (appUrl, fallbackUrl) => {
    const now = new Date().getTime();
    const timeout = setTimeout(() => {
      const elapsed = new Date().getTime() - now;
      if (elapsed < 1500) {
        window.location.href = fallbackUrl;
      }
    }, 1000);

    // Try opening the app
    window.location.href = appUrl;

    // Clear timeout after 2 seconds (cleanup)
    setTimeout(() => clearTimeout(timeout), 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white p-6 rounded-2xl max-w-sm w-full text-center shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-black transition"
          aria-label="Close"
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

        <h2 className="text-xl font-semibold mb-2 text-black">Order Online</h2>
        <p className="mb-4 text-gray-800">We’re on Zomato and Swiggy!</p>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => {
              isMobile
                ? openAppWithFallback(
                    'zomato://',
                    'https://play.google.com/store/apps/details?id=com.application.zomato'
                  )
                : window.open('https://www.zomato.com', '_blank');
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Zomato
          </button>

          <button
            onClick={() => {
              isMobile
                ? openAppWithFallback(
                    'swiggy://',
                    'https://play.google.com/store/apps/details?id=in.swiggy.android'
                  )
                : window.open('https://www.swiggy.com', '_blank');
            }}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Swiggy
          </button>
        </div>
      </div>
    </div>
  );
}