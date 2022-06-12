import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { addUser } from '../services/UserService';

export default function AddUser() {

  const {id}=useParams();
  const [state,setState]=useState({course_id:'',name:'',email:'',mobile:'',description:''});
  const navigate=useNavigate();
  const handler=(event)=>{
   const {name,value}=event.target;
   setState({...state,[name]:value});
  }


  const userData=(event)=>{
         event.preventDefault();

         const courseId = document.getElementById('course_id').value
         console.log(courseId)
         setState({...state,course_id:courseId});
         console.log(state)

         addUser(state)
         .then(res=>{
             if(res.data){
                 alert("Details added successfully!");
                 navigate("/");
             }
         })
         .catch(err=> console.log(err))
  }

  return (
    <div className='container row mt-4'>
        <h2 className='text-center mb-4'>Add Details</h2>
        <form onSubmit={userData}>

          <input type="hidden" name='course_id' id='course_id' value={id}/>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='name' id="name" placeholder="Enter full name" onChange={handler}/>
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" name='email' id="email" placeholder="Enter email address" onChange={handler}/>
            <label htmlFor="email">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='mobile' id="mobile" placeholder="Enter mobile number" onChange={handler}/>
            <label htmlFor="mobile">Mobile</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" name='description' id="description" onChange={handler}></textarea>
            <label htmlFor="description">Description</label>
          </div>
          <div className="col-12">
            <input className='btn btn-primary' type="submit" value="Submit" />
          </div>
        </form>
    </div>
  )
}
