import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import Jumbotron from '../components/jumbotron/Jumbotron.jsx';
import Form from '../components/form/Form.jsx'

class Contact extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <Jumbotron title="Contact" subtitle="Looking Forward Meeting You!!" />
                <div className="container">
                    <h2>Contact Information</h2>
                    <Form />
                </div>
                <Footer />

            </div>
        );
    }
}

export default Contact