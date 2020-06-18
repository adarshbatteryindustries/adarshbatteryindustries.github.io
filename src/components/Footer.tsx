import React from 'react';

const Footer = () => (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 footer-info">
            <h3>ADARSH</h3>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="./home">Home</a></li>
              <li><a href="./About">About us</a></li>
              <li><a href="./services">Services</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contact Us</h4>
            <p>
              New Delhi,<br/>
              India <br/>
              <strong>Phone:</strong> +91 9818388319<br/>
              <strong>Email:</strong> anujabi25@gmail.com<br/>
            </p>

            <div className="social-links">
              <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
              <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
              <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>

            <form action="" method="post">
              <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Adarsh</strong>. All Rights Reserved
      </div>
    </div>
  </footer>
);

export default Footer;
