"use client";
import React, { useState } from "react";

export default function OrderModal({ show, onClose, selectedItems }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!show) return null;

  const totalPrice = selectedItems.reduce((total, item) => {
    const priceNum = Number(item.price.replace(/[^\d]/g, ""));
    return total + priceNum;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !mobile) {
      alert("Please fill all fields.");
      return;
    }

    const orderText = `🧾 *Order Details*\n\n👤 Name: ${name}\n🏠 Address: ${address}\n📞 Mobile: ${mobile}\n\n🛒 Items:\n${selectedItems
      .map((item) => `- ${item.name} (${item.price})`)
      .join("\n")}\n\n💰 Total: ₹${totalPrice}`;

    // ✅ Replace number here with your own WhatsApp number (add country code)
    const phone = "919837218345"; // Example: +91 India
    const encodedText = encodeURIComponent(orderText);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");

    // Reset and close
    setName("");
    setAddress("");
    setMobile("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-70 z-50"
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-60 px-4">
        <div className="bg-[#121212] text-white rounded-lg max-w-md w-full p-6 relative z-70 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-[#d9a55d]">
            Confirm Your Order
          </h2>

          {selectedItems.length === 0 ? (
            <p className="mb-4">No items selected.</p>
          ) : (
            <>
              <ul className="mb-4 max-h-48 overflow-y-auto border border-gray-700 rounded-md p-3 space-y-2">
                {selectedItems.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="font-semibold">{item.price}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-6 text-lg font-semibold">
                Total Price: ₹{totalPrice}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 rounded bg-[#222] border border-gray-600 text-white"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  placeholder="Delivery Address"
                  className="w-full p-2 rounded bg-[#222] border border-gray-600 text-white"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full p-2 rounded bg-[#222] border border-gray-600 text-white"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />

                <button
                  type="submit"
                  className="w-full bg-[#d9a55d] text-black font-semibold py-2 rounded hover:bg-[#c49e43]"
                >
                  Submit Order
                </button>
              </form>
            </>
          )}

          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
}
