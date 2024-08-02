import React, { useState } from 'react';

const View = () => {
  const [formData, setFormData] = useState({
    studentname: '',
    studentid: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">View Student</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 grid-rows-">
          <div className="mb-4">
            <label className="block mb-2">Student Name</label>
            <input
              type="text"
              name="studentname"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Studemt ID</label>
            <input
              type="text"
              name="studentid"
              value={formData.studentid}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
          View Student
        </button>
      </form>
    </div>
  );
};

export default View;
