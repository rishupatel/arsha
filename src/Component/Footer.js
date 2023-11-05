import React from 'react'
import './Footer.scss'
import { HiMiniChevronRight } from 'react-icons/hi2';
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <section id='Footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-3'>
                            <div className='firstPart'>
                                <h4>ARSHA</h4>
                                <p>A108 Adam Street<br />
                                    New York, NY 535022<br />
                                    United States
                                    <br /><br />
                                    <strong>Phone:</strong>+1 5589 55488 55<br />
                                    <strong>Email:</strong>info@example.com<br />
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <h4  className='heading'>Useful Links</h4>
                            <ul className='Useful_Links'>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Home</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >About us</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Services</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Terms of service</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <h4 className='heading'>Our Services</h4>
                            <ul className='Our_Services'>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Web Design</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Web Development</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Product Management</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Marketing</a></li>
                                <li><HiMiniChevronRight className='chevron_right' /><a href='#' >Graphic Design</a></li>
                            </ul>
                        </div>
                        <div className='col-sm-3'>
                            <div className='social_networks'>
                                <h4>Our Social Networks</h4>
                                <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                <div className='social_media_icons'>
                                            <ul>
                                                <li><a href='#'><BiLogoTwitter className='icon' /></a></li>
                                                <li><a href='#'><BiLogoFacebook className='icon' /></a></li>
                                                <li><a href='#'><BiLogoInstagramAlt className='icon' /></a></li>
                                                <li><a href='#'><AiFillLinkedin className='icon' /></a></li>
                                            </ul>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
