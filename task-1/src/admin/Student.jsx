import React from 'react'
import { Link } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';

import Newstudent from './Newstudent'
function Student() {
  return (
    <div>
       <Routes>
       <Route path='newstudent' element={<Newstudent />}/>
       </Routes>
    </div>
  )
}

export default Student
