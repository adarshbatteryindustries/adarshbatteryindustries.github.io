import React from 'react';

const Home = () => (
    <section id="intro" className="clearfix">
        <div className="container">

            <div className="intro-img">
                <img src={require("../img/intro-img.png")} alt="" className="img-fluid introo" />
            </div>

            <div className="intro-info">
                <h2>WE PROVIDE<br />PREMIUM QUALITY<br />SERVICES !</h2>
                <div>
                    <a href="./contact" className="btn-get-started scrollto">Get Quote</a>
                    <a href="./services" className="btn-get-started scrollto">Our Products</a>
                </div>
            </div>

        </div>
    </section>
);

export default Home;
