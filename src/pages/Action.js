import React ,{useEffect}from 'react';
import './Action.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Action = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, []);

    return (
        <>
            <section id='Action'>
                <div className='Action_bg'>
                <div className='container' data-aos="zoom-in">
                    <div className='row'>
                        <div className='col-sm-9'>
                            <div className='ActionContent'>
                                <h3>Call To Action</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className='col-sm-3 d-flex align-items-center'>
                            <div className='text-center '>
                                <a href='#' className='ActionBtn'>Call To Action</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Action
