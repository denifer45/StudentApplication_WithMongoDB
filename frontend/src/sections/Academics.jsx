import { motion } from "framer-motion";
import { FaBookOpen, FaFlask, FaUserGraduate } from "react-icons/fa";

const items = [
  {
    title: "Primary School",
    desc: "Strong foundation in literacy, numeracy, and creativity.",
    icon: FaBookOpen,
  },
  {
    title: "Secondary School",
    desc: "Advanced curriculum with subject-focused learning.",
    icon: FaFlask,
  },
  {
    title: "Senior Secondary",
    desc: "Career-oriented education with exam preparation.",
    icon: FaUserGraduate,
  },
];

const Academics = () => {
  return (
    <section id="academics" className="py-10 bg-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center px-6 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900"
        >
          Academics
        </motion.h2>
        <p className="mt-4 text-gray-500">
          Structured programs designed for every stage of student growth.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {items.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group border border-gray-200 rounded-xl p-8 hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Subtle underline */}
              <div className="mt-6 h-[2px] w-8 bg-blue-600 group-hover:w-16 transition-all"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Academics;