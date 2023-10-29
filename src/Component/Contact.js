import React,{useEffect} from 'react'
import './Contact.scss'
import { IoLocationOutline } from 'react-icons/io5';
import { TfiEmail } from 'react-icons/tfi';
import { BsPhone } from 'react-icons/bs';
import GoogleMapReact from 'google-map-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Paper from '@mui/material/Paper';


const Contact = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);
    return (
        <>
            <section id='Contact'>
                <div className='container' data-aos="fade-up">
                    <div className='Contact_header'>
                        <h2>CONTACT</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className='row'>
                        <div className='col-sm-5'>
                            <div className='info'>

                                <div className='address'>
                                    <span> <IoLocationOutline className='location_icon' /></span>
                                    <h3>Location:</h3>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className='Email'>
                                    <span> <TfiEmail className='Email_icon' /></span>
                                    <h3>Email:</h3>
                                    <p>info@example.com</p>
                                </div>

                                <div className='phone'>
                                    <span> <BsPhone className='phone_icon' /></span>
                                    <h3>Call:</h3>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                                <div className='map'>
                                    {/* style="width: 100%" */}
                                <div >
                                    <iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20Delhi%20,India+(download%20Conference%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                    <a href="https://www.maps.ie/population/">Population calculator map</a>
                                    </iframe>
                                </div>
                                      
                                </div>
                            </div>
                        </div>
                   
                        <div className='col-sm-7 p-0'>
                        <Paper elevation={3} >
                            <div className="form mt-4">
                                <div class="row mb-4">
                                    <div class="col">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control "  id="name" />
                                    </div>
                                    <div class="col">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="text" class="form-control "  id='email' />
                                    </div>
                                </div>
                                <div class="row mb-4">
                                    <div class="col">
                                        <label for="subject" class="form-label">Subject</label>
                                        <input type="text" class="form-control "  id="subject" />
                                    </div>

                                </div>
                                <div class="mb-4">
                                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                                </div>
                                <div className='button'>
                                    <a href='#'>Send Message</a>
                                </div>
                            </div>
                            </Paper>
                        </div>
                      
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
