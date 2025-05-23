import { CiBadgeDollar } from "react-icons/ci";
import { createRoot } from "react-dom/client";
// import TailwindCSS from "./Tailwind.CSS";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar.jsx";
import Header from "./layouts/Header.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Footer from "./layouts/Footer.jsx";
import { BreadcrumbProvider } from "./context/BreadcrumbContext"; // Import the BreadcrumbProvider

createRoot(document.getElementById("root")).render(
  <BreadcrumbProvider> {/* Wrapping everything in BreadcrumbProvider */}
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4">
          <Header />
          <Dashboard />
          {/* <Footer /> Footer component is now included */}
        </div>
      </div>
    </div>
  </BreadcrumbProvider>
);
