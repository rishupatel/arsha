import React, { useEffect } from 'react';
import './Team.scss';
import image1 from '../Images/team1.jpg';
import image2 from '../Images/team2.jpg';
import image3 from '../Images/team3.jpg';
import image4 from '../Images/team4.jpg';
import { BiLogoTwitter, BiLogoFacebook, BiLogoInstagramAlt } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Team = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);
    return (
        <>
            <section id='Team'>
                <div className='container' data-aos="fade-up">
                    <div className='Team_header'>
                        <h2>TEAM</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className='row mb-4'>
                        <div className='col-sm-6'>
                            <div className='card' data-aos="zoom-in">
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <img src={image1} className="teamImg" />
                                    </div>
                                    <div className='col-sm-8'>
                                        <div className='member_info'>
                                            <h2>Walter White</h2>
                                            <h5>Chief Executive Officer</h5>
                                            <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                        </div>
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
                        <div className='col-sm-6'>
                            <div className='card' data-aos="zoom-in">
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <img src={image2} className="teamImg" />
                                    </div>
                                    <div className='col-sm-8'>
                                        <div className='member_info'>
                                            <h2>Sarah Jhonson</h2>
                                            <h5>Product Manager</h5>
                                            <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                        </div>
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
                    </div>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='card' data-aos="zoom-in">
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <img src={image3} className="teamImg" />
                                    </div>
                                    <div className='col-sm-8'>
                                        <div className='member_info'>
                                            <h2>William Anderson</h2>
                                            <h5>CTO</h5>
                                            <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                        </div>
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
                        <div className='col-sm-6'>
                            <div className='card' data-aos="zoom-in">
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <img src={image4} className="teamImg" />
                                    </div>
                                    <div className='col-sm-8'>
                                        <div className='member_info'>
                                            <h2>Amanda Jepson</h2>
                                            <h5>Accountant</h5>
                                            <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                        </div>
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
