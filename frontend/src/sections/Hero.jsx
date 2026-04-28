import { motion } from "framer-motion";
import schoolImg from "../assets/images/school.jpg";

const Hero = () => {
  return (
    <section
      id="home"
     
  className="min-h-screen bg-cover bg-center relative"
  style={{ backgroundImage: `url(${schoolImg})` }}
>
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h2 className="text-5xl font-extrabold mb-6">
            Building Future Leaders
          </h2>

          <p className="text-lg max-w-xl mb-8">
            A modern institution delivering academic excellence.
          </p>

          <a href="#contact" className="btn">
            Enroll Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;