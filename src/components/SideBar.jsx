import ListMenu from "./ListMenu";
export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
      <div id="sidebar-logo" className="flex flex-col">
        <img
          src="/img/logo1.png" // Ganti sesuai path logo kamu
          alt="Mayan Sedap Logo"
          className="w-60 h-auto object-contain" // Atur ukuran sesuai kebutuhan
        />
        <span id="logo-subtitle" className="font-semibold text-gray-400">
          Modern Admin Dashboard
        </span>
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mr-10"><ListMenu /></div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-8  rounded-md shadow-lg mb-10 flex items-center">
          <div id="footer-text" className="text-white text-sm">
            <span>Please organize your menus through button below!</span>
            <div
              id="add-menu-button"
              className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
              <span className="text-gray-600 flex items-center">Add Menus</span>
            </div>
          </div>
          {/* <img
            id="footer-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-20 rounded-full"/> */}
        </div>
        <span id="footer-brand" className="font-bold text-gray-400">
          Mayan Sedap Restaurant Admin Dashboard
        </span>
        
        <p id="footer-copyright" className="font-light text-gray-400">
          &copy; 2025 All Right Reserved
        </p>
      </div>
    </div>
  );
}
