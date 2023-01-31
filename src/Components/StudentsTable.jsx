import React, { useContext } from 'react'
import Data from './DataContext';
import { Link } from 'react-router-dom';

const StudentsTable = () => {
    const context = useContext(Data).entries;

    return (
        <div>
            <table width='100%'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Edit Info</th>
                    </tr>

                </thead>
                <tbody>
                    {/* <tr>
         <td>Ajay</td>
          <td>22</td>
          <td>Full Stack</td>
          <td>EA18</td>
          <td>Edit</td>
          </tr>
          <td>Deepak</td>
          <td>22</td>
          <td>BBA</td>
          <td>2019</td> */}

                    {context.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.course}</td>
                                <td>{item.batch}</td>
                                <td>
                                    <Link to='/editstudent' state={{ data: index }}>Edit</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentsTable