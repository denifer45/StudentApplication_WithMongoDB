import { motion } from "framer-motion";
import schoolImg from "../assets/images/school.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center"
    >
      {/* Background */}
      <img
        src={schoolImg}
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-extrabold text-white leading-tight"
        >
          Building <br />
          <span className="text-blue-400">Future Leaders</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-200 max-w-xl mx-auto"
        >
          A modern institution focused on excellence, innovation,
          and shaping tomorrow’s leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
          >
            Enroll Now
          </a>

          <a
            href="#about"
            className="border border-white/50 px-6 py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
          >
            Explore
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;