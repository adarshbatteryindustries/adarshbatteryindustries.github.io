import React from 'react';
import {NavLink} from 'react-router-dom';
import '../style/style.scss'
import logo from '../img/logo.png';

const Header = () => (
            <React.Fragment>
                <header id="header" className="fixed-top">
                    <div className="container">

                    <div className="logo float-left">
                        <a href="#" className="scrollto"><img src={logo} alt="" className="img-fluid"/></a>
                    </div>

                    <nav className="main-nav float-right d-none d-lg-block">
                        <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/About">About Us</NavLink></li>
                        <li><NavLink to="/Services">Our Products</NavLink></li>
                        <li><NavLink to="/Portfolio">Offers</NavLink></li>
                        <li><NavLink to="/Team">Team</NavLink></li>
                        <li><NavLink to="/Contact">Contact Us</NavLink></li>
                        <li><NavLink to="/Login">Login</NavLink></li>
                        </ul>
                    </nav>

                    </div>
                </header>
        </React.Fragment>
     );

     export default Header;
