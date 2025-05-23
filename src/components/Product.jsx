import React, { useState } from "react";

const products = [
  {
    title: "Beef Burger .Sedap",
    desc: "Dagingnya yang menjadi saksi",
    price: "Mulai dari Rp30.000",
    img: "/img/burger.jpg",
  },
  {
    title: "Kebab .Sedap",
    desc: "Lumpia membawa Turki Vibe's",
    price: "Mulai dari Rp15.000",
    img: "/img/kebab.jpg",
  },
  {
    title: "Beef Steak .Sedap",
    desc: "Kematangannya Jangan diragukan lagi",
    price: "Mulai dari Rp70.000",
    img: "/img/steak.jpg",
  },
];

export default function ProductCards() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product, idx) => {
        const isBlurred = hoveredIndex !== null && hoveredIndex !== idx;

        return (
          <div
            key={idx}
            className={`bg-[#81BFDA] text-center shadow p-4 rounded-xl transition duration-300 ${
              isBlurred ? "blur-sm scale-95" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={product.img}
              alt={product.title}
              className="mx-auto h-[250px] w-full object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-lg">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.desc}</p>
            <p className="text-blue-500 mt-2">{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}
