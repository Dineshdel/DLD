// FeedbackDisplay.jsx
import React from 'react';

const FeedbackDisplay = ({ feedbacks }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Submitted Feedback List</h2>
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index} className="border p-2 mb-2 flex items-center">
            <div className="flex-grow">
              <div><strong>Question:</strong> {feedback.feedback}</div>
              <div><strong>Type:</strong> {feedback.type}</div>
              {feedback.type === 'Rating' && (
                <div><strong>Rating:</strong> {feedback.rating} stars</div>
              )}
              {feedback.type === 'Yes/No' && (
                <div><strong>Options:</strong> {feedback.options.join(', ')}</div>
              )}
              {feedback.type === 'Text' && (
                <div><strong>Text:</strong> {feedback.feedback}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDisplay;
