import React, { useState } from 'react';

const Newstudent = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    age: '',
    birth: '',
    email: '',
    gender:"",
    mobile: '',
    aadhar: '',
    pan: '',
    driving: '',
    department: '',
    nationality: '',
    fatherName: '',
    fatherMobile: '',
    motherName: '',
    motherMobile: '',
    address: '',
    permanentAddress: '',
    district: '',
    state: '',
    pinCode: '',
    socialData: '',
    physicallyChallenged: ''
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
      <h2 className="text-2xl mb-4">Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 grid-rows-">
          <div className="mb-4">
            <label className="block mb-2">First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">D.O.B</label>
            <input
              type="text"
              name="birth"
              value={formData.birth}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border p-2 w-50"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mobile</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Aadhar</label>
            <input
              type="number"
              name="aadhar"
              value={formData.aadhar}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Pan</label>
            <input
              type="number"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Driving Licence</label>
            <input
              type="text"
              name="driving"
              value={formData.driving}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Father Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Father Mobile No</label>
            <input
              type="text"
              name="fatherMobile"
              value={formData.fatherMobile}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mother Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Mother Mobile No</label>
            <input
              type="text"
              name="motherMobile"
              value={formData.motherMobile}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Social Data</label>
            <input
              type="text"
              name="socialData"
              value={formData.socialData}
              onChange={handleChange}
              className="border p-2 w-50"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Physically Challange</label>
            <select
              name="gender"
              value={formData.physicallyChallenged}
              onChange={handleChange}
              className="border p-2 w-50"
            >
              <option value="">Select</option>
              <option value="male">Yes</option>
              <option value="female">No</option>
            </select>
          </div>
         
         
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
          Update
        </button>
      </form>
    </div>
  );
};

export default Newstudent;
