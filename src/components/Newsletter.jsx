import React from 'react';

const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="py-20  bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: "url('/path-to-your-bg.jpg')", backgroundPosition: '50% -318px' }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 uppercase mb-4">
          Login Akun Kamu
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Ayo ikuti terus dan mampir <span className="font-semibold text-yellow-600">Mayan .Sedap</span> untuk mendapatkan
          rasa kenikmatan yang belum pernah kamu bayangkan seumur hidup kamu
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            required
            placeholder="Enter your email..."
            className="w-full sm:w-[60%] px-5 py-3 text-base text-gray-700 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-300"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-300"
          >
            <i className="fa fa-paper-plane-o"></i> Follow
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
