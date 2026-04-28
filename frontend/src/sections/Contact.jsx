import {motion} from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";


const Academics = () => {
      {/* CONTACT */}
    return (
       
      <section
        id="contact"
        className="section bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Contact Us
          </motion.h2>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We would love to hear from you. Reach out to us for admissions,
            inquiries, or general information.
          </p>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Address",
                text: "Back to School Campus, Main Road, City, Country",
              },
              {
                icon: <FaPhoneAlt />,
                title: "Phone",
                text: "+91 98765 43210",
              },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "admissions@backtoschool.edu",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="card text-center"
              >
                <div className="text-3xl text-blue-600 mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Optional CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p className="text-lg font-medium mb-4">
              Admissions Open for 2026–27
            </p>
            <button className="btn text-lg">Visit Our Campus</button>
          </motion.div>
        </div>
      </section>

        );
    };

export default Academics;