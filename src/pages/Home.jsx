// src/pages/Home.jsx
import React from "react";
import GuestLayout from "../layouts/GuestLayout";
import GuestHeader from "../components/GuestHeader";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";
import Product from "../components/Product";
import NewArrivals from '../components/NewArrival.jsx';
import BlogSection from '../components/BlogSection.jsx';
import FeaturedProduct from "../components/FeaturedProducts.jsx";
import Iklan from "../components/iklan.jsx"
import Newsletter from "../components/Newsletter.jsx";


const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Product />
      <NewArrivals/>
      <FeaturedProduct/>
       <BlogSection/>
      <Iklan/>
      <Newsletter/>
      <Footer />
      {/* Tambahkan konten lain di bawah slider kalau mau */}
    </div>
  );
};

export default Home;
