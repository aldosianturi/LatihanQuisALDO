import React from 'react';
import { FaAngleDoubleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id='footer' className="pt-10 pb-6">
      <div className="w-full text-center">
  <a href="#hero" className="go-top inline-block text-3xl text-gray-700 hover:text-gray-900 transition">
    <FaAngleDoubleUp />
  </a>
</div>


      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-4">
          {/* About Store */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer_panel content_space">
              <h4 className="border-b-2 border-gray-300 pb-3 mb-6 uppercase font-semibold text-lg">
                Tentang Resto
              </h4>
              <ul className="space-y-4 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <i className="fa fa-home"></i> Jl. Umban Sari Atas, No 07.
                </li>
                <li className="flex items-center gap-2">
                  <i className="fa fa-phone"></i> +6282234566543
                </li>
                <li>
                  <a href="#." className="flex items-center gap-2 hover:text-yellow-600 transition">
                    <i className="fa fa-envelope-o"></i> mayansedap@gmai.com
                  </a>
                </li>
                <li className="flex gap-3 mt-4">
                  <img src="img/logo1.png" alt="payment" className="h-6" />
                  <img src="img/fb.png" alt="payment" className="h-6" />
                  <img src="img/wa.png" alt="payment" className="h-6" />
                  <img src="img/ig.png" alt="payment" className="h-6" />
                </li>
              </ul>
            </div>
          </div>

          {/* My Account */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer_panel content_space">
              <h4 className="border-b-2 border-gray-300 pb-3 mb-6 uppercase font-semibold text-lg">
                My Account
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                {["My Account", "Login", "My Cart", "Wishlist", "Checkout", "Userinfo"].map((item) => (
                  <li key={item}>
                    <a href="#." className="hover:text-yellow-600 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Information */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer_panel content_space">
              <h4 className="border-b-2 border-gray-300 pb-3 mb-6 uppercase font-semibold text-lg">
                Information
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                {["My Account", "Login", "My Cart", "Wishlist", "Checkout", "Userinfo"].map((item) => (
                  <li key={item}>
                    <a href="#." className="hover:text-yellow-600 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Customer Service */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer_panel content_space">
              <h4 className="border-b-2 border-gray-300 pb-3 mb-6 uppercase font-semibold text-lg">
                Customer Service
              </h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                {[
                  "Shipping Policy",
                  "Compensation First",
                  "My Account",
                  "Return Policy",
                  "Contact Us",
                  "Shipping Info",
                ].map((item) => (
                  <li key={item}>
                    <a href="#." className="hover:text-yellow-600 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
