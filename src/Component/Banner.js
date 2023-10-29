import React from 'react'
import './Banner.scss'
import { ImPlay2 } from 'react-icons/im';
import bannerImg from '../Images/heroimg.png'
import client1 from '../Images/client1.png'
import client2 from '../Images/client2.png'
import client3 from '../Images/client3.png'
import client4 from '../Images/client4.png'
import client5 from '../Images/client5.png'
import client6 from '../Images/client6.png'
const Banner = () => {
  return (
    <>
      <section id='Banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <div className='leftPart'>
              <h1>Better Solutions For Your Business</h1>
              <p>We are team of talented designers making websites with Bootstrap</p>
              <a href='#' className='gettingStartedBtn'>get started</a>
              <a href='#' className='video  align-items-center'> 
              <ImPlay2 className="videoIcon"/>
              <span> Watch Video</span></a>
              </div>
            </div>
            <div className='col-sm-6'>
           <img src={bannerImg} className="bannerImg"/>
            </div>
          </div>
        </div>
      </section>
      <section id='logo'>
<div className='container'  data-aos="zoom-in">
  <div className='row'>
    <div className='col-sm-2 '>
     <img src={client1} className="logoImg"/>
    </div>
    <div className='col-sm-2 '>
     <img src={client2} className="logoImg"/>
    </div>
    <div className='col-sm-2 '>
     <img src={client3} className="logoImg"/>
    </div>
    <div className='col-sm-2 '>
     <img src={client4} className="logoImg"/>
    </div>
    <div className='col-sm-2 '>
     <img src={client5} className="logoImg"/>
    </div>
    <div className='col-sm-2 '>
     <img src={client6} className="logoImg"/>
    </div>
  </div>
</div>
      </section>
      
    </>
  )
}

export default Banner
