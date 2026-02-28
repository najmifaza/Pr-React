import { Link } from "react-router";
import { useState, useEffect } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi saat user melakukan scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        isScrolled ? "pt-2" : "pt-6"
      }`}
    >
      <div
        className={`w-full max-w-5xl transition-all duration-300 flex items-center justify-between px-6 border border-white/10 shadow-2xl ${
          isScrolled
            ? "h-14 bg-[#0d0d0d]/60 backdrop-blur-lg rounded-full mx-4"
            : "h-16 bg-[#0d0d0d]/60 backdrop-blur-lg rounded-full"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="pb-2 text-white font-bold text-3xl tracking-tight"
        >
          MyFirstReact<span className="text-blue-500">.</span>
        </Link>

        {/* Navigation Menu */}
        <div
          id="hs-navbar-header-floating"
          className="hidden md:block overflow-hidden transition-all duration-300 basis-full grow"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
            <Link
              to="/"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 hover:text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-neutral-200 dark:hover:text-neutral-200"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Contact
            </Link>

            <Link
              to="/product"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Product
            </Link>

            <Link
              to="/form"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Form
            </Link>

            <Link
              to="/RHFPage"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              React Hook Form
            </Link>

            <Link
              to="/employees"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Employees
            </Link>

            <Link
              to="/usestate"
              className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            >
              Use State
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
