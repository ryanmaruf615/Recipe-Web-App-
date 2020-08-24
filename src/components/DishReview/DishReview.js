import React, {Component,Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



class DishReview extends Component {
    render() {
        var settings = {
            autoplaySpeed: 3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,

            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };





        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="text-center serviceMainTitle">PEOPLE SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg"/>
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">First i analysis the requirement of project.
                                        According to the requirement i make a proper technical
                                        analysis, then i build a software architecture. According
                                        to the planning i start coding.
                                        Testing is also going on with coding.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg"/>
                                    <h1 className="serviceName">Web Design</h1>
                                    <p className="serviceDescription">First i analysis the requirement of project.
                                        According to the requirement i make a proper technical
                                        analysis, then i build a software architecture. According
                                        to the planning i start coding.
                                        Testing is also going on with coding.</p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg"/>
                                    <h1 className="serviceName">Mobile App Development</h1>
                                    <p className="serviceDescription">First i analysis the requirement of project.
                                        According to the requirement i make a proper technical
                                        analysis, then i build a software architecture. According
                                        to the planning i start coding.
                                        Testing is also going on with coding.</p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default DishReview;