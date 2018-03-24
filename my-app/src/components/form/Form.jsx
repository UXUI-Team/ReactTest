import React, { Component } from 'react';


class Form extends Component {
   constructor(props){
       super(props);
       this.state = {
           submit: false,
           name: '',
           email: ''
       }
       this.onSubmit = this.onSubmit.bind(this);
       this.renderForm = this.renderForm.bind(this);
       this.renderMessage = this.renderMessage.bind(this);

   }
    
       onSubmit() {
        this.setState({
            submit: true
        })
    }

    renderForm (){
        return(
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Enter Name</label>
                            <input name="name" 
                                type="text"
                                className="form-control" 
                                ref={input => this._newName = input}
                            />
                    </div>  
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Enter Email</label>
                            <input 
                                name="email" 
                                type="email" 
                                className="form-control" 
                                ref={input => this._newEmail = input}
                            />
                    </div>                
                </div>
                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={this.onSubmit}>
                    Submit
                </button>                                        
            </form>

        );
    }

    renderMessage(){
        return(
            <div className="container">
                <h4 className="text-center">Thank you {this._newName.value}!<br/>
                 Your information has been submitted! <br/>
                 Confirmation sent to: {this._newEmail.value}</h4>
            </div>
        );
    }
    render(){
        return this.state.submit ?  this.renderMessage() : this.renderForm();
    }

}
export default Form