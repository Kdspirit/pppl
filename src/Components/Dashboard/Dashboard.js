import React from 'react'
import About from './About/About'
import AboutUs from './AboutUs/AboutUs'
import Banner from './Banner/Banner'
import Facts from './Facts/Facts'
import Footer from './Footer/Footer'
import Gallery from './Gallery/Gallery'
import InfoContainer from './InfomationContainer/InfoContainer'
import Mission from './Mission/Mission'
import Machine from './ModernMachine/Machine'
import NavBar from './Navbar/NavBar'
import OngoingProjects from './OngoingProjects/OngoingProjects'
import Speclization from './Speacialization/Speclization'
import WhyUs from './WhyUs/WhyUs'

const Dashboard = () => {
    return (
        <div>
            <NavBar/>
            <About/>
            {/* <Banner/>
            <InfoContainer/> */}
            <AboutUs/>
            <Speclization/>
            <OngoingProjects/>
            <Mission/>
            <WhyUs/>
            <Machine/>
            <Facts/>
            <Gallery/>
            <Footer/>
        </div>
    )
}

export default Dashboard
