 import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        {/* Social icons */}
        <div className="text-center mb-6">
          <h4 className="text-lg font-semibold">
            We are social <span className="text-yellow-400">/ Love sharing what we do</span>
          </h4>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://facebook.com/novojackets" target="_blank" rel="noreferrer"><FaFacebook size={24} /></a>
            <a href="https://twitter.com/novojackets" target="_blank" rel="noreferrer"><FaTwitter size={24} /></a>
            <a href="https://instagram.com/novojackets" target="_blank" rel="noreferrer"><FaInstagram size={24} /></a>
            <a href="https://pinterest.com/novojackets" target="_blank" rel="noreferrer"><FaPinterest size={24} /></a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <h5 className="font-bold mb-2">Company</h5>
            <ul className="space-y-1">
              <li><a href="/about">About Us</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Products</h5>
            <ul className="space-y-1">
              <li><a href="/products/varsity">Varsity Jackets</a></li>
              <li><a href="/products/hoodies">Hoodies</a></li>
              <li><a href="/products/bomber">Bomber Jackets</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Guide</h5>
            <ul className="space-y-1">
              <li><a href="/jacket-builder">How to Design</a></li>
              <li><a href="/measurement-guide">Measurements</a></li>
              <li><a href="/embroidery-patches-guide">Embroidery</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-2">Help</h5>
            <ul className="space-y-1">
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/shipping">Shipping</a></li>
              <li><a href="/return-exchange">Return & Exchange</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
          © 2025 Novo Jackets — <a href="/privacy-policy" className="underline">Privacy Policy</a> | <a href="/terms-conditions" className="underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
