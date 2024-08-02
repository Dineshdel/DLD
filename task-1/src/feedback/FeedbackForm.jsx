import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = ({ addFeedback }) => {
  const [error, setError] = useState('');
  const [questionType, setQuestionType] = useState('yes_no');
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  console.log('hi')
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (feedback.trim() === '') {
      setError('Question cannot be empty.');
      return;
    }
    const question = {
      feedback,
      type: questionType,
      options: questionType === 'yes_no' ? ['Yes', 'No'] : [],
      rating: questionType === 'rating' ? rating : null,
    };
console.log(question)
    try {
      await axios.post('http://localhost:5000/feedback/add/question', question);
      addFeedback(question);
      setFeedback('');
      setError('');
      setRating(0);
    } catch (error) {
      console.error('Error adding feedback:', error);
      setError('An error occurred while adding the feedback. Please try again.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-xl mb-4">Add Question</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        className="w-full p-2 border mb-4"
        placeholder="Type your question here..."
      ></textarea>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Question Type:</label>
        <select
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
          className="w-full p-2 border"
        >
          <option value="yes_no">Yes/No</option>
          <option value="rating">5-Star Rating</option>
        </select>
      </div>
      {questionType === 'rating' && (
        <div className="mb-4">
          <label className="block font-semibold mb-2">Rating:</label>
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`p-2 ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
      )}
      <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-lg">
        Add Question
      </button>
    </form>
  );
};

export default FeedbackForm;
