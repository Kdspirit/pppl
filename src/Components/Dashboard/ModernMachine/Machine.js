import React from 'react'
// import machine from '../../../assests/technology.jpg'
import machine from '../../../assests/nytMine.jpg'
import './Machine.css'


const Machine = () => {
    return (
        <div className="mac-wrap">
            <div className="mac-flex">
                <img className="mac-img" src={machine} alt="brokenImage"/>
                <section className="mac-sec2"> 
                    <p className="mac-tech">Technology</p>
                    <p className="mac-mm">Modern Machinaries</p>
                    <p className="mac-dash">___</p>
                    <ul className="mac-list">
                        <li>Hydralic excavator</li>
                        <li>Hydralic rock braker</li>
                        <li>Drill & Compressor</li>
                        <li>Hyva / Tipper</li>
                        <li>Water Tanker</li>
                        <li>Camper</li>
                        
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Machine
