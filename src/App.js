import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './component/Home';
import Courses from './Pages/Courses';
import Student from './Pages/Student';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/our-courses' element={<Courses/>}/>
        <Route path='/our-student' element={<Student/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
       </Routes>
       <Footer/>
    </Router>
  )
}

export default App