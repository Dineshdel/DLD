const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
   feedback:{
    type:String,
   },
   question_type:{
    type:String,
   },
   options:{
    type:[String],
   },

    
});

const Feedback = mongoose.model('Feedback',feedbackSchema);

module.exports = Feedback;