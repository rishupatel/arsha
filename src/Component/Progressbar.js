import React,{useEffect} from 'react'
import { styled } from '@mui/material/styles';
import './Progressbar.scss'
import img from '../Images/skills.png';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Progressbar = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, []);

    return (
        <>
            <section id='Progressbar'>
                <div className='container'  data-aos="fade-up">
                    <div className='row'>
                        <div className='col-sm-6' data-aos="fade-right">
                            <img src={img} className="image" />
                        </div>
                        <div className='col-sm-6' data-aos="fade-left">
                            <div className='rightSide'>
                                <h2>Voluptatem dignissimos provident quasi corporis voluptates</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <div className='progress'>
                                    <span className='skill'>HTML <i class="val">100%</i></span>
                                   <div className='linear'>
                                     <LinearProgress variant="determinate"  value={100} />
                                </div>
                                </div>
                                <div className='progress'>
                                    <span className='skill'>CSS <i class="val">90%</i></span>
                                   <div className='linear'>
                                     <LinearProgress variant="determinate"  value={90} />
                                </div>
                                </div>
                                <div className='progress'>
                                    <span className='skill'>JAVASCRIPT <i class="val">75%</i></span>
                                   <div className='linear'>
                                     <LinearProgress variant="determinate"  value={75} />
                                </div>
                                </div>
                                <div className='progress'>
                                    <span className='skill'>JAVA <i class="val">60%</i></span>
                                   <div className='linear'>
                                     <LinearProgress variant="determinate"  value={60} />
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Progressbar
