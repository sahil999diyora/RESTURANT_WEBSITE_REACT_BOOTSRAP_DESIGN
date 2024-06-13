import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LiaAngleDoubleRightSolid } from "react-icons/lia";

function AboutUs() {
    return (
        <Container fluid className='g-0 mb-5'>
            <Container>
                <Row className='g-0'>
                    <Col>
                        <div className='text-center'>
                            <h5 className='opacity-75'> ABOUT US </h5>
                        </div>
                        <div className='text-center'>
                            <h1> Learn More <span className='Real-color'>About Us</span> </h1>
                        </div>
                    </Col>
                </Row>
                <Row className='g-0 my-3'>
                    <Col className='col-lg-7 col-12 g-0'>
                        <div className='About-Us-Back min-vh-100 position-relative d-flex justify-content-center'>
                            <div className='text-center bg-white w-75 mx-auto position-absolute bottom-0 mb-5 py-3'>
                                <h3 className='text-dark'> Book a Table </h3>
                                <h2 className='Real-color'> +1 5589 55488 55 </h2>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-lg-5 col-12 ps-lg-4 my-lg-0 my-md-3 my-sm-3 my-3 text-justify'>
                        <div>
                            <div className='mb-4'>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lagos incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                            <div className='mb-4'>
                                <p> <LiaAngleDoubleRightSolid className='Real-color fw-bold fs-5' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p> <LiaAngleDoubleRightSolid className='Real-color fw-bold fs-5' /> Duis aute irure dolor in reprehenderit in voluptate velit. </p>
                                <p> <LiaAngleDoubleRightSolid className='Real-color fw-bold fs-5' /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur. </p>
                            </div>
                            <div className='mb-4'>
                                <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis la aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident </p>
                            </div>
                        </div>
                        <div>
                            <img src="https://bootstrapmade.com/demo/templates/Yummy/assets/img/about-2.jpg" alt="ERROR 404" className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default AboutUs;