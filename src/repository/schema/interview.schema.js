import mongoose from 'mongoose';

const InterviewSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },
  date: { type: Date, required: true }
});

const InterviewModel = mongoose.model('Interview', InterviewSchema);

export default InterviewModel;