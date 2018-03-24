import React, { Component } from 'react'
import '../footer/Footer.css'

class Footer extends Component {
    render (){
        return(
            <footer className="footer">
                <div className="container">
                    <span className="text-muted"> Edited by Mariana Perez &copy; {new Date().getFullYear()}
                    </span>
                </div>
            </footer>
        );
    }
}

export default Footer