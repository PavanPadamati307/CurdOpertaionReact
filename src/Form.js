import {useState } from "react";

function Form(props) {

    const[studentData, setStudentData] = useState(props.data);

    let ChangeFormData=(event)=>{
        const {name,value}  =  event.target;
        setStudentData({...studentData,[name]:value});
    }
    return (
        <div className="form-overlay">
        <form>
            <div className="form-group">
                <label>Name:</label>
                <input className="form-control mt-2" value={studentData.studentName} type="text" name="studentName" placeholder="student name" onChange={ChangeFormData}></input>

            </div>
            <div className="form-group">
                <label>Email:</label>
                <input className="form-control mt-2" value={studentData.studentEmailAddress} type="text" name="studentEmailAddress" placeholder="student Email" onChange={ChangeFormData}></input>

            </div>
            <div className="form-group">
                <label>Address:</label>
                <input className="form-control mt-2" value={studentData.studentAdddress} type="text" name="studentAdddress" placeholder="student Address" onChange={ChangeFormData}></input>

            </div>
            <button className="btn btn-primary float-end" onClick={(e)=>{
                e.preventDefault()
                props.saveData(studentData);
            }}>Save</button>
            <button className="btn btn-danger flloat-end" onClick={(e)=>{
                e.preventDefault()
                props.close();
            }}>Cancel</button>
        </form>
        </div>
    )

}

export default Form;