import express from 'express';
import path from 'path'
import ejsLayouts from 'express-ejs-layouts';
import { connectToDb } from './src/db.config.js';
import { getAllStudents, getAddStudentView, addStudent } from './src/controller/student.controller.js';
import { addInterview, getAddInterviewView, getAllInterviews } from './src/controller/interview.controller.js';
import { downloadAsCsv } from './src/controller/csv.controller.js';

const app = express();
app.use(express.static('public'));
app.use(ejsLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

//routes
app.get('/', getAllStudents); //students view
app.get('/addStudent', getAddStudentView);
app.post('/addStudent', addStudent); //add student 

app.get('/interviews', getAllInterviews); 
app.get('/interviews/add', getAddInterviewView);
app.post('/interviews/add', addInterview);

app.get('/downloadCsv', downloadAsCsv);

app.listen(3000, () => {
    console.log('Server listening at port 3000');
    connectToDb();
  });
