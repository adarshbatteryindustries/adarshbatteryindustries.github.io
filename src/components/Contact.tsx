import React from 'react';
import Footer from './Footer';

const Contact = () => (
    <main id="main">
        <section id="contact">
            <div className="container-fluid">

                <div className="section-header">
                    <h3>Contact Us</h3>
                </div>

                <div className="row wow fadeInUp">

                    <div className="col-lg-6">
                        <div className="map mb-4 mb-lg-0">
                            <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=new%20delhi%20india+(ADARSH%20BATTERY%20INDUSTRIES)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={{ border: "0", width: "100%", height: "312px" }} allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div >
                          <h4>Mail us : anujabi25@gmail.com</h4><br/>
                          <h4>Ph no. : 9818388319</h4><br/>
                          <h4>Reach Us :  New Delhi, India</h4>
                        </div>


                    </div>

                </div>

            </div>
        </section>
        <Footer />
    </main>
);

export default Contact;
