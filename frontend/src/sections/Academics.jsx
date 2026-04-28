import {motion} from "framer-motion";
const Academics = () => {
    {/* ACADEMICS */}
    return (
            
      <section id="academics" className="section bg-blue-50">
        <h2 className="section-title">Academics</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Primary School",
              desc: "Strong foundation in literacy and numeracy.",
            },
            {
              title: "Secondary School",
              desc: "Advanced curriculum with subject specialization.",
            },
            {
              title: "Senior Secondary",
              desc: "Career-oriented education and exam preparation.",
            },
          ].map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-2">{a.title}</h3>
              <p>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    );
};

export default Academics;