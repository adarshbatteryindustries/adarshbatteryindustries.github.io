import React from 'react';

const Portfolio = () => (
    <main id="main">
        <section id="portfolio" className="clearfix">
            <div className="container">

                <header className="section-header">
                    <h3 className="section-title">Deals</h3>
                </header>


                <div className="row portfolio-container">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/1.png")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>
                                <div>
                                    <a href={require("../img/portfolio/1.png")} className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/2.png")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>

                                <div>
                                    <a href={require("../img/portfolio/2.png")} className="link-preview" data-lightbox="portfolio" data-title="Web 3" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/3.jpg")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>

                                <div>
                                    <a href={require("../img/portfolio/3.jpg")} className="link-preview" data-lightbox="portfolio" data-title="App 2" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/4.png")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>

                                <div>
                                    <a href={require("../img/portfolio/4.png")} className="link-preview" data-lightbox="portfolio" data-title="Card 2" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/5.png")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>

                                <div>
                                    <a href={require("../img/portfolio/5.png")} className="link-preview" data-lightbox="portfolio" data-title="Web 2" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app" data-wow-delay="0.2s">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/6.png")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>

                                <div>
                                    <a href={require("../img/portfolio/6.png")} className="link-preview" data-lightbox="portfolio" data-title="App 3" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/7.png")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>

                                <div>
                                    <a href={require("../img/portfolio/7.png")} className="link-preview" data-lightbox="portfolio" data-title="Card 1" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card" data-wow-delay="0.1s">
                        <div className="portfolio-wrap">
                            <img src={require("../img/portfolio/8.png")} className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4><a href="#">offer</a></h4>

                                <div>
                                    <a href={require("../img/portfolio/8.png")} className="link-preview" data-lightbox="portfolio" data-title="Card 3" title="Preview"><i className="ion ion-eye"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
        <section id="testimonials" className="section-bg">
            <div className="container">

                <header className="section-header">
                    <h3>Testimonials</h3>
                </header>

                <div className="row justify-content-center">
                    <div className="col-lg-8">

                    <div className="owl-carousel testimonials-carousel wow fadeInUp">

                        <div className="testimonial-item">
                            <img src={require("../img/testimonial-1.png")} className="testimonial-img" alt="" />
                            <h3>Rajendra Prasad</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <p>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                </p>
                        </div>

                        <div className="testimonial-item">
                            <img src={require("../img/testimonial-1.png")} className="testimonial-img" alt="" />
                            <h3>Somdas Chopra</h3>
                            <h4>Designer</h4>
                            <p>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                </p>
                        </div>

                        <div className="testimonial-item">
                            <img src={require("../img/testimonial-1.png")} className="testimonial-img" alt="" />
                            <h3>Jenat kali</h3>
                            <h4>Store Owner</h4>
                            <p>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                </p>
                        </div>

                        <div className="testimonial-item">
                            <img src={require("../img/testimonial-1.png")} className="testimonial-img" alt="" />
                            <h3>Manmohan Kumar</h3>
                            <h4>Freelancer</h4>
                            <p>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                </p>
                        </div>

                        <div className="testimonial-item">
                            <img src={require("../img/testimonial-1.png")} className="testimonial-img" alt="" />
                            <h3>Jai Pande</h3>
                            <h4>Entrepreneur</h4>
                            <p>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                </p>
                    </div>
                </div>
</div>
</div>

            </div>
        </section>
    </main>
);

export default Portfolio;
