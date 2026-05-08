import { motion } from "framer-motion";
import { FaBook, FaFlask, FaLaptop, FaChalkboardTeacher } from "react-icons/fa";

const features = [
  {
    icon: FaBook,
    title: "Library",
    desc: "Well-stocked library with academic and reference materials.",
  },
  {
    icon: FaFlask,
    title: "Science Labs",
    desc: "Fully equipped labs for practical learning and experiments.",
  },
  {
    icon: FaLaptop,
    title: "Computer Labs",
    desc: "Modern systems with high-speed internet access.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Smart Classes",
    desc: "Interactive digital classrooms for better learning.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      
      {/* Title */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Campus Features
        </h2>
        <p className="text-gray-500 mt-3">
          Facilities designed to support modern education
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-4">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Small line */}
              <div className="mt-4 h-[2px] w-8 bg-blue-600 group-hover:w-16 transition-all"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;