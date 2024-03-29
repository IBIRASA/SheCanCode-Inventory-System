
import React, { useEffect } from 'react'
import '../styles/dashbaord.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos'

import 'aos/dist/aos.css'
function Contents() {
  useEffect(()=>{
    AOS.init({duration:2000})
},
[])
  return (
    <div className='content--header flex flex-row  shadow-md'>
      <h1 className='header--title  delay-[300ms] duration-[600ms]    ml-12  mb-8 mt-8  text-gray-900  font-bold'  data-aos="fade-down">Dashboard-Admin</h1>
   
     
      </div>
  );
}

export default Contents;
