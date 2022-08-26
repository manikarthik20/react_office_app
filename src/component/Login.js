import axios from "axios";
import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super()
    this.state = {
      registration: [],
      username: '',
      password: '',
    }
  }
  handelSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:5000/registration?username=${this.state.username}&password=${this.state.password}`)
      .then(res => {
        // this.setState({
        //   registration: res.data
        // });
        // if(this.state.registration.username === this.state.username){
        //   alert("welcome");
        // }
        let user = {
          "id":res.data[0].id,
          "name":res.data[0].name

        }
        localStorage.setItem("userObj",user);
        if(res.data.length>0){
          alert("Successfully logged In "+user.name);
          window.location.replace('/dash');
        }else{
          alert("Invalid Username / Password. Pleae try again");
        }
        console.log(res.data)
        console.log("button registration" + this.state.registration)
        console.log("username" + this.state.registration.username)
      })
    

  }
  //  componentDidMount(){
  //    axios.get("http://localhost:5000/registration?username=durga&password=durga@123")
  //    .then(res => {
  //      this.setState({
  //        registration:res.data

  //      });
  //      console.log(res.data);
  //      console.log("Login registration"+this.state.registration);

  //    })
  //  }
  usernamechange = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value
    })
  }

  passwordchange = (e) => {
    e.preventDefault();
    this.setState({
      password: e.target.value
    })


  }


  render() {

    return (
      <form>

        <h3>Log in</h3>

        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" placeholder="Enter email" onChange={this.usernamechange} />
        </div>
        <br></br>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange={this.passwordchange} />
        </div>
        <br></br>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.handelSubmit}>Sign in</button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
          <br></br>

        </p>
      </form>
    );
  }
}
export default Login;