import { createObjectCsvWriter } from 'csv-writer';

import StudentModel from '../repository/schema/student.schema.js';
import InterviewModel from '../repository/schema/interview.schema.js';

export const downloadAsCsv = async(req, res, next)=>{
    try{
        const students = await StudentModel.find();

        const csvWriter = createObjectCsvWriter({
            path: 'student_data.csv',
            header: [
                {id: 'studentId', title: 'Student ID'},
                {id: 'studentName', title: 'Student Name'},
                {id: 'college', title: 'College'},
                {id: 'status', title: 'Status'},
                {id: 'dsaScore', title: 'DSA Score'},
                {id: 'webdScore', title: 'WebD Score'}
            ]
        });

        const records = [];

        students.forEach(student => {
                records.push({
                    studentId: student._id,
                    studentName: student.name,
                    college: student.college,
                    status: student.status,
                    dsaScore: student.dsaScore,
                    webdScore: student.webDScore
                });
        });

        await csvWriter.writeRecords(records);
        
        res.download('student_data.csv', 'student_data.csv');
    }catch(error){
        console.log(error);
    }
}