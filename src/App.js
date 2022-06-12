import React from 'react'
import Nav from './components/Nav'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Courses from './components/Courses';
import AddUser from './components/AddUser';
import Users from './components/Users';

export default function App() {
  return (
    <main>
      <Router>
        <Nav/>
          <section className='container'>
           <Routes>
              <Route path='/' element={<Courses/>} />
              <Route path="/add-user/:id" element={<AddUser/>} />
              <Route path="/users" element={<Users/>} />
           </Routes>
          </section>
      </Router>
    </main>
  
  )
}
