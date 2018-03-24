import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import Jumbotron from '../components/jumbotron/Jumbotron.jsx';

class About extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Jumbotron title="About" subtitle="About React Website!" />
                <div className="container">
                    <h2>About Us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <Footer />

            </div>
        );
    }
}

export default About