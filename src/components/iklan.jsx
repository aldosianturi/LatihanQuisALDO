import React from "react";

const iklan = () => {
  return (
    <section id="slogan" className="py-12 px-4 bg-[#81BFDA]">
      <div className="max-w-7xl mx-auto">
        {/* Left Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold uppercase text-gray-800">
            <span className="text-red-600">Apakah Kamu Tertarik dengan Ini?</span> Ayoo Mampir!!
          </h2>
          <p className="text-gray-900 mt-2">
            Ayo install aplikasi khusus dari Mayan .Sedap untuk mendapatkan bonus dan diskon yang menarik!
          </p>
        </div>

        {/* Right Button */}
        <div className="text-center md:text-right">
          <a
            href="#."
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg uppercase transition duration-300"
          >
            Download Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default iklan;
