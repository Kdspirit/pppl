import React from 'react'
import './Mission.css'
import minperson from '../../../assests/minperson.png'

const Mission = () => {
    return (
        <div className="MV-wrap">
            <div className="MV-flex">
                <section 
                // style={{padding:'5rem'}}
                >
                    <section className="Mission">
                        <p className="MV_Heading">Mission</p>
                        <p className="MV-content">Purpose of Our Organisation is to improve both the production and efficiency of work by meeting with client's expectational and delivering what we commit to them</p>
                    </section>
                    <section className="Mission">
                        <p className="MV_Heading">Vision</p>
                        <p className="MV-content">To strive  to be a leading mining company in coming future keeping in mind the sustainable growth and improved performance</p>
                    </section>
                </section>
                <img className="mv-img" src={minperson} alt="" />
            </div>
        </div>
    )
}

export default Mission
