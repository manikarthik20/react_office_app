import React, { Component } from 'react'
import FormValidation from './FormValidation';
import axios from 'axios';
class Registration extends Component {
    constructor() {
        super()
        this.validator = new FormValidation([{
            field: 'name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter full name.'
        }, {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter your email address.'
        }, {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Enter valid email address.'
        }, {
            field: 'phone',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter a phone number.'
        }, {
            field: 'phone',
            method: 'matches',
            args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
            validWhen: true,
            message: 'Enter valid phone number.'
        },
        {
            field: 'username',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter UserName.'
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter password.'
        }, {
            field: 'passwordconfirmation',
            method: 'isEmpty',
            validWhen: false,
            message: 'Enter Password confirmation.'
        }, {
            field: 'passwordconfirmation',
            method: this.passwordMatch, // notice that we are passing a custom function here
            validWhen: true,
            message: 'Password and password confirmation do not match.'
        }]);
        this.state = {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: '',
            passwordconfirmation: '',
            validation: this.validator.valid(),
        }
        this.submitted = false;
    }
    passwordMatch = (confirmation, state) => (state.password === confirmation)
    handleInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleFormSubmit = e => {
        e.preventDefault();
        const validation = this.validator.validate(this.state);
        this.setState({
            validation
        });

        const userObject = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            username: this.state.username,
            password: this.state.password,
            passwordconfirmation: this.state.passwordconfirmation
        };

        axios.post('http://localhost:5000/registration', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    
        this.submitted = true;
        if (validation.isValid) {
            alert("You Successfully registerd !");
            window.location.replace('/sign-in');
        }
        
    }

    render() {
        let validation = this.submitted ? this.validator.validate(this.state) : this.state.validation
        return (

            <div className="container  ">
               
                <div className="row">
                    <div className="col col-offset-4">
                        
                            <form className="registrationForm" style={{ alignItems:'center' }}>
                                <h2 style={{ color: 'green', marginTop: 20 }}> Registration </h2>
                                <br></br>
                                <div className={validation.email.isInvalid && 'has-error'}>

                                    <input type="string" className="form-control" name="name" placeholder="Full Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.name.message}</span> </div>
                                <div className={validation.email.isInvalid && 'has-error'}>
                                    <br></br>
                                    <input type="email" className="form-control" name="email" placeholder="Email address" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div>
                                <div className={validation.phone.isInvalid && 'has-error'}>
                                    <br></br>
                                    <input type="phone" className="form-control" name="phone" placeholder="Phone Number(enter only 10 digit number)" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>
                                <div className={validation.username.isInvalid && 'has-error'}>
                                    <br></br>
                                    <input type="username" className="form-control" placeholder="username" name="username" onChange={this.handleInputChange} /> <span className="help-block">{validation.username.message}</span> </div>
                                <div className={validation.password.isInvalid && 'has-error'}>
                                    <br></br>
                                    <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div>
                                <div className={validation.passwordconfirmation.isInvalid && 'has-error'}>
                                    <br></br>
                                    <input type="password" className="form-control" placeholder="Confirm Password" name="passwordconfirmation" onChange={this.handleInputChange} /> <span className="help-block">{validation.passwordconfirmation.message}</span> </div>
                                <br></br>
                                <button onClick={this.handleFormSubmit} className="btn btn-primary"> Register </button>
                                <br></br>
                                <br></br>
                                <h6>If you have an already account <a href='/sign-in'>Login</a> </h6>
                            </form>
                        </div>
                    </div>
                </div>
            

        )
    }
}
export default Registration;
