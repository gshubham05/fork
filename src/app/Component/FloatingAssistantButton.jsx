'use client';
import { useState, useEffect } from 'react';
export default function FloatingAssistantButton({ onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Slide in after 1 seconds
    const timer = setTimeout(() => setVisible(true), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-10 right-0 flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-l-full shadow-lg cursor-pointer z-50
        transform transition-transform duration-700 ease-in-out
        ${visible ? 'translate-x-0' : 'translate-x-full'}
      `}
      aria-label="Order Assistant"
      title="Order Assistant"
    >
      <span className="text-lg">🍽</span>
      <span className="font-semibold whitespace-nowrap">Order Now</span>
    </button>
  );
}
