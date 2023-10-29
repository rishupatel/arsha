import React,{useEffect} from 'react'
import './Accordian.scss'
import image from '../Images/whyus.png';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Accordian = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
       
    };

    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, []);

    return (
        <>
            <section id='Accordian'>
                <div className='container-fluid' data-aos="fade-up">
                    <div className='row'>
                        <div className='col-sm-7'>
                            <div className='leftPart'>
                                <h1>Eum ipsam laborum deleniti <b>velit pariatur architecto aut nihil</b></h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>

                                <div className='mt-2'>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <div className='summarry'>
                                                <h2><span>01.</span> Non consectetur a erat nam at lectus urna duis? </h2>

                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='details'>
                                                <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <div className='summarry'>
                                                <h2><span>02.</span>  Feugiat scelerisque varius morbi enim nunc?  </h2>

                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='details'>
                                                <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3bh-content"
                                            id="panel3bh-header"
                                        >
                                            <div className='summarry'>
                                                <h2><span>03.</span>  Dolor sit amet consectetur adipiscing elit? </h2>

                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <div className='details'>
                                                <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                   
                                  

                                </div>


                            </div>
                        </div>
                        <div className='col-sm-5' >
                            <div className='rightPart ' data-aos="zoom-in">
                                <img src={image} className="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Accordian
