import React, { useState } from 'react'; // Make sure to import useState
import { Modal, Select, Input, Rate, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SaveOutlined, CloseOutlined, EditOutlined, DeleteOutlined, CheckOutlined } from '@ant-design/icons';
import FeedbackDisplay from './FeedbackDisplay';
import axios from 'axios';

const { Option } = Select;

const FeedbackList = ({ feedbacks, updateFeedbacks }) => {
  
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [editType, setEditType] = useState('');
  const [editOptions, setEditOptions] = useState([]);
  const [editRating, setEditRating] = useState(0);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this feedback?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
        updateFeedbacks(updatedFeedbacks);
      },
    });
  };

  const handleEdit = (index) => {
    const feedback = feedbacks[index];
    setEditingIndex(index);
    setEditText(feedback.feedback);
    setEditType(feedback.type);
    setEditOptions(feedback.options || []);
    setEditRating(feedback.rating || 0);
  };

  const handleSave = () => {
    const updatedFeedbacks = feedbacks.map((feedback, i) =>
      i === editingIndex ? { ...feedback, feedback: editText, type: editType, options: editOptions, rating: editRating } : feedback
    );
    updateFeedbacks(updatedFeedbacks);
    setEditingIndex(null);
    setEditText('');
    setEditType('');
    setEditOptions([]);
    setEditRating(0);
  };

  const handleSubmit = async() => {
    const response = await axios.post('https://localhost:5000/api/feedback/addquestions')
    console.log('Submitting feedback list:', feedbacks);
    updateFeedbacks(feedbacks);
    Modal.success({
      title: 'Success',
      content: 'Feedback list has been saved successfully.',
    });
    navigate('/display'); // Navigate to the feedback display page
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Feedback Question List</h2>
      
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index} className="border p-2 mb-2 flex items-center">
            {editingIndex === index ? (
              <>-+

              
                <div className="flex-grow">
                  <Input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="mb-2"
                  />
                  <Select
                    value={editType}
                    onChange={(value) => setEditType(value)}
                    className="mb-2"
                  >
                    <Option value="Yes/No">Yes/No</Option>
                    <Option value="Rating">Rating</Option>
                    <Option value="Text">Text</Option>
                  </Select>
                  {editType === 'Rating' && (
                    <Rate
                      value={editRating}
                      onChange={(value) => setEditRating(value)}
                      className="mb-2"
                    />
                  )}
                  {editType === 'Yes/No' && (
                    <Input
                      value={editOptions.join(', ')}
                      onChange={(e) => setEditOptions(e.target.value.split(',').map(opt => opt.trim()))}
                      placeholder="Enter options separated by commas"
                      className="mb-2"
                    />
                  )}
                  {editType === 'Text' && (
                    <Input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      placeholder="Enter text"
                      className="mb-2"
                    />
                  )}
                </div>
                <Button
                  onClick={handleSave}
                  type="primary"
                  className="bg-blue-500 text-white p-2 ml-2 flex items-center"
                >
                  <SaveOutlined /> Save
                </Button>
                <Button
                  onClick={() => setEditingIndex(null)}
                  type="danger"
                  className="bg-red-500 text-white p-2 ml-2 flex items-center"
                >
                  <CloseOutlined /> Cancel
                </Button>
              </>
            ) : (
              <>
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
                <Button
                  onClick={() => handleEdit(index)}
                  type="primary"
                  className="bg-violet-500 hover:bg-violet-600 text-white p-2 ml-2 flex items-center"
                >
                  <EditOutlined /> Edit
                </Button>
                <Button
                  onClick={() => handleDelete(index)}
                  type="danger"
                  className="bg-red-500 text-white p-2 ml-2 flex items-center"
                >
                  <DeleteOutlined /> Delete
                </Button>
              </>
            )}
          </li>
        ))}
      </ul>
      
      <Button
        onClick={handleSubmit}
        type="primary"
        className="mt-4 flex items-center"
      >
        <CheckOutlined /> Submit Feedback List
      </Button>
    </div>
  );
};

export default FeedbackList;
