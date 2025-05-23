import React, { useState } from "react";

const products = [
  { id: 5, img: "/img/kopi.jpg", name: "Kopi .Sedap", price: 15, isNew: false },
  { id: 6, img: "/img/susu.jpg", name: "Milkshake .Sedap", price: 25, isNew: true },
  { id: 7, img: "/img/soda.jpg", name: "Soda .Sedap", price: 10, isNew: false },
  { id: 4, img: "/img/jus.jpg", name: "Juice.Sedap", price: 15, isNew: false },
];

const NewArrivals = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section id="menu" className="py-20 px-10 bg-[#81BFDA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-800">Menu Lainnya</h2>
          <p className="text-gray-500 mt-2">Kali ini Minuman</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(({ id, img, name, price, isNew }) => {
            const isBlurred = hoveredCardId !== null && hoveredCardId !== id;

            return (
              <div
                key={id}
                className={`relative bg-white border rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden ${
                  isBlurred ? "blur-sm scale-95" : ""
                }`}
                onMouseEnter={() => setHoveredCardId(id)}
                onMouseLeave={() => setHoveredCardId(null)}
              >
                {isNew && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    NEW
                  </span>
                )}
                <img
                  src={img}
                  alt={name}
                  className="w-full h-60 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-700">{name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold text-gray-900">Rp{price}.000</span>
                    <button className="text-white bg-black hover:bg-gray-800 px-3 py-1 rounded-full text-sm">
                      <i className="fa fa-shopping-bag"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
