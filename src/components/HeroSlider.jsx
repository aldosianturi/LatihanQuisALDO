import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function HeroSlider() {
  return (
    <div id='hero' className="w-full">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="h-[600px]"

      >
        <SwiperSlide>
        <div className="flex items-center justify-between bg-[#81BFDA] h-full text-left px-28">
          <div className="w-1/2">
            <p className="uppercase text-sm font-semibold text-gray-700">Mayan .Sedap</p>
            <h1 className="text-5xl font-extrabold mt-2 mb-4 leading-tight">
              Resto Mayan .Sedap<br />
              <span className="text-[#7965C1]">PekanBaru</span>
            </h1>
            <p className="text-gray-600 mb-6">Politeknik Caltex Riau</p>
            <button className="border px-6 py-2 text-sm hover:bg-black hover:text-white transition">
              Info Lebih
            </button>
          </div>

          {/* Kolom kanan: gambar */}
          <div className="w-1/2 h-full">
            <img
              src="/img/logo1.png" 
              alt="Resto Banner"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center justify-between bg-[#81BFDA] h-full text-left px-28">
          <div className="w-1/2">
            <p className="uppercase text-sm font-semibold text-pink-800">Mayan .Sedap</p>
            <h1 className="text-5xl font-extrabold mt-2 mb-4 text-pink-900 leading-tight">
              Terupdate<br />
              <span className="text-pink-600">PCR</span>
            </h1>
            <p className="text-pink-700 mb-6">
              "Jika harimu lelah, singgahlah ke Mayan .Sedap"
            </p>
            <button className="border border-pink-700 px-6 py-2 text-sm text-pink-800 hover:bg-pink-700 hover:text-white transition">
              Info Lebih
            </button>
          </div>
          <div className="w-1/2 h-full">
            <img
              src="/img/logo1.png" 
              alt="Mayan Sedap"
              className="w-full h-full object-cover rounded-l-xl"
            />
          </div>
        </div>
      </SwiperSlide>
      </Swiper>
    </div>
  );
}
