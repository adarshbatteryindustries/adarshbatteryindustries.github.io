import React from 'react';

const About = () => (
    <main id="main">
      <section id="about">
         <div className="container">
             <header className="section-header">
                 <h3>About Us</h3>
             </header>
             <div className="row about-container">
                 <div className="col-lg-6 content order-lg-1 order-2">
                 </div>
                 <div className="row about-extra">
                     <div className="col-lg-6 wow fadeInUp">
                         <img src={require("../img/about-extra-1.jpeg")} className="img-fluid extraa" alt=""/>
                     </div>
                     <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                         <h4>ANUJ GUPTA <br/>Managing Director</h4>
                         <p>
                          Following my legacy I have been providing services in this field since last 30 years covering domestic as well as international domains.
                          Our mission is to emphasis on innovation in technology.
                          The aim is to facilitate the society with affordable and brighter solutions.
                         </p>
                     </div>
                 </div>
             </div>
         </div>
      </section>
   </main>
);

export default About;
