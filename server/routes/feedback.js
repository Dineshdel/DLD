const express = require('express');
const router = express.Router();
const {addQuestion,getQuestion} = require('../controller/feedbackController');

router.route('/add/question').post(addQuestion);

router.route('/get/question').get(getQuestion);

module.exports = router;