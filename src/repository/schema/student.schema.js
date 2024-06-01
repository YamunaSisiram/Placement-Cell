import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  college: String,
  dsaScore: Number,
  webDScore: Number,
  status: { type: String, enum: ['placed', 'not placed'], default: 'not placed' },
});

const StudentModel = mongoose.model('Student', StudentSchema);

export default StudentModel;