import React, { useReducer, useRef } from 'react';
import AdmittedStudents from '../AdmittedStudents/AdmittedStudents';

const initialStudents = {students: []};

const studentAdmissionFormReducer = (state, action) => {
    switch (action.type){
        case 'NEW_ADMITTED_STUDENT':
            const newAdmittedStudent = {
                studentName: action.studentName,
                fatherName: action.fatherName, 
                motherName: action.motherName,                
                rollNumber: action.rollNumber,
            }
            const allStudents = [...state.students, newAdmittedStudent];
            return {students: allStudents};

            default: return state;
    }
}

const StudentAdmissionManager = () => {

    const [state, dispatch] = useReducer(studentAdmissionFormReducer, initialStudents);
    const studentName = useRef();
    const fatherName = useRef();
    const motherName = useRef();
    const rollNumber = useRef();


    const handleStudentAdmissionForm = (event) =>{
        event.preventDefault();

        dispatch({type:'NEW_ADMITTED_STUDENT',
                    studentName: studentName.current.value,                
                    fatherName: fatherName.current.value,                
                    motherName: motherName.current.value,                
                    rollNumber: rollNumber.current.value,                
    })
            studentName.current.value = '';
        console.log(studentName.current.value)
    }

    return (
        <div>
            <h1>Total students: {state.students.length}</h1>
            <form onSubmit={handleStudentAdmissionForm}>
                <input type="text" ref={studentName} placeholder="Student Name" /><br />
                <input type="text" ref={fatherName} placeholder="Father Name" /><br />
                <input type="text" ref={motherName} placeholder="Mother Name" /><br />
                <input type="number" ref={rollNumber} placeholder="Student Id" /><br />
                <input type="submit" value="Admit" />
            </form>
            <br />
            <br />
            <br />

            {
                state.students.map(student => <AdmittedStudents student = {student} key = {student.rollNumber}></AdmittedStudents>)
            }
        </div>
    );
};

export default StudentAdmissionManager;