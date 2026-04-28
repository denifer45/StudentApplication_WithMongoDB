import {motion} from "framer-motion";
import { FaSchool, FaBullseye, FaHandsHelping } from "react-icons/fa";


const Academics = () => {
     {/* ABOUT */}
    return (
        
      <section id="about" className="section bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            About Our School
          </motion.h2>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <motion.img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="School Campus"
              className="rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-700 mb-6">
                <strong>Back to School</strong> was established with the vision
                of providing holistic education that nurtures academic
                excellence, creativity, discipline, and leadership.
              </p>

              <p className="text-gray-600 mb-6">
                Over the years, we have grown into a trusted institution
                committed to shaping confident, responsible, and future-ready
                students.
              </p>
            </motion.div>
          </div>

          {/* Vision / Mission / Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <FaSchool />,
                title: "Our Vision",
                desc: "To inspire lifelong learners and responsible global citizens.",
              },
              {
                icon: <FaBullseye />,
                title: "Our Mission",
                desc: "To deliver quality education through innovation and integrity.",
              },
              {
                icon: <FaHandsHelping />,
                title: "Our Values",
                desc: "Respect, Excellence, Responsibility, and Collaboration.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="text-4xl text-blue-600 mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Academics;   