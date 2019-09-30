import React, {Component} from "react";
import {Link} from "react-router-dom"
class SignUpPage extends Component{
    render(){
        return(
          
          <div>
                <link rel="stylesheet" type="text/css" href="./loginStyle/css/main.css"></link>
        <div className="limiter">
          <div className="container-login100" style={{backgroundImage: 'url("loginStyle/images/bg-01.jpg")'}}>
            <div className="wrap-login100 p-l-110 p-r-110 p-t-37 p-b-33">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-34">
                  Sign Up
                </span>
                
                <div className="p-t-7 p-b-9">
                  <span className="txt1">
                    Username
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                  <input className="input100" type="text" name="username" />
                  <span className="focus-input100" />
                </div>
                <div className="p-t-13 p-b-9">
                  <span className="txt1">
                    Password
                 </span>
                </div>
                
                
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" />
                  <span className="focus-input100" />
                </div>

                <div className="p-t-18 p-b-10">
                  <span className="txt1">
                    Confirm Password
                  </span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" name="pass" />
                  <span className="focus-input100" />
                </div>

                <div className="container-login100-form-btn m-t-17">
                  <button className="login100-form-btn">
                    Sign Up
                  </button>
                </div>
                <div className="w-full text-center p-t-28">
                  <span className="txt2">
                    Ready Account??
                  </span>
                  <Link to = "/login" className="txt2 bo1">
                    Login Now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
        )
    }
}


export default SignUpPage;