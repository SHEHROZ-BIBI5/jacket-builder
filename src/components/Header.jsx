 import React from "react";

const Header = () => {
  return (
    <header className="bg-white fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo (Text as Logo) */}
        <div className="flex items-center">
          <a
            href="/"
            id="logo"
            className="text-2xl font-extrabold tracking-wide text-gray-900 uppercase"
          >
            Novo<span className="text-red-600">Jackets</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-sm font-semibold uppercase">
            <li id="nav-home">
              <a href="/" className="hover:text-red-600">Home</a>
            </li>
            <li id="nav-products">
              <a href="/products" className="hover:text-red-600">Products</a>
            </li>
            <li id="nav-builder">
              <a href="/jacket-builder" className="text-red-600 font-bold">
                Jacket Builder
              </a>
            </li>

            {/* Dropdown - Guide Lines */}
            <li id="nav-guidelines" className="relative group">
              <a href="#" className="hover:text-red-600">
                Guide Lines ▾
              </a>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded w-48">
                <li id="nav-measurement">
                  <a href="/measurement-guide" className="block px-4 py-2 hover:bg-gray-100">
                    Measurement
                  </a>
                </li>
                <li id="nav-embroidery">
                  <a href="/embroidery-patches-guide" className="block px-4 py-2 hover:bg-gray-100">
                    Embroidery / Patches
                  </a>
                </li>
                <li id="nav-materials">
                  <a href="/jackets-materials-color-shades" className="block px-4 py-2 hover:bg-gray-100">
                    Materials & Colors
                  </a>
                </li>
              </ul>
            </li>

            {/* Dropdown - Bulk Orders */}
            <li id="nav-bulk" className="relative group">
              <a href="#" className="hover:text-red-600">
                Bulk Orders ▾
              </a>
              <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded w-56">
                <li id="nav-group-orders">
                  <a href="/teams-group-orders-letterman-jackets" className="block px-4 py-2 hover:bg-gray-100">
                    Group Orders
                  </a>
                </li>
                <li id="nav-wholesale">
                  <a href="/wholesale-jackets" className="block px-4 py-2 hover:bg-gray-100">
                    Wholesale Orders
                  </a>
                </li>
              </ul>
            </li>

            <li id="nav-contact">
              <a href="/contact" className="hover:text-red-600">Contact Us</a>
            </li>
          </ul>
        </nav>

        {/* Login + Cart on right */}
        <div className="flex items-center space-x-6 text-sm font-semibold uppercase">
          <a id="nav-login" href="/login" className="text-yellow-600 hover:text-yellow-700">
            Login
          </a>
          <a id="nav-cart" href="/cart" className="flex items-center hover:text-blue-900">
            <span className="border px-2 py-1 rounded text-xs mr-1">0</span>
            Cart
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
