"use client";

import { FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-[#0a0f0f] text-white min-h-screen px-6 md:px-20 py-20 space-y-16">
      {/* Heading */}
      <div className="text-center">
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
            <address className="not-italic text-gray-300 leading-relaxed">
              Fork and Sticks <br />
              85 Karanpur Market, Near Survey Chowk <br />
              Dehradun, Uttarakhand – 248001
            </address>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Phone</h2>
            <a
              href="tel:+916398118280"
              className="text-gray-300 hover:text-yellow-600 me-2 transition"
            >
              +91 6398118280
            </a>
                 <a
              href="tel:+917906860858"
              className="text-gray-300 hover:text-yellow-600 transition"
            >
              +91 7906860858
            </a>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Email</h2>
            <a
              href="mailto:support@forkandsticks.in"
              className="text-gray-300 hover:text-yellow-600 transition"
            >
              support@forkandsticks.in
            </a>
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
              <a
                href="https://www.instagram.com/forkandstickss?igsh=MWxucGJzcDkycnpxNw==" // Replace with your actual handle
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="max-w-5xl mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3443.8720988585355!2d78.05093397556455!3d30.32615567478305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE5JzM0LjIiTiA3OMKwMDMnMTIuNiJF!5e0!3m2!1sen!2sin!4v1756649209102!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.957084582652!2d78.0373316738371!3d30.323738505286922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909293b5bd4df4b%3A0xb33cce6b9e773c8!2sFork%20and%20Stick!5e0!3m2!1sen!2sin!4v1748710825061!5m2!1sen!2sin"
         
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl shadow-lg"
          aria-label="Google Map showing Fork and Sticks"
        ></iframe>
      </div>
    </div>
  );
}
