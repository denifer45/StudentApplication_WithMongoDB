import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import React, { useEffect, useState } from "react";

import Login from "./pages/Login";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
import Academics from "./sections/Academics";
import Features from "./sections/Features";
import Activities from "./sections/Activities";
import Sports from "./sections/Sports";
import About from "./sections/About";
import Contact from "./sections/Contact";

import Sidebar from "./components/student/Sidebar";
import StudentTable from "./components/student/StudentTable";

// ✅ Home Sections Component

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Academics />
      <Features />
      <Activities />
      <Sports />
      <About />
      <Contact />
    </>
  );
};

// ✅ Layout Component (handles Navbar/Footer visibility)
const Layout = ({ students, editStudent, setEditStudent, fetchStudents }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className={isLoginPage ? "" : "pt-24"}>
      {/* 🔥 Hide Navbar in Login */}
      {!isLoginPage && <Navbar />}

      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <Home />

              {/* STUDENT MANAGEMENT */}
              <section className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                  <h1 className="text-3xl font-bold col-span-full text-center">
                    Student Management
                  </h1>

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
            </>
          }
        />

        {/* ✅ Login Page */}
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* 🔥 Hide Footer in Login */}
      {!isLoginPage && <Footer />}
    </div>
  );
};

// ✅ Main App Component
const App = () => {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = async () => {
    try {
      const res = await fetch("http://localhost:4071/api/students");
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error("Fetch Students Error:", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Router>
      <Layout
        students={students}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
        fetchStudents={fetchStudents}
      />
    </Router>
  );
};

export default App;
