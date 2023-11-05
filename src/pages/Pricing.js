import React,{useEffect} from 'react';
import './Pricing.scss';
import { BsCheckLg } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Pricing = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, []);

    return (
        <>
            <section id='Pricing'>
                <div className='container'  data-aos="fade-up">
                    <div className='Pricing_header'>
                        <h2>PRICING</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='card'  data-aos="fade-up">
                                <div className='card_content '>
                                    <h5>Free Plan</h5>
                                    <h2><span><sup>$</sup></span>0</h2>
                                    <span className='month'>per month</span>
                                    <ul className='text-left'>
                                        <li><BsCheckLg className='check' />Quam adipiscing vitae proin</li>
                                        <li><BsCheckLg className='check' />Nec feugiat nisl pretium</li>
                                        <li><BsCheckLg className='check' />Nulla at volutpat diam uteera</li>
                                        <li><IoCloseOutline className='check2' /><span>Pharetra massa massa ultricies</span></li>
                                        <li><IoCloseOutline className='check2' /><span>Massa ultricies mi quis hendrerit</span></li>

                                    </ul>
                                    <a href='#' className='GetStartedBtn'>Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4'> <div className='card'  data-aos="fade-up">
                            <div className='card_content '>
                                <h5>Business Plan</h5>
                                <h2><span><sup>$</sup></span>29</h2>
                                <span className='month'>per month</span>
                                <ul className='text-left'>
                                    <li><BsCheckLg className='check' />Quam adipiscing vitae proin</li>
                                    <li><BsCheckLg className='check' />Nec feugiat nisl pretium</li>
                                    <li><BsCheckLg className='check' />Nulla at volutpat diam uteera</li>
                                    <li><BsCheckLg className='check' />Pharetra massa massa ultricies</li>
                                    <li><BsCheckLg className='check' />Massa ultricies mi quis hendrerit</li>

                                </ul>
                                <a href='#' className='GetStartedBtn'>Get Started</a>
                            </div>
                        </div></div>
                        <div className='col-sm-4'> <div className='card'  data-aos="fade-up">
                            <div className='card_content '>
                                <h5>Developer Plan</h5>
                                <h2><span><sup>$</sup></span>49</h2>
                                <span className='month'>per month</span>
                                <ul className='text-left'>
                                    <li><BsCheckLg className='check' />Quam adipiscing vitae proin</li>
                                    <li><BsCheckLg className='check' />Nec feugiat nisl pretium</li>
                                    <li><BsCheckLg className='check' />Nulla at volutpat diam uteera</li>
                                    <li><BsCheckLg className='check' />Pharetra massa massa ultricies</li>
                                    <li><BsCheckLg className='check' />Massa ultricies mi quis hendrerit</li>

                                </ul>
                                <a href='#' className='GetStartedBtn'>Get Started</a>
                            </div>
                        </div></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing
