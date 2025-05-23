import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetElem = document.getElementById(targetId);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 shadow-md bg-[#81BFDA]">
      {/* Logo */}
      <div>
        <img src="/img/logo1.png" alt="Logo Sedap" className="h-10" />
      </div>

      {/* Navigation */}
      <ul className="flex gap-4">
        <li>
          <a
            href="#hero"
            className="px-4 py-2 rounded text-[#4B352A] hover:bg-[#4B352A] hover:text-white transition"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#menu"
            className="px-4 py-2 rounded text-[#4B352A] hover:bg-[#4B352A] hover:text-white transition"
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#tentang-kami"
            className="px-4 py-2 rounded text-[#4B352A] hover:bg-[#4B352A] hover:text-white transition"
          >
            Tentang Kami
          </a>
        </li>
        <li>
          <a
            href="#footer"
            className="px-4 py-2 rounded text-[#4B352A] hover:bg-[#4B352A] hover:text-white transition"
          >
            Kontak
          </a>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="flex gap-2">
        <a href="/login">
          <button className="border border-black text-black px-3 py-1 rounded hover:bg-black hover:text-white transition">
            Login
          </button>
        </a>
        <a href="/Register">
          <button className="bg-black text-white px-3 py-1 rounded hover:bg-white hover:text-black border border-black transition">
            Register
          </button>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
