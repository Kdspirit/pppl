import React from 'react'
import Aboutimg from '../../../assests/person.jpg'
import './About.css'

const About = () => {
    return (
        <div className="about-wrap">
            <div className="about-flex">
                <section className="left-sec">
                    <p className="about-turning">TURNING</p>
                    <p className="bigIdeas">BIG IDEAS</p>
                    <p className="great">INTO GREAT PRODUCT</p>
                    <p className="about-dash">________</p>
                    <p className="simple-cost">SIMPLE COST-EFFICIENT MINNING SOLUTION</p>
                    {/* <p className="eff-mining">EFFICIENT MINNING</p>
                    <p className="solution">SOLUTION</p> */}
                </section>

                <section className="personimg">
                    <img src={Aboutimg} alt ="brokenImage"/>
                </section>
            </div>
        </div>
        
    )
}

export default About
