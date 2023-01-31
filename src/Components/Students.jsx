import React from 'react'
import { Link, } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import { useContext } from 'react'
// import  Data from "./DataContext";
import StudentsTable from './StudentsTable';

const Students = () => {
  // const navigate=useNavigate();
  // let context=useContext(Data);
  // console.log(context)
  return (
    <div>
      <span id='heading'>Students Details</span>
      <Link to='/addnewstudent'>
        <button id='ansbtn'>Add New Student</button>
      </Link>
      
      <StudentsTable />

    </div>
  )
}

export default Students