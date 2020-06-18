import React from 'react';

const Services = () => (
    <main id="main">
        <section id="services" className="section-bg">
            <div className="container">

                <header className="section-header">
                    <h3>PRODUCTS</h3>
                </header>

                <div className="row">
                    <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-analytics-outline" style={{ color: "#ff689b" }}></i></div>
                            <h4 className="title"><a href="">E-Rickshaw Batteries</a></h4>
                            <img src={require("../img/e-rick.jpg")} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-bookmarks-outline" style={{ color: "#e9bf06" }}></i></div>
                            <h4 className="title"><a href="">Solar Batteries</a></h4>
                            <img src={require("../img/solar.jpg")} alt="" className="img-fluid" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-paper-outline" style={{ color: "#3fcdc7" }}></i></div>
                            <h4 className="title"><a href="">Automobile Batteries</a></h4>
                            <img src={require("../img/bat.jpeg")} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.1s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-speedometer-outline" style={{ color: "#41cf2e" }}></i></div>
                            <h4 className="title"><a href="">Inverter Batteries</a></h4>
                            <img src={require("../img/inver.jpg")} alt="" className="img-fluid" />
                            <img src={require("../img/new.jpeg")} alt="" className="img-fluid short" />
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 offset-lg-1 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-world-outline" style={{ color: "#d6ff22" }}></i></div>
                            <h4 className="title"><a href="">Battery Spare Parts</a></h4>
                            <img src={require("../img/spare.jpg")} alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 wow bounceInUp" data-wow-delay="0.2s" data-wow-duration="1.4s">
                        <div className="box">
                            <div className="icon"><i className="ion-ios-world-outline" style={{ color: "#d6ff22" }}></i></div>
                            <h4 className="title"><a href="">Home UPS</a></h4>
                            <img src={require("../img/ups.jpg")} alt="" className="img-fluid" />                        </div>
                    </div>

                </div>

            </div>
        </section>
        <section id="why-us" className="wow fadeIn">
            <div className="container">
                <header className="section-header">
                    <h3>Why choose us?</h3>
                </header>

                <div className="row row-eq-height justify-content-center">

                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-usd"></i>
                            <div className="card-body">
                                <h5 className="card-title">MAINTENANCE FREE</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-diamond"></i>
                            <div className="card-body">
                                <h5 className="card-title">PREMIUM QUALITY</h5>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-clock-o"></i>
                            <div className="card-body">
                                <h5 className="card-title">SHORT CHARGING TIME</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-flash"></i>
                            <div className="card-body">
                                <h5 className="card-title">SAVES ELECTRICITY</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-recycle"></i>
                            <div className="card-body">
                                <h5 className="card-title">RECYCLABLE</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card wow bounceInUp">
                            <i className="fa fa-battery"></i>
                            <div className="card-body">
                                <h5 className="card-title">LONG LIFE</h5>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="row counters">

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">177</span>
                        <p>Clients</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">531</span>
                        <p>Projects</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">5000</span>
                        <p>Hours Of Support</p>
                    </div>

                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">18</span>
                        <p>Hard Workers</p>
                    </div>

                </div>

            </div>
        </section>
    </main>
);

export default Services;
