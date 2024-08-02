const FeedbackForm = require('../model/feedbackquestion');

exports.addQuestion = (req,res,next) => {
   const {feedback,question_type,options} = req.body;
   try{
   const newFeedbackForm = new FeedbackForm({feedback,question_type,options});
   newFeedbackForm.save();
   return res.status(201).json({
    success:true,
    message:"Question added Successfully!"
   });
   }
   catch(err){
    console.log(err);
    return res.status(401).json({
        success:false,
        message:"Failed",
        error:err
    });
   }
}

exports.getQuestion = async(req,res,next) => {
    try{
    const feedbackForm = await FeedbackForm.find();
    return res.status(201).json({
        success:true,
        message:"Questions fetched successfully!",
        questions:feedbackForm
    })
}
catch(err){
    console.log(err);
    return res.status(401).json({
        success:false,
        message:"cannot able to fetch questions"
    })
}

}