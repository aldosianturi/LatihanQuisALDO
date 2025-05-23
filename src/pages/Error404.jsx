import { useLocation, useNavigate } from "react-router-dom";

const errorMessages = {
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

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const code = location.state?.code || 404;
  const error = errorMessages[code] || errorMessages[404];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      padding: "0 20px",
      backgroundColor: "#fff"
    }}>
      <h1 style={{ fontSize: "72px", marginBottom: "10px", fontWeight: "700", color: "#111827" }}>{error.title}</h1>
      <p style={{ fontSize: "20px", marginBottom: "20px", color: "#6B7280" }}>{error.message}</p>
      <img
        src={error.image}
        alt={`Error ${error.title}`}
        style={{ width: "700px", maxWidth: "100%", marginBottom: "15px" }}
      />
      <button
        onClick={handleBack}
        style={{
          padding: "10px 24px",
          backgroundColor: "#10b981",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer"
        }}
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}
