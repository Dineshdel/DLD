import logo from './logo.svg';
import React from 'react';
import './App.css';
import Login from './components/Login'
import Create from './components/Create'
import Dashboard from './admin/Dashboard';
import { Routes,Route } from 'react-router-dom';
import Facuilty from './admin/Faculty' 
import About from './admin/About';
import Dashboard2 from './feedback/Dashboard2';
import FeedbackDisplay from './feedback/FeedbackDisplay';
// import { AllFeedback } from './feedback/allQuestions';

function App() {
  return (
    <div>
      {/* <>  <Dashboard2 /></> */}
      
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/create' element={<Create />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/Faacuilty' element={<Facuilty />}/>
        {/* <Route path='/student' element={<Student />}/> */}
        {/* <Route path='/feedbackadd' element={<FeedbackAdd />}/> */}
        <Route path='/about' element={<About />}/>
        <Route path='/dashboard2' element={<Dashboard2 />}/>
        <Route path="/feedbackdisplay" element={<FeedbackDisplay />} />
        {/* <Route path='/all/feedbacks' element={<AllFeedback />} /> */}
      </Routes>
    </div>
    
  );
}

export default App;
