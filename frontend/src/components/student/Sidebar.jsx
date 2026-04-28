import { useEffect, useState } from "react";

const Sidebar = ({ editStudent, setEditStudent, refreshStudents }) => {
  const [data, setData] = useState({
    name: "",
    className: "",
    dob: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Fill form when editing
  useEffect(() => {
    if (editStudent) {
      setData(editStudent);
    }
  }, [editStudent]);

  const validate = () => {
    let e = {};
    if (!data.name) e.name = "Name is required";
    if (!data.className) e.className = "Class is required";
    if (!data.dob) e.dob = "DOB is required";
    if (!data.email.includes("@")) e.email = "Valid email required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (editStudent) {
        // ✅ UPDATE
        await fetch(
          `http://localhost:4071/api/students/${editStudent._id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          }
        );
      } else {
        // ✅ CREATE
        await fetch("http://localhost:4071/api/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }

      // ✅ Reset form
      setData({ name: "", className: "", dob: "", email: "" });
      setEditStudent(null);
      setErrors({});

      refreshStudents(); // 🔥 refresh table

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">
        {editStudent ? "Edit Student" : "Add Student"}
      </h3>

      <form onSubmit={submit} className="space-y-3">

        <input
          className="input"
          placeholder="Student Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          className="input"
          placeholder="Class"
          value={data.className}
          onChange={(e) => setData({ ...data, className: e.target.value })}
        />
        {errors.className && <p className="error">{errors.className}</p>}

        <input
          type="date"
          className="input"
          value={data.dob}
          onChange={(e) => setData({ ...data, dob: e.target.value })}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}

        <input
          className="input"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <button className="btn w-full">
          {editStudent ? "Update Student" : "Add Student"}
        </button>

      </form>
    </div>
  );
};

export default Sidebar;