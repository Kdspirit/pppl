import React,{useState} from 'react'
import IconImage from '../../../assests/icon.jpeg'
import address from '../../../assests/adddress.png'
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {Link} from 'react-router-dom'


import './Footer.css'

const Footer = () => {
   const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
    const handleScrool = () =>{
         window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
    const handleClick = () => {
        window.open("https://www.google.com/maps/search/TTT%2F10,+Civil+Township,,P.S-Raghunath+Palli,+Dist-Sundargarh,,Rourkela,Orissa,INDIA,769004/@22.2246609,84.811645,17z/data=!3m1!4b1");
      };
const handlefb = () => {
    window.open("https://www.facebook.com/Purneshwari-projects-pvt-ltd-105686978542374")
}
    return (
        <div className="footer-wrap">
            <div className="footer-flex1">
                <img className="footer-icon-img" src={IconImage} alt=""/>
                <div className="footer-aboutUs">
                    <p className="footer-aboutUsp1" >About Us</p>
                    <p className="footer-aboutUsp2">PURNESHWARI PROJECTS PRIVATE LIMITED is a private limited company based in Rourkela, India. The company is registered at Registrar of Companies, Cuttack (RoC-Cuttack) and is classified as the Indian Non-Government Company</p>
                </div>
                {/* <a href="/https://www.google.com/maps/search/TTT%2F10,+Civil+Township,,P.S-Raghunath+Palli,+Dist-Sundargarh,,Rourkela,Orissa,INDIA,769004/@22.2246609,84.811645,17z/data=!3m1!4b1" target="_blank" rel="noreferrer noopener"> */}
                {/* <Link to={{pathname: '/https://www.google.com/maps/search/TTT%2F10,+Civil+Township,,P.S-Raghunath+Palli,+Dist-Sundargarh,,Rourkela,Orissa,INDIA,769004/@22.2246609,84.811645,17z/data=!3m1!4b1'}}> */}
                <img  onClick={handleClick} className="footer-add-image" src={address} alt="" />
                {/* </Link> */}
                    
                    {/* </a> */}
            </div>

            <div className="footer-flex2" >
                <span style={{cursor:'pointer'}}>
                <p className="footer-fb"  onClick={handlefb} ><FacebookIcon className="facebook-icon"/>&nbsp;Facebook</p></span>
                <div className="footer-call">
                    <p className="footer-call1" style={{marginBottom:'0.5rem'}}><CallIcon/>&nbsp;7000502696</p>
                    <p className="footer-call2"><CallIcon/>&nbsp;8280063216</p>
                </div>
                <p className="footer-mail"><MailIcon/>&nbsp;purneshwarippltd@gmail.com</p>
                <p className="footer-loc"><LocationOnIcon/>&nbsp; TTT/10, Civil Township, P.S-Raghunath Palli, Dist-Sundargarh, Rourkela,Orissa,INDIA,769004</p>
            </div>
            <hr/>
            <button className="scrol-top" onClick={handleScrool}><ArrowUpwardIcon/></button>
        </div>
    )
}

export default Footer
