import React, { useState } from 'react';

const Sidebar = ({
  campuses,
  selectedCampuses,
  setSelectedCampuses,
  faculties,
  selectedFaculties,
  setSelectedFaculties,
  departments,
  selectedDepartments,
  setSelectedDepartments,
}) => {
  const [campusDropdownVisible, setCampusDropdownVisible] = useState(false);
  const [facultyDropdownVisible, setFacultyDropdownVisible] = useState(false);
  const [departmentDropdownVisible, setDepartmentDropdownVisible] = useState(false);

  const [campusSearch, setCampusSearch] = useState('');
  const [facultySearch, setFacultySearch] = useState('');
  const [departmentSearch, setDepartmentSearch] = useState('');

  const handleCampusChange = (campus) => {
    setSelectedCampuses((prevSelected) =>
      prevSelected.includes(campus)
        ? prevSelected.filter((c) => c !== campus)
        : [...prevSelected, campus]
    );
  };

  const handleFacultyChange = (faculty) => {
    setSelectedFaculties((prevSelected) =>
      prevSelected.includes(faculty)
        ? prevSelected.filter((f) => f !== faculty)
        : [...prevSelected, faculty]
    );
  };

  const handleDepartmentChange = (department) => {
    setSelectedDepartments((prevSelected) =>
      prevSelected.includes(department)
        ? prevSelected.filter((d) => d !== department)
        : [...prevSelected, department]
    );
  };

  const handleSelectAllCampuses = (e) => {
    setSelectedCampuses(e.target.checked ? campuses : []);
  };

  const handleSelectAllFaculties = (e) => {
    setSelectedFaculties(e.target.checked ? faculties : []);
  };

  const handleSelectAllDepartments = (e) => {
    setSelectedDepartments(e.target.checked ? departments : []);
  };

  const removeSelectedCampus = (campus) => {
    setSelectedCampuses((prevSelected) => prevSelected.filter((c) => c !== campus));
  };

  const removeSelectedFaculty = (faculty) => {
    setSelectedFaculties((prevSelected) => prevSelected.filter((f) => f !== faculty));
  };

  const removeSelectedDepartment = (department) => {
    setSelectedDepartments((prevSelected) => prevSelected.filter((d) => d !== department));
  };

  return (
    <div className="w-64 text-black border-r-4 p-6">
      <div className="mb-4">
        <button
          id="dropdownSearchButton"
          onClick={() => setCampusDropdownVisible(!campusDropdownVisible)}
          className="border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Select Campuses
          <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <br></br>
        <br></br>
        <div className="mb-4">
        <h4 className="text-sm  font-medium text-gray-700">Selected Campuses:</h4>
        {selectedCampuses.map((campus, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            onClick={() => removeSelectedCampus(campus)}
          >
            {campus}
          </span>
        ))}
      </div>
        
        {campusDropdownVisible && (
          <div id="dropdownSearch" className="z-10 bg- rounded-none w-56 mt-1">
            <div className="p-3">
              <label htmlFor="campus-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  id="campus-search"
                  value={campusSearch}
                  onChange={(e) => setCampusSearch(e.target.value)}
                  className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-400 dark:placeholder-gray-400"
                  placeholder="Search campus"
                />
                
              </div>
              
            </div>
            <div className="p-3">
              <input
                type="checkbox"
                id="select-all-campuses"
                onChange={handleSelectAllCampuses}
                className="w-4 h-4 bg-gray-100 hover:bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label htmlFor="select-all-campuses" className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-600">Select All</label>
            </div>
            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-600 dark:text-gray-200">
              {campuses.filter(campus => campus.toLowerCase().includes(campusSearch.toLowerCase())).map((campus, index) => (
                <li key={index}>
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100">
                    <input
                      id={`campus-${index}`}
                      type="checkbox"
                      checked={selectedCampuses.includes(campus)}
                      onChange={() => handleCampusChange(campus)}
                      className="w-4 h-4 bg-gray-100 hover:bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label htmlFor={`campus-${index}`} className="w-full py-2 ml-2 text-sm font-medium rounded dark:text-gray-600">{campus}</label>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-3">
              <button
                onClick={() => setCampusDropdownVisible(false)}
                className="w-full bg-blue-400 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mb-4">
        <button
          id="dropdownSearchButton"
          onClick={() => setFacultyDropdownVisible(!facultyDropdownVisible)}
          className="border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Select Faculties
          <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <br></br>
        <br></br>
        <div className="mb-2">
        <h4 className="text-sm font-medium text-gray-700">Selected Faculties:</h4>
        {selectedFaculties.map((faculty, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            onClick={() => removeSelectedFaculty(faculty)}
          >
            {faculty}
          </span>
        ))}
      </div>
        {facultyDropdownVisible && (
          <div id="dropdownSearch" className="z-10 h- rounded-none w-56 mt-1">
            <div className="p-3">
              <label htmlFor="faculty-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  id="faculty-search"
                  value={facultySearch}
                  onChange={(e) => setFacultySearch(e.target.value)}
                  className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-400 dark:placeholder-gray-400"
                  placeholder="Search faculty"
                />
              </div>
            </div>
            <div className="p-3">
              <input
                type="checkbox"
                id="select-all-faculties"
                onChange={handleSelectAllFaculties}
                className="w-4 h-4 bg-gray-100 hover:bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label htmlFor="select-all-faculties" className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-600">Select All</label>
            </div>
            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-600 dark:text-gray-200">
              {faculties.filter(faculty => faculty.toLowerCase().includes(facultySearch.toLowerCase())).map((faculty, index) => (
                <li key={index}>
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100">
                    <input
                      id={`faculty-${index}`}
                      type="checkbox"
                      checked={selectedFaculties.includes(faculty)}
                      onChange={() => handleFacultyChange(faculty)}
                      className="w-4 h-4 bg-gray-100 hover:bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label htmlFor={`faculty-${index}`} className="w-full py-2 ml-2 text-sm font-medium rounded dark:text-gray-600">{faculty}</label>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-3">
              <button
                onClick={() => setFacultyDropdownVisible(false)}
                className="w-full bg-blue-400 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

     

      <div className="mb-4">
        <button
          id="dropdownSearchButton"
          onClick={() => setDepartmentDropdownVisible(!departmentDropdownVisible)}
          className="border focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          Select Departments
          <svg className="w-2.5 h-2.5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <br></br>
        <br></br>
        <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700">Selected Departments:</h4>
        {selectedDepartments.map((department, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded"
            onClick={() => removeSelectedDepartment(department)}
          >
            {department}
          </span>
        ))}
      </div>

        {departmentDropdownVisible && (
          <div id="dropdownSearch" className="z-10 bg-white rounded-none w-56 mt-1">
            <div className="p-3">
              <label htmlFor="department-search" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input
                  type="text"
                  id="department-search"
                  value={departmentSearch}
                  onChange={(e) => setDepartmentSearch(e.target.value)}
                  className="block w-full p-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:border-gray-400 dark:placeholder-gray-400"
                  placeholder="Search department"
                />
              </div>
            </div>
            <div className="p-3">
              <input
                type="checkbox"
                id="select-all-departments"
                onChange={handleSelectAllDepartments}
                className="w-4 h-4 bg-gray-100 hover:bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
              />
              <label htmlFor="select-all-departments" className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-600">Select All</label>
            </div>
            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-600 dark:text-gray-200">
              {departments.filter(department => department.toLowerCase().includes(departmentSearch.toLowerCase())).map((department, index) => (
                <li key={index}>
                  <div className="flex items-center pl-2 rounded hover:bg-gray-100">
                    <input
                      id={`department-${index}`}
                      type="checkbox"
                      checked={selectedDepartments.includes(department)}
                      onChange={() => handleDepartmentChange(department)}
                      className="w-4 h-4 bg-gray-100 hover:bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    />
                    <label htmlFor={`department-${index}`} className="w-full py-2 ml-2 text-sm font-medium rounded dark:text-gray-600">{department}</label>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-3">
              <button
                onClick={() => setDepartmentDropdownVisible(false)}
                className="w-full bg-blue-400 hover:bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Sidebar;
