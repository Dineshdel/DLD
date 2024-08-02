import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import FeedbackForm from './FeedbackForm';
import FeedbackList from './FeedbackList';


const Dashboard2 = () => {
  const campusFaculties = {
    'Kattankulathur Campus': 
      ['Faculty of Engineering & Technology', 'Faculty of Science & Humanities', 'Faculty of Management', 'Law', 'Agricultural Science', 'Faculty of Medicine & Health Science', 'Distance Education', 'Online Education'],
  
      'Ramapuram Campus': 
      ['Faculty of Engineering & Technology', 'Faculty of Science & Humanities'],
  
      'Vadapalani Campus': 
      ['Faculty of Engineering & Technology', 'Faculty of Science & Humanities', 'Faculty of Management'],
   
      'Trichy Campus': 
      ['Faculty of Engineering & Technology', 'Faculty of Science & Humanities', 'Medical Health Science', 'Institute of Hotel Management', 'Allied Health Sciences', 'Allied Departments'],
   
      'Ghaziabad Campus': 
      ['Faculty of Engineering & Technology', 'Faculty of Science & Humanities', 'Faculty of Management', 'Faculty of Medicine & Health Science'],
   
      'Acharapakkam Campus': 
      ['Faculity of Horticulture','Faculity of Agriculture'],
  };

  const campusDepartments = {
    'Kattankulathur Campus': {
      'Faculty of Engineering & Technology': 
       ['Aerospace Engineering', 'Architecture and Interior Design', 'Automobile Engineering', 'Biomedical Engineering', 'Biotechnology', 'Civil Engineering', 'Chemical Engineering', 'Chemistry', 'Computing Technologies', 'Data Science And Business Systems', 'Electronics & Communication', 'Electrical and Electronics Engineering', 'Electronics & Instrumentation Engineering', 'English and Foreign Languages', 'Food Process Engineering', 'Genetic Engineering', 'Mathematics', 'Mechanical Engineering', 'Mechatronics Engineering', 'Networking And Communications', 'Physics and Nanotechnology'],
      'Faculty of Science & Humanities': 
        ['Department Of Biochemistry','Biotechnology – Science and Humanities','Career Development Centre (CDC-CSH)','Department of Commerce','Department of Computer Applications','Department of Computer Science','Department of Defence and Strategic Studies','School of Education','Department of English','Department of Fashion Designing','Department of French','Department of Hindi','Institute of Hotel and Catering Management','Department Of Journalism And Mass Communication','Department of Mathematics and Statistics','Department of Physical Education & Sports Sciences','Department of Psychology','Department of Social Work','Department of Visual Communication','Department of Tamil','Department of Yoga'],
      'Faculty of Management': 
        ['Bachelor of Business Administration (BBA)', 'Master of Business Administration (MBA)'],
      'Law': 
        [],
      'Faculty of Medicine & Health Science': 
        ['Medicine','Dentistry','Pharmacy','Physiotherpy','Occupational Therapy', 'Nursing', 'School of Public Health'], 
      'Distance Education': 
        [],
      'Online Education': 
        [],
    },
      
    'Ramapuram Campus': {
      'Faculty of Engineering & Technology': 
        ['Bio Medical Engineering','Civil Engineering','Computer Science Engineering','Electicul & Eletronic Engineering','Electronic & Computer Engineering'],
      'Faculty of Science & Humanities': 
        ['Department of Information','Department of Biotechnlogy','Department of Chemistry','Department of English & other Foreign Languages','Department of Mathematics','Department of Physics','Department of Archieture'],
    },

    'Vadapalani Campus': {
      'Faculty of Engineering & Technology': 
        ['Department of Computer Science & Engineering','Department of Computer Science & Engineering - Emerging Technologies','Department of Electronics & Communication Engineering','Department of Mechanical Engineering,','Department of Career Development Centre','Department of Chemistry','Department of English & Foreign Languages','Department of Mathematics','Department of Physics',],
      'Faculty of Science & Humanities': 
        ['Department of Commerce','Department of Commerce (A & F)','Department of Commerce (Honours) (IAF)','Department of Computer Science & Applications','Department of English','Department of Hotel & Catering Management','Department of Mathematics','Department of Psychology','Department of Languages','Department of Visual Communication'],
     'Faculty of Management': 
        ['Bachelor of Business Administration (BBA)', 'Master of Business Administration (MBA)'],
    },

    'Trichy Campus': {
      'Faculty of Engineering & Technology': 
        [" Computer Science And Engineering",' Electronics and ommunication Engineerin','* Artificial Intelligence & MachineLearning','CSE with Cyber Security','nformation Technology','CSE with Big Data Analytics','Electrical and Electronics Engineering','Artificial Intelligence','CSE with Specialization in Blockchain Technology',],
      'Faculty of Science & Humanities': 
        ['B.Com General','B.Com Finance & Accounting','B.Com Information System And Management','B.Sc Computer Science','BCA Data Science','BBA Business Administration','Department of Commerce','MBA Business Administration','Department of Mathematics','Department of Physics'],
      'Medical Health Science': 
        ['Bachelor of Physiotherapy','Bachelor of Occupational Therapy','Master of Physiotherapy'],
      'Institute of Hotel Management': 
        ['B.Sc Hotel And Catering Management','Diploma in Hotel Management And Catering Science'],
      'Allied Health Sciences': 
        [],
    },

    'Ghaziabad Campus':{
      'Faculty of Engineering & Technology': 
        ['Computer Science and Engineering','Computer Science and Engineering (CSE) ','Electronics and Communication Engineering','Mechanical Engineering','Electrical and Electronics Engineering','Automobile Engineering',],
      'Faculty of Science & Humanities': 
        ['Computer Application','Hotel management'],
      'Faculty of Management': 
        ['Bachelor of Business Administration (BBA)','Master of Business Administration (MBA)'],
       'Faculty of Medicine & Health Science': 
        ['Department of Pharmacy'],
     },

     'Acharapakkam Campus': {
    'Faculity of Horticulture':
      ['Department of Fruit Science','Department of Vegetable Science','Department of Floriculture and Landscaping Architecture','Department of Post Harvest and Technology','Department of Plant Protection','Department of Basic Sciences','Department of Natural Resources Management','Department of Social Sciences' ],
      'Faculity of Agriculture':
      ['Department Of Agronomy','Department Of Agricultural Economics','Department Of Agricultural Extension Education','Department Of Entomology','Department Of Genetics And Plant Breeding','Department Of Horticulture','Department Of Soil Science Agricultural Chemistry','Department Of Plant Pathology','Section Of Animal Sciences','Section Of Agriculture Engineering','Section Of Biochemistry And Crop Physiology',],
     },
  };

  const campuses = ['Kattankulathur Campus', 'Ramapuram Campus', 'Vadapalani Campus', 'Trichy Campus', 'Ghaziabad Campus', 'Acharapakkam Campus'];
  const [selectedCampuses, setSelectedCampuses] = useState([]);
  const [selectedFaculties, setSelectedFaculties] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [questions, setQuestions] = useState([]);

  const navigate = useNavigate();

  const addFeedback = (feedback) => {
    setFeedbacks([...feedbacks, feedback]);
  };

  const updateFeedbacks = (updatedFeedbacks) => {
    setFeedbacks(updatedFeedbacks);
  };

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const filteredFaculties = [...new Set(selectedCampuses.flatMap(campus => campusFaculties[campus] || []))];
  const filteredDepartments = [...new Set(selectedFaculties.flatMap(faculty => selectedCampuses.flatMap(campus => (campusDepartments[campus] && campusDepartments[campus][faculty]) || [])))];


  const handleSubmit = () => {
    navigate('/feedback-display'); // Navigate to the feedback display page
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar
        campuses={campuses}
        selectedCampuses={selectedCampuses}
        setSelectedCampuses={setSelectedCampuses}
        faculties={filteredFaculties}
        selectedFaculties={selectedFaculties}
        setSelectedFaculties={setSelectedFaculties}
        departments={filteredDepartments}
        selectedDepartments={selectedDepartments}
        setSelectedDepartments={setSelectedDepartments}
      />
      <div className="flex-1">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackList feedbacks={feedbacks} updateFeedbacks={updateFeedbacks} />
        {/* <button onClick={handleSubmit} className="mt-4 p-2 bg-blue-500 text-white">Submit Feedback List</button> */}
      </div>
    </div>
  );
};

export default Dashboard2;