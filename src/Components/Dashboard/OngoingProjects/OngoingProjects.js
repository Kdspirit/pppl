import React from 'react'
import map from '../../../assests/map.png'
// import cryptomin from '../../../assests/cryptomin.jpg'
import './OngoingProjects.css'

const OngoingProjects = () => {
    return (
        <section className="OngoingProjects-wrapper">
            <p className="OngoingProjects-title">Ongoing Projects</p>
            <div className="ongoing-projects-container">
            <div class="flip-box ">
                <div class="flip-box-inner">
                    <div class="flip-box-front box1">
                        <h2 className="flip-heading">Jalda</h2>
                        <img src={map} alt="broken-img/map" className="map-img" />
                    </div>
                    <div class="flip-box-back">
                        <h2 className="flip-heading">At Jaldon</h2>
                        <p className="loc-des">Drilling, Blasting, Loading, agreement for Supplying 500m size of stone to M/S RKD constructions (P) Ltd. for rehabilitation and UP-gradation of existing stone to tour lining at koida to Rajamanda section of NH-215 (New NH-520) in state of odisha, under NHDP, phase-3- package-3 at Jaldon.</p>
                    </div>
                </div>
            </div>

            <div class="flip-box ">
                <div class="flip-box-inner">
                    <div class="flip-box-front box2">
                        <h2 className="flip-heading">K-Balang</h2>
                        <img src={map} alt="broken-img/map" className="map-img" />
                    </div>
                    <div class="flip-box-back">
                        <h2 className="flip-heading">At K-Baloy</h2>
                        <p className="loc-des">Drilling, Primary and Secondary Blasting, loading, agreement for Supplying 500m size of stone to M/S RKD constructions (P) Ltd. for rehabilitation and UP-gradation of existing stone to tour lining at koida to Rajamanda section of NH-215 (New NH-520) in state of odisha, under NHDP, phase-3- package-3 at K-Baloy.</p>
                    </div>
                </div>
            </div>
        </div>
        <br className="break" />
        <div className="ongoing-projects-container">
            <div class="flip-box ">
                <div class="flip-box-inner">
                    <div class="flip-box-front box3">
                        <h2 className="flip-heading">Chuna-Ghati</h2>
                        <img src={map} alt="broken-img/map" className="map-img" />
                    </div>
                    <div class="flip-box-back">
                        <h2 className="flip-heading">At Chuna-Ghati</h2>
                        <p className="loc-des">Earth work in cutting(Hard rock, Soft rock, required drilling, Blasting, Loading, Transporting), agreement for Supplying 500m size of stone to M/S RKD constructions (P) Ltd. for rehabilitation and UP-gradation of existing stone to tour lining at koida to Rajamanda section of NH-215 (New NH-520) in state of odisha, under NHDP, phase-3- package-3 at Chuna-Ghati.</p>
                    </div>
                </div>
            </div>
            <div class="flip-box ">
                <div class="flip-box-inner">
                    <div class="flip-box-front box4">
                        <h2 className="flip-heading">Kalta</h2>
                        <img src={map} alt="broken-img/map" className="map-img" />
                    </div>
                    <div class="flip-box-back">
                        <h2 className="flip-heading">At Kalta</h2>
                        <p className="loc-des">Earth work in Cutting and Filling agreement for Supplying 500m size of stone to M/S RKD constructions (P) Ltd. for rehabilitation and UP-gradation of existing stone to tour lining at koida to Rajamanda section of NH-215 (New NH-520) in state of odisha, under NHDP, phase-3- package-3 at Kalta.</p>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default OngoingProjects
