import {motion} from "framer-motion";


const Activities = () => {
    {/* ACTIVITIES */}
    return (
           
      <section id="activities" className="section">
        <h2 className="section-title">Activities</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {["Music", "Dance", "Arts & Crafts", "Cultural Events"].map(
            (a, i) => (
              <motion.div key={i} className="card" whileHover={{ scale: 1.05 }}>
                <h3 className="font-semibold text-lg">{a}</h3>
                <p className="mt-2">Encouraging creativity and expression.</p>
              </motion.div>
            ),
          )}
        </div>
      </section>
    );
};

export default Activities;