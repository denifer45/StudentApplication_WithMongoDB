import { motion } from "framer-motion";
import { FaBook, FaFlask, FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

const Features = () => {
    {/* FEATURES */}        
    return (
         
      <section id="features" className="section bg-blue-400 text-white">
        <h2 className="section-title text-white">Campus Features</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {[
            { icon: <FaBook />, label: "Library" },
            { icon: <FaFlask />, label: "Science Labs" },
            { icon: <FaLaptop />, label: "Computer Labs" },
            { icon: <FaChalkboardTeacher />, label: "Smart Classes" },
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="bg-white/10 p-6 rounded-xl text-center"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <a rel="stylesheet" href="_blank" >
              <h3 className="text-lg font-semibold">{f.label}</h3>
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    );
};

export default Features;