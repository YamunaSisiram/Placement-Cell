import InterviewModel from "./schema/interview.schema.js";


export const getInterviews = async() => {
    try {
        const interviews = await InterviewModel.find();
        return interviews;
      } catch (error) {
        console.log('Error getting interviews:', error);
      }
}

export const addNewInterview = async(interview) => {
  try {
    const newInterview = new InterviewModel(interview);
    newInterview.save();

    return true;
  } catch (error) {
    console.log('Error getting interviews:', error);
    return false;
  }
}