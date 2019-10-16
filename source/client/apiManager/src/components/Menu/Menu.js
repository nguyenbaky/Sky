import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";
import API from '../../pages/Database/APICnn';
import Avatar from 'react-avatar';
import '../../App.css'
const api = new API();

class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
          maccount :JSON.parse(localStorage.getItem('laccount')) || '',
          mpassword: JSON.parse(localStorage.getItem('lpassword')) || '',
          user: localStorage.getItem('user'),
          facebookuser: localStorage.getItem('FacebookUser'),
          googleuser: localStorage.getItem("GoogleUser"),
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


    onClick_LogOutOrSignUp = ()=>{
        if(this.state.user || this.state.facebookuser || this.state.googleuser)
        {
        localStorage.clear();
        this.setState({
            redirect: true,
            
        })
        localStorage.setItem("logout", true);
    }
    }


    RenderRedirect = ()=>{
        if(this.state.redirect)
          {
              return <Redirect to = '/'></Redirect>
            }
      }

    render(){
        var name = 'Login';
        var log_out = 'Sign Up';
        var link = 'resgister';
        var iconlogin_profile = "fa fa-sign-in";
        var iconsingup_logout = "fa fa-user-plus";
        var substring = '';
        var avatar = './servicesStyle/images/avatar.png';

        if(this.state.facebookuser)
        {
            log_out = 'Log out';
            iconsingup_logout = "fa fa-sign-out";
            link = '';
            name = localStorage.getItem('FacebookName');
            iconlogin_profile = "fa fa-facebook-official";
            avatar = localStorage.getItem('FacebookPicture');
        }

        if(this.state.googleuser)
        {
            log_out = 'Log out';
            iconsingup_logout = "fa fa-sign-out";
            link = '';
            name = localStorage.getItem('GoogleName');
            iconlogin_profile = "fa fa-google";
            avatar = localStorage.getItem('GooglePicture');
        }
       
        if(this.state.user)
        {
            substring = this.state.user.slice(1,-1);
            log_out = 'Log out';
            iconsingup_logout = "fa fa-sign-out";
            link = '';
            Object.entries(this.state.data).map(([key,value],i)=>{
                if(value.account === substring)
                {
                    name = value.name;
                    iconlogin_profile = "fa fa-user";
                    avatar = value.avatar;
                }
            });
        }

        return(
                
                <div id="padding-sticky" className="header">
                    <div id="sticky-header" >
                        <Link to = "/">
                        <div id="branding" >
                            {/* <img alt = "Image" src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" className="img-responsive" /> */}
                            <h3 style={{marginTop:"15px"}}><strong>DASHBOARD</strong></h3>
                        </div>
                        </Link>
                        <nav id = "togle">
                        <ul id = "res">
                            <li className="hov alway"><a href="google.com">Products</a>
                            <ul>
                                <li><a href="gl">Api Voice Into Words</a></li>
                                <li><a href="gl">Api Word Into Voice</a></li>
                                <li><Link to="/products">Api English Into VietNamese</Link></li>
                            </ul>
                            </li>
                            <li className="hov alway"><Link to = "/profile">Customers</Link></li>
                            <li className="hov alway"><Link to = "/products">Resources</Link></li>
                            <li className="alway"><Link to = "/contacts">Contact</Link></li>
                            <li className="alway"><Link to = "/about">About Us</Link> </li>
                            
                        </ul>
                        </nav>
                        <div className = "toggle"><i className="fa fa-bars menu"></i></div>
                        {this.RenderRedirect()}
                        <div className = "dropdown">
                            <Avatar src= {avatar} size="50"  round = {true} className = "avatar-header"/>
                                <div class="dropdown-content">
                                    <Link to ={`/${name}`} className = "Link"><span><i class={iconlogin_profile} aria-hidden="true"></i>{"  "}{name}</span></Link>
                                    <Link to = {`/${link}`} className = "Link"><span onClick = {this.onClick_LogOutOrSignUp}><i class={iconsingup_logout} aria-hidden="true"></i>{"  "}{log_out}</span></Link>
                                </div>
                           </div>
                            <span id = "btn-menu-hidden" ><i class="fa fa-bars fa-menu-hidden" aria-hidden="true"></i></span>
                            <div className= "sticky-header-show-nobackground"></div>   
                    </div>

                    <div className = "sticky-header-block" >
                        <div>
                            <nav id = "togle-block" >
                                <div id = "btn-cancle-icon"><i class="fa fa-times fa-cancle-icon" aria-hidden="true"></i></div>
                        <ul className = "spaceClickReturnWhiteColor">
                            <li><a href="/products">Products</a>
                            <ul>
                                <li><a href="gl">Api Voice Into Words</a></li>
                                <li><a href="gl">Api Word Into Voice</a></li>
                                <li><Link to="/products">Api English Into VietNamese</Link></li>
                            </ul>
                            </li>
                            <li ><Link to = "/profile">Customers</Link></li>
                            <li ><Link to = "/products">Resources</Link></li>
                            <li ><Link to = "/contacts">Contact</Link></li>
                            <li ><Link to = "/about">About Us</Link> </li>
                        </ul>
                        </nav>
                        </div>
                    </div>
                </div>
        )
    }
}


export default Menu;