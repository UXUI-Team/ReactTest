import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                    <link className="nav-link" href="/">Home <span className="sr-only">(current)</span></link>
                    </li>
                    <li className="nav-item">
                    <link className="nav-link" href="#">Features</link>
                    </li>
                    <li className="nav-item">
                    <link className="nav-link" href="#">Pricing</link>
                    </li>
                </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar