import { Motion }  from "framer-motion";
const StudentManagement = () => {
    {/* STUDENT MANAGEMENT */}
    return (
         
      <Motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-24 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* <Sidebar addStudent={addStudent} /> */}
          <Sidebar
            addOrUpdateStudent={addOrUpdateStudent}
            editIndex={editIndex}
            students={students}
          />
          <div className="md:col-span-2">
            <StudentTable
              students={students}
              onDelete={deleteStudent}
              onEdit={editStudent}
            />

            {/* <StudentTable students={students} /> */}
          </div>
        </div>
      </motion.section>
    );
};          

export default StudentManagement;

