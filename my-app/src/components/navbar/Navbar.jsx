import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                <span className="navbar-brand mb-0 h1">React Website</span>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </nav>

        );
    }
}

export default Navbar