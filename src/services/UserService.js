import axios from "axios";
const APIURL="  http://localhost:3001/users/";

function getAllUsers(){
    return axios.get(APIURL);
}
function addUser(data){
    return axios.post(APIURL,data);
}

export {getAllUsers, addUser};