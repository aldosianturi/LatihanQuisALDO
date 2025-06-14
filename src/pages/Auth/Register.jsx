import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BsFillExclamationDiamondFill } from 'react-icons/bs';
import { ImSpinner2 } from 'react-icons/im';

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://dummyjson.com/users/add', {
        firstName: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status !== 200 && response.status !== 201) {
        setError('Register gagal. Coba lagi.');
        return;
      }

      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat register.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid w-md">
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl">
        <div className="border-transparent rounded-xl bg-white shadow-xl p-8 m-2">
          <h1 className="text-5xl font-bold text-center text-gray-900">Sign Up</h1>

          {error && (
            <div className="bg-red-100 mt-5 p-3 rounded flex items-center text-sm text-gray-700">
              <BsFillExclamationDiamondFill className="text-red-600 mr-2" />
              {error}
            </div>
          )}

          {loading && (
            <div className="bg-gray-100 mt-5 p-3 rounded flex items-center text-sm">
              <ImSpinner2 className="mr-2 animate-spin" />
              Mohon Tunggu...
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label className="block mb-2 text-lg text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border p-3 shadow-md border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="border p-3 shadow-md border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="border p-3 shadow-md border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg disabled:opacity-50"
            >
              {loading ? 'Memproses...' : 'REGISTER'}
            </button>
          </form>

          <div className="flex flex-col mt-4 text-sm text-center text-gray-700">
            <p>
              Already have an account?{' '}
              <a href="/login" className="text-blue-400 hover:underline">
                Log in
              </a>
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-5">
            {[
              ['Google', 'https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/'],
              ['LinkedIn', 'https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/'],
              ['GitHub', 'https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/'],
              ['Facebook', 'https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/'],
              ['Twitter', 'https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/'],
              ['Apple', 'https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/'],
            ].map(([alt, src]) => (
              <button key={alt} className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                <img className="w-6 h-6" src={src} alt={alt} />
              </button>
            ))}
          </div>

          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              By signing up, you agree to our{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Terms
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-400 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
