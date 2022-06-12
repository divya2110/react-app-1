import axios from "axios";
const APIURL="http://localhost:3001/courses/";

function getAllCourses(){
    return axios.get(APIURL);
}


export {getAllCourses};