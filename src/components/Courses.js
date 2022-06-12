import React, {useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getAllCourses } from "../services/CourseService"

export default function Courses() {
    const [courseData, setCourseData] = useState([])
  
    useEffect(()=>{
        getAllCourses()
        .then(res=>{
          console.log(res.data);
          setCourseData(res.data)
        })
        .catch(err=> console.log(err));


     },[]);
    

  return (
    <>
    <div className='container row mt-4'>
        <h2 className='text-center mb-4'>About our course</h2>
        {courseData?.map((data)=>
        <div className='col-md-4' key={data.id}>
            <div className="card mb-4" >
                
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.description}</p>
                    <Link to={`/add-user/${data.id}`}  className="btn btn-primary">Enquiry</Link>
                </div>
            </div>
        </div>)}
    </div>
    </>
  )
}
