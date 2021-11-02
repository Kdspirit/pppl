import React from 'react'
import Dumper from '../../../assests/Dumper.jpg'
import Dumper2 from '../../../assests/Dumper2.jpg'
import rockExcavator from '../../../assests/rockExcavator.jpg'
// import BannerImage from '../../../assests/profileee.jpg'

import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        // <div>
        //     <img className="banner-img" src={BannerImage} alt="brokenImage"/>
        // </div>
        <section className="banner-carousel">
            <Carousel fade interval={3000}>
                `<Carousel.Item>
                    <img
                    className="d-block bannerImg w-100"
                    src={rockExcavator}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block bannerImg w-100"
                    src={Dumper2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block bannerImg w-100"
                    src={Dumper}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>`
        </section>
    )
}

export default Banner
