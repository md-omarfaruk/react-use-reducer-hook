import React from 'react';
import './AdmittedStudents.css';

const AdmittedStudents = (props) => {
    const {studentName, fatherName, motherName, rollNumber} = props.student
    return (
        <div className='studentDetails'>
            <h1>Student Details</h1>
            <h2>Student Name: {studentName}</h2>
            <h4>Father Name: {fatherName}</h4>
            <h4>Mother name:{motherName}</h4>
            <h6>Student now admitted and his student id is: {rollNumber}</h6>
        </div>
    );
};

export default AdmittedStudents;