import React,{useEffect, useState} from 'react'
import './Portfolio.scss'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Portfolio = () => {

  

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, []);
  const [Items,setItems]  = useState(imageData);

const filterItem = (category) =>{


  const updateItem = imageData.filter((curntelemnt,event)=>{
       return curntelemnt.title === category;
     
  })
  setItems(updateItem)

  
}

const all = () =>{
  const allImage = imageData.filter((item)=>{
    return item
  })
  setItems(allImage)
}
  return (
    <>
      <section id='Portfolio'>
        <div className='container' data-aos="fade-up">
          <div className='row'>
            <div className='col-sm-12'>

              <div className='Portfolio_header'>
                <h2>PORTFOLIO</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className='mb-3 text-center' data-aos="fade-up">
              <ul className='portfolioLinks'>
                  <li><span onClick={all}> All</span></li>
                  <li><span onClick={()=>filterItem("App")}>App</span></li>
                  <li><span onClick={()=>filterItem("Web")}>Card</span></li>
                  <li><span onClick={()=>filterItem("Card")}>Web</span></li>
                </ul>
                </div>
              <Box sx={{ height: 1000 }} data-aos="fade-up">

                
                <ImageList variant="masonry" cols={3} gap={20}>
                  {Items.map((item, index) => (
                    <ImageListItem key={item.index}>

                      <img
                        src={item.img}
                        srcSet={item.img}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                          >
                          </IconButton>
                        }
                      />

                    </ImageListItem>
                  ))}
                </ImageList>
              </Box>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Portfolio


const imageData = [
  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-1.jpg',
    title: 'App',
    subtitle: "image"
  },
  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-6.jpg',
    title: 'App',
    subtitle: "image"
  },
  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-2.jpg',
    title: 'Web',
    subtitle: "image"
  },

  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-5.jpg',
    title: 'Web',
    subtitle: "image"
  },
  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-3.jpg',
    title: 'Web',
    subtitle: "image"
  },
  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-9.jpg',
    title: 'Card',
    subtitle: "image"
  },
  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-4.jpg',
    title: 'Card',
    subtitle: "image"
  },
  {
    img: 'https://bootstrapmade.com/demo/templates/Arsha/assets/img/portfolio/portfolio-7.jpg',
    title: 'Card',
    subtitle: "image"
  },


];