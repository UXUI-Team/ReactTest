import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx'

class Home extends Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h2>Welcome!!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book.
                    </p>
                </div>

            </div>
        );
    }
}

export default Home