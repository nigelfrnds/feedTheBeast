import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-inverse bg-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header nav-flex">
                    <Link to="/welcome" className="navbar-brand">
                        <strong>
                            <img className="logo" align="left" src="./images/logo.jpg" alt="react-logo"/>
                            FTB
                        </strong>
                    </Link>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsible" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="collapsible">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/login" align="left" >Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;