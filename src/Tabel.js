function Table(props){
    console.log(props.studentData)
    return (
        <table className="tabel m-3">

            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.studentData.map(
                        (data)=>
                            
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.studentName}</td>
                                <td>{data.studentAdddress}</td>
                                <td>{data.studentEmailAddress}</td>
                                <td>
                                    <button className="btn btn-primary m-1" onClick={()=>{
                                        props.deleteStudentData(data.id)
                                    }}
                                    >Delete</button>
                                    <button className="btn btn-danger m-1" onClick={()=>{
                                        props.editStudentData(data)
                                    }} >Edit</button>
                                </td>
                            </tr>
                        
                    )
                }
            </tbody>

        </table>
    )



}

export default Table;