import { FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const StudentTable = ({ students, onEdit, refreshStudents }) => {
  return (
    <div className="card">
      <h3 className="text-xl font-bold mb-4">Student Records</h3>

      {students.length === 0 ? (
        <p className="text-gray-500">No student records added yet.</p>
      ) : (
        <table className="w-full border">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-2">Name</th>
              <th>Class</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.map((s) => (
              <motion.tr
                key={s._id} // ✅ IMPORTANT FIX
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-t text-center"
              >
                <td className="p-2">{s.name}</td>
                <td>{s.className}</td>
                <td>{s.dob}</td>
                <td>{s.email}</td>

                <td className="flex justify-center gap-4 p-2">
                  
                  {/* EDIT */}
                  <button
                    onClick={() => onEdit(s)} // ✅ send full object
                    className="text-blue-600 hover:scale-110 transition"
                  >
                    <FaEdit />
                  </button>

                  {/* DELETE */}
                  <button
                    onClick={async () => {
                      try {
                        await fetch(
                          `http://localhost:4071/api/students/${s._id}`,
                          { method: "DELETE" }
                        );

                        refreshStudents(); // ✅ reload data
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    className="text-red-600 hover:scale-110 transition"
                  >
                    <FaTrash />
                  </button>

                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;