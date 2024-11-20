import axios from "axios";

const url ="http://localhost:8080/api";
 export async function getData (){
    return await axios.get(url+"/getStudent");
}

export async function saveData (data){
    return await axios.post(url+"/saveStudent", data,{
        headers:{
            "Content-Type":'application/json'
        }
    });
}


    export async function deleteStudentData(id){
        console.log("in api delete function")
        return await axios.delete(url+"/deleteStudent/"+id);
    }

    export async function updateData (id,data){
        return await axios.put(url+"/updateStudent/"+id, data,{
            headers:{
                "Content-Type":'application/json'
            }
        });
    }



