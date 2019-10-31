import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import API from '../Database/APICnn';
const api = new API();




class ChangePassword extends Component{
  
    constructor(props) {
      super(props);
      this.handleoldpassword = this.handleoldpassword.bind(this);
      this.handlenewpassword = this.handlenewpassword.bind(this);
      this.handleconfirmnewpassword = this.handleconfirmnewpassword.bind(this);
      this.state = {
        account :JSON.parse(localStorage.getItem('laccount')) || [],
        email: JSON.parse(localStorage.getItem('lemail')) || [],
        redirect: false,
        data: this.props.data,
        notifycation: "",
        handlenewpassword: "",
        handleoldpassword: "",
        handleconfirmnewpassword: ""
      };
    }

    componentWillMount(){
      window.scrollTo(0, 0);
    }

    handleoldpassword(e)
    {
      e.preventDefault();
      this.setState({handleoldpassword: e.target.value});
    }

    handlenewpassword(e)
    {
      e.preventDefault();
      this.setState({handlenewpassword: e.target.value});
    }

    handleconfirmnewpassword(e)
    {
      e.preventDefault();
      this.setState({handleconfirmnewpassword: e.target.value});
    }

    signIn = () =>{

      // check email

    //   var check = false;

    //   this.state.data.map(value=>{
    //     if(value.email === this.state.email && value.account === this.state.account)
    //     {
    //         check = true;
    //     }
    //   })

    //   if(check)
    //   {
    //   this.setState(
    //     {
    //       notifycation: "Check your email",
    //     }
    //   )
    //   var data = {
    //     msg: "waiting",
    //     email: this.state.email,
    //   }

    //   var id = 0;
    //   this.state.data.map(value=>{
    //     if(this.state.account === value.account)
    //     {
    //       id = value.id;
    //     }
    //   })
    //   api.forgotpassword(data).then(response =>{
    //     if(response === "sent") 
    //     {
    //     var key = {
    //         method: "forgot-password",
    //         id
    //     }
    //     api.forgotpassword(key).then(res=>{
    //       if(res === "successfully")
    //       {
    //         this.setState({
    //           redirect: true
    //         })

    //         window.location.reload();
    //       }
    //     })
      
    //   }
    //   })    
    // }
    // else{
    //   alert("email hoặc tài khoản của bạn không chinhs xác");
    // }
    }

    render(){
      if(this.state.redirect)
      {
        return <Redirect to = '/'></Redirect>
      }
        return(
            <div>
            <div className="limiter">
            <div className="container-login100">
              <div className="login100-more" style={{backgroundImage: 'url("./signupstyle/images/signup.jpg")'}} />
              <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <form className="login100-form validate-form">
                  <span className="login100-form-title p-b-59">
                    Change Password
                  </span>
                  
                  <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <span className="label-input100">current password</span>
                    <input className="input100" type="password" name="oldpassword" placeholder="Old password..." name="oldpassword" id = 'oldpassword' onChange = {this.handleoldpassword}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">New password</span>
                    <input className="input100" type="password" name="newpassword" placeholder = "New password..." id = 'newpassword' onChange = {this.handlenewpassword}/>
                    <span className="focus-input100" />
                  </div>

                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Confirm new password</span>
                    <input className="input100" type="password" name="confirmnewpassword" placeholder = "New password..." id = 'confirmnewpassword' onChange = {this.handleconfirmnewpassword}/>
                    <span className="focus-input100" />
                  </div>

                  <div>
                    <label style = {{color: "green"}}>{this.state.notifycation}</label>
                  </div>

                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn" />
                      <button className="login100-form-btn" type = "button" onClick = {this.signIn}>
                        Confirm
                      </button>
                    </div>
                    <Link to ="/" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                      Way back dashboard
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


export default ChangePassword;