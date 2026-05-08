import { motion } from "framer-motion";
import { FaMusic, FaPaintBrush, FaTheaterMasks, FaRunning } from "react-icons/fa";

const activities = [
  {
    title: "Music",
    desc: "Develop rhythm, creativity and confidence through music.",
    icon: FaMusic,
  },
  {
    title: "Dance",
    desc: "Express emotions and culture through movement.",
    icon: FaRunning,
  },
  {
    title: "Arts & Crafts",
    desc: "Encouraging imagination with creative hands-on work.",
    icon: FaPaintBrush,
  },
  {
    title: "Cultural Events",
    desc: "Celebrating diversity through events and performances.",
    icon: FaTheaterMasks,
  },
];

const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-white">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Activities</h2>
        <p className="text-gray-500 mt-3">
          Encouraging creativity beyond academics
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {activities.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <Icon size={22} />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Activities;