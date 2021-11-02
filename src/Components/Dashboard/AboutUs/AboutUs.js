import React from 'react'
import Aboutus from '../../../assests/AboutUs.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <p className="au-p1">About Company</p>
            <div className="au-Flex">
                <section className="au-sec1">
                    <img src={Aboutus} alt="brokenimg"/>
                </section>

                <section className="au-sec2">
                    <p className="au-p2">Purneshwari Project Pvt. Ltd. is based at Rourkela, Odisha and has registered office at TTT-10-Civil Township,769004.
                    This Firm is operating for more than two decades.</p>
                    {/* <p className="au-p2">This Firm is operating for more than two decades</p> */}
                    <p className="au-p3">PPPL was incorparated in <strong>03 November 2014</strong>, before that it was working as M/S Neeraj Panday & CO.</p>
                    <p className="au-dire">Directors</p>
                    <ul className="au-ul">
                        <li>Neeraj Kumar Pandey (03 Nov 2014)</li>
                        <li>Manjary  Pandey (03 Nov 2014)</li>
                        <li>Prashoon Pandey (20 sept 2020)</li>
                    </ul>

                    <p className="au-p4">Company Registration No :- <strong>018397</strong></p>
                </section>
            </div>
        </div>
    )
}

export default AboutUs
