import React,{useEffect} from 'react'
import './About.scss'
import { IoCheckmarkDone } from 'react-icons/io5';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Aboutus = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 ,  once: true,})
  },[]);

  return (
    <>
      <section id='About'>
        <div className='container' data-aos="fade-up">
          <div className='row'>
            <div className='About_Header'>
              <h2>ABOUT US</h2>
            </div>
            <div className='col-sm-6'>
              <div className='leftPart'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul>
                  <li><IoCheckmarkDone className='checkIcon' />Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                  <li><IoCheckmarkDone className='checkIcon' />Duis aute irure dolor in reprehenderit in voluptate velit</li>
                  <li><IoCheckmarkDone className='checkIcon' />Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                </ul>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='rightPart'>
                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.</p>
                  <a href='#' className='LearnBtn'>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutus
