import React, { useEffect } from 'react';
import { FiDribbble, FiFileText } from 'react-icons/fi';
import { BiTachometer, BiLayer } from 'react-icons/bi';
import './Service.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Service = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);

  return (
    <>
      <section id='Service'  >
        <div className='container ' data-aos="fade-up">
          <div className='row'>
            <div className='Service_header'>
              <h2>SERVICES</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='col-sm-3'>
              <div className='card'  data-aos="zoom-in">
                <FiDribbble className='icon' />
                <h4>Lorem Ipsum</h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'  data-aos="zoom-in">
                <FiFileText className='icon' />
                <h4>Sed ut perspici</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'  data-aos="zoom-in">
                <BiTachometer className='icon' />
                <h4>Magni Dolores</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card'  data-aos="zoom-in">

                <BiLayer className='icon' />
                <h4>Nemo Enim</h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service
