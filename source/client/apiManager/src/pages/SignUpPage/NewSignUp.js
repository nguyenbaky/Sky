import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import API from '../Database/APICnn';
const api = new API();

class NewSignUp extends Component{

  constructor(props) {
    super(props);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleUConfirmPassword = this.handleUConfirmPassword.bind(this);
    this.handlefullname = this.handlefullname.bind(this);
    this.handlemail = this.handlemail.bind(this);
    this.handlephone = this.handlephone.bind(this);
    this.SignUp = this.SignUp.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      laccount :JSON.parse(localStorage.getItem('laccount')) || null,
      lpassword: JSON.parse(localStorage.getItem('lstate')) || null,
      lrepassword: JSON.parse(localStorage.getItem('lstate')) || null,
      lfullname: null,
      lemail: null,
      lphone: null,
      select: "Email",
      redirect:  JSON.parse(localStorage.getItem('redirect')) || false,
      cheackusername: null,
      dataget:[]
    };
  }

  handleUsername(e)
  {
    this.setState({laccount: e.target.value});
  }

  handlePassword(e)
  {
    this.setState({lpassword: e.target.value});
  }

  handleUConfirmPassword(e)
  {
    this.setState({lrepassword: e.target.value});
  }

  handlefullname(e)
  {
    this.setState({lfullname: e.target.value});
  }

  handlemail(e)
  {
    this.setState({lemail: e.target.value});
  }

  handlephone(e)
  {
    this.setState({lphone: e.target.value});
  }

  handleSelect(e)
  {
      this.setState({select: e.target.value});
  }

  componentWillMount()
  {
    api.getData().then(response => {
      console.log('Data fetched', response)
      this.setState({
        dataget: response
      })
    })
  }
  
  SignUp = ()=>
  {
    var check = false;
    var {laccount,lpassword,lrepassword,lfullname,lemail,lphone} = this.state;
    Object.entries(this.state.dataget).map(([key,value],index)=>{
      if(value.account === this.state.laccount)
      {
        check = true;
        return;
      }
    })
    if(check === true){
      alert("tài khoản đã tồn tại");
    }
    else if(!laccount || !lpassword || !lrepassword || !lfullname || !lemail || !lphone) 
    {
      alert("Bạn chưa điền đầy đủ thông tin");
    }
    else if(lpassword!==lrepassword)
    {
      alert("Bạn nhập lại mật khẩu sai! vui lòng kiểm tra lại");
    }
    else
    {
      var datapost = [
        {
          account: laccount,
          password: lpassword,
          name: lfullname,
          email: lemail,
          phone: lphone,
          avatar: "avatar n"
        }
      ]
      Object.entries(datapost).map(([key,val],i)=>{
        api.postData(val).then(response =>{
          this.setState({
            redirect : true,
          },() => {
            localStorage.setItem('redirect', JSON.stringify(this.state.redirect
            ))
          });
        })
      })
    }
  }

  RedirectRender = ()=>{
 
    if(this.state.redirect)
    {
      return <Redirect to = '/'></Redirect>
    }
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
                    Sign Up
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <span className="label-input100">Full Name</span>
                    <input className="input100" type="text" name="name" placeholder="Name..."  onChange = {this.handlefullname}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <span className="label-input100">Email</span>
                    <input className="input100" type="text" name="email" placeholder="Email addess..."  onChange = {this.handlemail}/>
                    <span className="focus-input100" />
                  </div><div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <span className="label-input100">Phone</span>
                    <input className="input100" type="text" name="email" placeholder="Phone number..."  onChange = {this.handlephone}/>
                    <span className="focus-input100" />
                  </div>

                  <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <span className="label-input100">Username</span>
                    <input className="input100" type="text" name="username" placeholder="Username..."  onChange = {this.handleUsername} />
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Password</span>
                    <input className="input100" type="password" name="pass" placeholder="*************"  onChange = {this.handlePassword}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
                    <span className="label-input100">Repeat Password</span>
                    <input className="input100" type="password" name="repeat-pass" placeholder="*************"  onChange = {this.handleUConfirmPassword}/>
                    <span className="focus-input100" />
                  </div>   
                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn" />
                      <button className="login100-form-btn" type = "button"  onClick = {this.SignUp}>
                        {this.RedirectRender()}
                        Continue
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


export default NewSignUp;