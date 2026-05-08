import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSchool } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const goToSection = (id) => {
    setOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    "home",
    "academics",
    "features",
    "activities",
    "sports",
    "about",
    "contact",
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* 🔹 Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaSchool className="text-blue-600 text-xl" />
          <h1 className="text-xl font-semibold text-gray-900">
            Back To School
          </h1>
        </div>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => goToSection(item)}
                className="relative group hover:text-blue-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}

          {/* Login Button */}
          <li>
            <Link
              to="/login"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </li>
        </ul>

        {/* 🔹 Mobile Menu Icon */}
        <div
          className="md:hidden text-xl cursor-pointer text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* 🔹 Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t px-6 py-4 space-y-4 shadow-sm"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => goToSection(item)}
              className="block w-full text-left text-gray-700 hover:text-blue-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}

          <Link
            to="/login"
            className="block text-center bg-blue-600 text-white py-2 rounded-lg"
          >
            Login
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;