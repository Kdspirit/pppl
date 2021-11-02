import React from 'react'
import workers from '../../../assests/workers.png'
import verified from '../../../assests/verified.png'
import machinery from '../../../assests/machinery.png'
import handshake from '../../../assests/handshake.png'

import './Facts.css'
// import EngineeringIcon from '@mui/icons-material/Engineering';
const Facts = () => {
    return (
        <div className="facts-container">
            <section className="left-section">
                <p className="facts-title">
                 FACTS &#10097;&#10097;
                </p>
                <p className="facts-brief">
                Expert Workers Are Giving Best Services To Build Your Dream Factory.
                </p>
            </section>
            <section className="right-section">
                <div className="facts1">
                    <div className="workers">
                        <img src={workers} alt="facts-broken-img" className="facts-img"/>
                        <p className="facts-wrapper">
                            <p className="facts-num">
                                130 <span className="facts-plus"> +</span>
                            </p>
                            <p className="facts-list">
                            EMPLOYEES
                            </p>
                        </p>
                    </div>
                    <div className="verified">
                        <img src={verified} alt="facts-broken-img" className="facts-img"/>
                        
                        <p className="facts-wrapper">
                            <p className="facts-num">
                                5 <span className="facts-plus"> +</span>
                            </p>
                            <p className="facts-list">
                            PROJECTS DONE!
                            </p>
                        </p>

                    </div>
                </div>
                <div className="facts2">
                <div className="turnover">
                        <img src={machinery} alt="facts-broken-img" className="facts-img"/>
                        
                        <p className="facts-wrapper">
                            <p className="facts-num">
                            25 <span className="facts-plus"> +</span>
                            </p>
                            <p className="facts-list">
                            Machineries
                            </p>
                        </p>

                    </div>
                    <div className="handshake">
                        <img src={handshake} alt="facts-broken-img" className="facts-img"/>
                        
                        <p className="facts-wrapper">
                            <p className="facts-num">
                                10<span className="facts-plus"> +</span>
                            </p>
                            <p className="facts-list">
                            TRUSTED BY
                            </p>
                        </p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Facts
