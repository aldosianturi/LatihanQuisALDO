import React, { useState } from "react";

const products = [
  { id: 5, img: "/img/245281.avif", name: "Bakso Urat .Sedap", price: 15, isNew: false },
  { id: 6, img: "/img/salad.jpg", name: "Salad Buah .Sedap", price: 25, isNew: true },
  { id: 7, img: "/img/udang.jpg", name: "Udang Sauce .Sedap", price: 50, isNew: false },
  { id: 4, img: "/img/steak.jpg", name: "Beef Steak .Sedap", price: 70, isNew: true },
  { id: 2, img: "/img/waffle.jpg", name: "Waffle .Sedap", price: 20, isNew: true },
  { id: 3, img: "/img/dessert.jpg", name: "Dessert .Sedap", price: 17, isNew: true },
  { id: 8, img: "/img/burger.jpg", name: "Beef Burger .Sedap", price: 30, isNew: true },
  { id: 1, img: "/img/kebab.jpg", name: "Kebab .Sedap", price: 15, isNew: true },
];

const NewArrivals = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  return (
    <section id="menu" className="py-20 px-10 bg-[#81BFDA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-800">Menu Mayan .Sedap</h2>
          <p className="text-gray-500 mt-2">Tersedia untuk anda</p>
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
