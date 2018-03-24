import React, { Component } from 'react';
import Navbar from '../components/navbar/Navbar.jsx';
import Footer from '../components/footer/Footer.jsx';
import Jumbotron from '../components/jumbotron/Jumbotron.jsx';

const styles ={
    transition: 'all 1s ease-out'
};

class Home extends Component {
    constructor() {
        super();
        this.state={
            opacity: 1,
        };
        
        this.onHide = this.onHide.bind(this)
    }
    onHide(){
        this.setState({
            opacity: 0,
        });
    }
    render(){
        return (
            <div className="home">
                <Navbar />
                <Jumbotron title="Welome" subtitle="To My First React Website!" />
                <div className="container"
                style={{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale +')'}}>
                    <h2>Welcome!!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book.
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
                    of type and scrambled it to make a type specimen book.
                    </p>

                    <button type="button" onClick={this.onHide}class="btn btn-info">Hide Content</button>
            
                </div>
                
                <Footer />

            </div>
        );
    }
}

export default Home