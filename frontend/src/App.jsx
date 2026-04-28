import React, { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Sidebar from "./components/student/Sidebar";
import StudentTable from "./components/student/StudentTable";

import Hero from "./sections/Hero";
import Academics from "./sections/Academics";
import Features from "./sections/Features";
import Activities from "./sections/Activities";
import Sports from "./sections/Sports";
import About from "./sections/About";
import Contact from "./sections/Contact";

const App = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  // ✅ Fetch students from MongoDB
  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:4071/api/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="pt-10">
      <Navbar />

      {/* WEBSITE SECTIONS */}
      <Hero />
      <Academics />
      <Features />
      <Activities />
      <Sports />

      {/* STUDENT MANAGEMENT */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <h1 className="text-3xl font-bold col-span-full text-center">Student Management</h1>
          <Sidebar
            editStudent={editStudent}
            setEditStudent={setEditStudent}
            refreshStudents={fetchStudents}
          />

          <div className="md:col-span-2">
            <StudentTable
              students={students}
              onEdit={(student) => setEditStudent(student)}
              refreshStudents={fetchStudents}
            />
          </div>

        </div>
      </section>

      <About />
      <Contact />

      <Footer />
    </div>
  );
};

export default App;