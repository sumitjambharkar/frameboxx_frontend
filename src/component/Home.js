import React from 'react'
import Banner from './Banner'
import Student from '../Pages/Student'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Courses from '../Pages/Courses'

const Home = () => {
  return (
    <div>
      <Banner/>
       <Courses/>
       <About/>
       <Student/>
       <Contact/>
    </div>
  )
}

export default Home