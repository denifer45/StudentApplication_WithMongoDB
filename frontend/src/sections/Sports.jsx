import { motion } from "framer-motion";
import {
  FaFutbol,
  FaBasketballBall,
  FaRunning,
  FaSpa,
} from "react-icons/fa";

const sports = [
  { name: "Football", icon: FaFutbol },
  { name: "Cricket", icon: FaRunning },
  { name: "Basketball", icon: FaBasketballBall },
  { name: "Yoga", icon: FaSpa },
];

const Sports = () => {
  return (
    <section id="sports" className="py-24 bg-gray-50">
      
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Sports & Fitness
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          We believe physical education is just as important as academics.
          Our sports programs are designed to build strength, confidence,
          discipline, and teamwork among students.
        </p>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-5"
        >
          <h3 className="text-2xl font-semibold text-gray-900">
            A Complete Approach to Student Well-being
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Our institution provides a balanced environment where students
            actively participate in both indoor and outdoor sports activities.
            We focus on developing physical endurance, mental strength, and
            leadership qualities through structured training programs.
          </p>

          <p className="text-gray-600 leading-relaxed">
            From competitive team sports to individual fitness practices,
            students are encouraged to explore their interests and maintain
            a healthy lifestyle throughout their academic journey.
          </p>

          {/* small highlights */}
          <ul className="text-gray-600 space-y-2 mt-4">
            <li>✔ Professional coaching and guidance</li>
            <li>✔ Safe and well-maintained playgrounds</li>
            <li>✔ Regular inter-school competitions</li>
            <li>✔ Focus on fitness and discipline</li>
          </ul>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="grid grid-cols-2 gap-6"
        >
          {sports.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-lg transition"
              >
                <Icon className="text-green-600 text-2xl" />
                <span className="font-medium text-gray-800">
                  {item.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Sports;