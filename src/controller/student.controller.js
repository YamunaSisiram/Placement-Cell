import { getStudents , addNewStudent} from "../repository/student.repository.js";

export const getAllStudents = async(req, res, next)=> {
    try {
        const students = await getStudents();
        if (!students) {
          return res.status(200).render('studentsView', { students: [] });
        }
        res.status(200).render('studentsView', { students});
      } catch (error) {
        console.log('controller error getting students: ',error);
      }
}

export const getAddStudentView = async(req, res, next) =>{
    res.status(200).render('addStudent');
}

export const addStudent = async(req, res, next)=> {
    try {
      const result = await addNewStudent(req.body);
      if (result) {
        return res.status(200).redirect("/")
      }
    } catch (error) {
      console.log('controller error adding student: ',error);
    }
}