import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Aboutus from './Aboutus'
import Accordian from './Accordian'
import Progressbar from './Progressbar'
import Service from './Service'
import Action from './Action'
import Portfolio from './Portfolio'
import Team from './Team'
import Pricing from './Pricing'
import Question from './Question'
import Contact from './Contact'
import Footer from './Footer'
import NewsShelter from './NewsShelter'
import SubFooter from './SubFooter'


const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Aboutus />
      <Accordian />
      <Progressbar />
      <Service />
      <Action />
      <Portfolio />
      <Team />
      <Pricing />
      <Question />
      <Contact />
       <NewsShelter/>
      <Footer/>
     
      <SubFooter/>
    </>
  )
}

export default Home
