import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  errorMessages = {
    404: {
      title: "404",
      message: "Halaman yang kamu cari tidak ditemukan.",
      image: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
    },
    400: {
      title: "400",
      message: "Permintaan tidak valid. Coba lagi nanti.",
      image: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
    },
    401: {
      title: "401",
      message: "Kamu tidak memiliki akses ke halaman ini.",
      image: "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
    }
  };

  render() {
    if (this.state.hasError) {
      const errorCode = this.state.errorCode || 404;
      const error = this.errorMessages[errorCode] || this.errorMessages[404];

      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center max-w-md bg-white p-8 rounded-xl shadow-lg">
            <img src={error.image} alt={`Error ${error.title}`} className="mb-4 w-full h-auto" />
            <h1 className="text-4xl font-bold text-red-600 mb-4">{error.title}!!</h1>
            <p className="text-gray-700 mb-6 text-sm">{error.message}</p>
            <a
              href="/"
              className="inline-block px-6 py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition duration-300"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
