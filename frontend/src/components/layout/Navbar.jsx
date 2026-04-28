import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
    className="fixed top-0 w-full bg-white shadow z-50"
  >
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <h1 className="text-2xl font-bold text-blue-600">Back to School</h1>

      <ul className="hidden md:flex gap-6 font-medium">
        {["home","academics","features","activities","sports","about","contact"].map(i => (
          <li key={i}>
            <a href={`#${i}`} className="hover:text-blue-600 transition">
              {i.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </motion.nav>
);

export default Navbar;