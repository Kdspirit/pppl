import React,{useEffect,useState} from 'react'
import Slider from "react-slick";

import image1 from '../../../assests/image1.jpeg'
import image2 from '../../../assests/image2.jpeg'
import image3 from '../../../assests/image3.jpeg'
import image4 from '../../../assests/image4.jpeg'
import image5 from '../../../assests/image5.jpeg'
import image6 from '../../../assests/jcb.jpg'
import image7 from '../../../assests/jcb2.jpg'
import image8 from '../../../assests/maintain.jpg'
import './Gallery.css'


const Gallery = () => {
   const [settings, setSetting] = useState()
      useEffect(() => {
         const mediaQuery = window.matchMedia('(max-width: 500px)')
         if(mediaQuery.matches){
               setSetting ( {
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  autoplay: true,
                  adaptiveHeight: true,
                  arrows: false,
                  // className: 'VideoTrendingsliderStyles'
                  }
               )
         }
         else{
               setSetting ( {
                  dots: true,
                  infinite: true,
                  speed: 500,
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                  adaptiveHeight: true,
                  arrows: false,
                  // className: 'PictureTrendingsliderStyles'
                  })
         }
      }, [])
    // const [settings, setSetting] = useState()
   //  const settings = {
   //      dots: true,
   //      infinite: true,
   //      speed: 500,
   //      slidesToShow: 3,
   //      slidesToScroll: 1,
   //         autoplay: true,
   //      adaptiveHeight: true,
   //      arrows: false,
   //      className: 'BlogTrendingsliderStyles'
   //      };

      return (
         <div className="gallery-wrap" style={{background:'#091016'}}>
         <p className="gallery-heading">PPPL Site Projects</p>
               <Slider {...settings}>
               <div>
                  <img className="gallery_img" src={image1} alt="brokenimage" />
               </div>

               <div>
                  <img className="gallery_img" src={image2} alt="brokenimage" />
               </div>

               <div>
                  <img className="gallery_img" src={image3} alt="brokenimage" />
               </div>
               <div>
                  <img className="gallery_img" src={image4} alt="brokenimage" />
               </div>
               <div>
               <img className="gallery_img" src={image5} alt="brokenimage" />
               </div>
               <div>
               <img className="gallery_img" src={image6} alt="brokenimage" />
               </div>
               <div>
               <img className="gallery_img" src={image7} alt="brokenimage" />
               </div>
               <div>
               <img className="gallery_img" src={image8} alt="brokenimage" />
               </div>
               </Slider>
         </div>
      )
}

export default Gallery
