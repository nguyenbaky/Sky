import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import API from '../Database/APICnn';
const api = new API();




class ForgetPassword extends Component{
  
    constructor(props) {
      super(props);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
      this.signIn = this.signIn.bind(this);
      this.state = {
        laccount :JSON.parse(localStorage.getItem('laccount')) || [],
        lpassword: JSON.parse(localStorage.getItem('lstate')) || [],
        redirect: false,
        data: this.props.data
      };
    }

    componentWillMount(){
      window.scrollTo(0, 0);
    }

    handleUsername(e)
    {
      e.preventDefault();
      this.setState({laccount: e.target.value});
    }

    handlePassword(e)
    {
      e.preventDefault();
      this.setState({lpassword: e.target.value});
    }

    signIn = () =>{
    }

    render(){
        return(
            <div>
            <div className="limiter">
            <div className="container-login100">
              <div className="login100-more" style={{backgroundImage: 'url("./signupstyle/images/signup.jpg")'}} />
              <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <form className="login100-form validate-form">
                  <span className="login100-form-title p-b-59">
                    Fotgot Password
                  </span>
                  
                  <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <span className="label-input100">Username</span>
                    <input className="input100" type="text" name="username" placeholder="Username..." name="username" id = 'account' onChange = {this.handleUsername}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Email</span>
                    <input className="input100" type="email" name="pass" placeholder = "Your email" id = 'password' onChange = {this.handlePassword}/>
                    <span className="focus-input100" />
                  </div>

                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn" />
                      <button className="login100-form-btn" type = "button" onClick = {this.signIn}>
                        Confirm
                      </button>
                      
                    </div>
                    <Link to ="/" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                      Sign In
                      <i className="fa fa-long-arrow-right m-l-5" />
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        )
    }
}


export default ForgetPassword;