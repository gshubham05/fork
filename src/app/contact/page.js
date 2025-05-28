import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-[#0a0f0f] text-white min-h-screen px-6 md:px-20 py-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-yellow-600 text-sm uppercase tracking-widest">
          Get in Touch
        </p>
        <h1 className="text-5xl font-bold mt-3">Contact Us</h1>
        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
          Have questions or just want to say hi? Here’s how you can reach us.
        </p>
      </div>

      {/* Contact Info Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Address</h2>
            <p className="text-gray-300">
              Flavours of India Cloud Kitchen <br />
              123 Spice Street, Tandoori Lane <br />
              Mumbai, Maharashtra – 400001
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-300">+91 98765 43210</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <p className="text-gray-300">support@flavoursofindia.in</p>
          </div>
        </div>

        {/* Business Hours + Social */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
            <p className="text-gray-300">
              Monday – Saturday: 10:00 AM – 11:00 PM <br />
              Sunday: 12:00 PM – 9:00 PM
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
            <div className="flex gap-4 mt-2 items-center text-yellow-600 text-xl">
              <FaFacebookF className="hover:text-yellow-500 transition" />
              <FaInstagram className="hover:text-yellow-500 transition" />

              {/* Divider */}
              <div className="w-px h-6 bg-yellow-600 mx-2" />

              <FaTwitter className="hover:text-yellow-500 transition" />
              <FaLinkedinIn className="hover:text-yellow-500 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
