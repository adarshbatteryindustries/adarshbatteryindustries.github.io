import React from 'react';

const Team = () => (
    <main id="main">
        <section id="team">
            <div className="container">
                <div className="section-header">
                    <h3>Team</h3>
                </div>

                <div className="row">

                    <div className="col-lg-3 col-md-6 wow fadeInUp">
                        <div className="member">
                            <img src={require("../img/man.png")} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Anuj Gupta</h4>
                                    <span>Managing Director</span>
                                    <div className="social">
                                        <a href=""><i className="fa fa-twitter"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                        <a href=""><i className="fa fa-google-plus"></i></a>
                                        <a href=""><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="member">
                            <img src={require("../img/girl.jpg")} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Simple Gupta</h4>
                                    <span>CEO</span>
                                    <div className="social">
                                        <a href=""><i className="fa fa-twitter"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                        <a href=""><i className="fa fa-google-plus"></i></a>
                                        <a href=""><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="member">
                            <img src={require("../img/boy.png")} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Shivam Gupta</h4>
                                    <span>CTO</span>
                                    <div className="social">
                                        <a href=""><i className="fa fa-twitter"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                        <a href=""><i className="fa fa-google-plus"></i></a>
                                        <a href=""><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="member">
                            <img src={require("../img/ashi.png")} className="img-fluid" alt="" />
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4>Ashi Gupta</h4>
                                    <span>Product Manager</span>
                                    <div className="social">
                                        <a href=""><i className="fa fa-twitter"></i></a>
                                        <a href=""><i className="fa fa-facebook"></i></a>
                                        <a href=""><i className="fa fa-google-plus"></i></a>
                                        <a href=""><i className="fa fa-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <section id="clients" className="section-bg">

            <div className="container">

                <div className="section-header">
                    <h3>Our CLients</h3>
                </div>

                <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-1.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-2.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-3.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-4.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-5.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-6.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-7.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-xs-6">
                        <div className="client-logo">
                            <img src={require("../img/clients/client-8.png")} className="img-fluid" alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    </main>
);

export default Team;
