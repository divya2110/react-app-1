import React, {useEffect, useState} from 'react'
import { getAllUsers } from '../services/UserService'

export default function Users() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    getAllUsers()
    .then(res=>{
      console.log(res.data)
      setUserData(res.data)
    })
    .catch(err=>console.log(err))
  }, [])
  

  return (
    <div className='container row mt-4'>
        <h2 className='text-center mb-4'>Enquiry Data</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
          {userData?.map((data)=>
        
            <tr key={data.id}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.description}</td>
            </tr>
          )}
          </tbody>
        </table>
        
    </div>
  )
}
