import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";
import API from '../Database/APICnn';
import Facebook from './Facebook';
import Google from './Google'
const api = new API();




class NewSignIn extends Component{
  
    constructor(props) {
      super(props);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
      this.signIn = this.signIn.bind(this);
      this.state = {
        laccount :JSON.parse(localStorage.getItem('laccount')) || [],
        lpassword: JSON.parse(localStorage.getItem('lstate')) || [],

        redirect: false,
        data: []
      };
    }

    componentWillMount() {
      api.getData().then(response => {
        console.log('Data fetched', response)
        this.setState({
          data: response
        })
      })
    }


   getInitialState() {
      var selectedOption = localStorage.getItem( 'SelectedOption' ) || 1;
  
      return {
          selectedOption: selectedOption
      };
    }
  
    setSelectedOption( option ) {
          localStorage.setItem( 'SelectedOption', option );
          this.setState( { selectedOption: option } );
      }

    handleUsername(e)
    {
      this.setState({laccount: e.target.value});
    }

    handlePassword(e)
    {
      this.setState({lpassword: e.target.value});
    }

    addProject = (newProject) => {
      this.setState({
        allProjects: this.state.allProjects.concat(newProject)
      },() => {
        localStorage.setItem('allProjects', JSON.stringify(this.state.allProjects))
      });
    }




    putdata = () =>{
      // m tìm kiếm ID muốn replace trong this.state.data tìm bằng user nghe, cái user t đang lưu trong localstorage,
      // m get rồi tìm kiếm id là đc.
       // rồi truyền ID vào hàm push data
      // t bỏ hàm này trong SignIn khi m ấn btn sign nó sẽ replace
      // ví dụ ID = 1;
      var id = 1;
      // nhấn sign in xong kiểm tra console log in ra thành công rồi là ok 
      var data = {
        name: "Lê Hữu Lý",
        avatar: "avatar 1",
        birthday: 1569683675,
        numofbank: "0917644229",
        email: "lehuuly1512313@gmail.com",
        phone: "0338314081"
      }

      api.getDataWithAccountParams('account1');
      }

    signIn = () =>{
      this.putdata();
      var check = '0';
      Object.entries(this.state.data).map(([key,value],i) =>{
        if(value.account === this.state.laccount && value.password === this.state.lpassword)
        {
          check = '1';
        }
      })
      if(check === '0')
        alert("đăng nhập thất bại! tài khoản hoặc mật khẩu không chính xác");
      else
        {
          console.log("đăng nhập thành công");
        
        this.setState({
          laccount: this.state.laccount,
          redirect : true,
          lpassword: this.state.lpassword,
          lstate: this.state.lstate,
        },() => {
          localStorage.setItem('user', this.state.laccount)
        });
        localStorage.setItem('state',JSON.stringify(this.state.lstate));
        localStorage.setItem("logged", true);
        window.location.reload()
        }
  }

  
    

    render(){
      var {redirect} = this.state;
      redirect = localStorage.getItem('redirect');
      var logout = localStorage.getItem('logout');
      if(redirect || logout)
      {
        localStorage.clear();
        window.location.reload();
      }
      if(localStorage.getItem('user'))
      {
        return <Redirect to = '/homepage'></Redirect>
      }
      else{
        return(
            <div>
            <div className="limiter">
            <div className="container-login100">
              <div className="login100-more" style={{backgroundImage: 'url("./signupstyle/images/signup.jpg")'}} />
              <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <form className="login100-form validate-form">
                  <span className="login100-form-title p-b-59">
                    Sign In
                  </span>
                  
                  <div className="wrap-input100 validate-input" data-validate="Username is required">
                    <span className="label-input100">Username</span>
                    <input className="input100" type="text" name="username" placeholder="Username..." name="username" id = 'account' onChange = {this.handleUsername}/>
                    <span className="focus-input100" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Password</span>
                    <input className="input100" type="password" name="pass" placeholder="*************" id = 'password' onChange = {this.handlePassword}/>
                    <span className="focus-input100" />
                  </div>
                  
                  
                  

                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn" />
                      <button className="login100-form-btn" type = "button" onClick = {this.signIn}>
                        Sign In
                      </button>
                      
                    </div>
                    <Link to ="/resgister" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
                      Sign Up
                      <i className="fa fa-long-arrow-right m-l-5" />
                    </Link>
                    
                    <div className = "fbgg">
                        
                        <div class="row">   
                            <div class="col-sm-8"> <span className="label-input100">Or sign in with</span> </div>
                            <div class="col-sm-2">
                                <Facebook></Facebook>
                            
                            </div>
                            <div class="col-sm-2">
                                <Google></Google>
                            
                            </div>
                        </div>
                        
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        )
    }
  }
}


export default NewSignIn;