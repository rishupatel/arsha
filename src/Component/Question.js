import React,{useEffect} from 'react'
import './Question.scss'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BiHelpCircle } from 'react-icons/bi';
import AOS from 'aos'
import 'aos/dist/aos.css'


const Question = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    };
    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, []);


    return (
        <>
            <section id='Question'>
                <div className='container' data-aos="fade-up">
                    <div className='row'>
                        <div className='Question_header'>
                            <h2>FREQUENTLY ASKED QUESTIONS</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className='col-sm-12'>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <div className='summarry'>
                                        <h2><span><BiHelpCircle className='icon'/></span> Non consectetur a erat nam at lectus urna duis? </h2>

                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='details'>
                                        <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <div className='summarry'>
                                        <h2><span><BiHelpCircle className='icon'/></span>Feugiat scelerisque varius morbi enim nunc?  </h2>

                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='details'>
                                        <p>Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <div className='summarry'>
                                        <h2><span><BiHelpCircle className='icon'/></span>Dolor sit amet consectetur adipiscing elit? </h2>

                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='details'>
                                        <p>Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <div className='summarry'>
                                        <h2><span><BiHelpCircle className='icon'/></span>Tempus quam pellentesque nec nam aliquam sem et tortor consequat? </h2>

                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='details'>
                                        <p>Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel5bh-content"
                                    id="panel5bh-header"
                                >
                                    <div className='summarry'>
                                        <h2><span><BiHelpCircle className='icon'/></span>Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? </h2>

                                    </div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='details'>
                                        <p>Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.</p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Question
