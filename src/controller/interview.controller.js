import { addNewInterview, getInterviews } from "../repository/interview.repository.js";


export const getAllInterviews = async(req, res, next)=> {
    try {
        const interviews = await getInterviews();
        if (!interviews) {
          return res.status(200).render('interview', { interviews: [] });
        }
        res.status(200).render('interview', { interviews});
      } catch (error) {
        console.log('controller error getting interviews: ',error);
      }
}

export const getAddInterviewView = async(req, res, next) =>{
    res.status(200).render('addInterview');
}

export const addInterview = async(req, res, next)=> {
    try {
      const result = await addNewInterview(req.body)
      if (result) {
        return res.status(200).redirect("/interviews")
      }
    } catch (error) {
      console.log('controller error adding student: ',error);
    }
}