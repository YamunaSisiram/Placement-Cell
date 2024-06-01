import StudentModel from "./schema/student.schema.js";

export const getStudents = async() => {
    try {
        const students = await StudentModel.find({});
        return students;
      } catch (error) {
        console.log('Error getting students:', error);
      }
}

export const addNewStudent = async(student) => {
  try {
    const newStudent = new StudentModel(student);
    newStudent.save();

    return true;
  } catch (error) {
    console.log('Error getting students:', error);
    return false;
  }
}