import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "16",
    month: "Mei",
    title: "Awal Produksi",
    excerpt:
      "Belum memiliki logo ",
    image: "img/kosong.jpg",
    link: "blog_post.html",
  },
  {
    id: 2,
    date: "27",
    month: "april",
    title: "Founder Mayan .Sedap",
    excerpt:
      "ALDO E SIANTURI",
    image: "img/lance.jpg",
    link: "blog_post.html",
  },
];

const BlogSection = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold uppercase text-gray-800">Tentang Kami</h2>
          <p className="text-gray-500 mt-2">Mayan .Sedap menjadi project kami</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map(({ id, date, month, title, excerpt, image, link }) => (
            <div key={id} className="flex bg-[#81BFDA] border rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
              <a href={link} className="flex-shrink-0">
                <img
                  src={image}
                  alt="Blog"
                  className="w-40 h-full object-cover"
                />
              </a>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-700 mb-1">
                    {date}
                    <sub className="text-sm lowercase ml-1">/ {month}</sub>
                  </h2>
                  <h5 className="text-lg font-semibold uppercase text-gray-800 mb-3 leading-snug">
                    <a href={link}>{title}</a>
                  </h5>
                  <p className="text-gray-600 text-sm">{excerpt}</p>
                </div>
                <div className="mt-4">
                  <a
                    href={link}
                    className="text-sm uppercase text-black hover:text-gray-700 font-medium inline-flex items-center"
                  >
                    Read more <i className="fa fa-angle-double-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
