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
        this.products = this.products.bind(this);
        this.Create_Key = this.Create_Key.bind(this);
        this.Resources = this.Resources.bind(this);
        this.Contacts = this.Contacts.bind(this);
        this.about = this.about.bind(this);
        var about = window.location.pathname === "/about"? "alway actived":"alway";
        var Contacts = window.location.pathname === "/contacts"? "alway actived":"alway";
        var Resources = window.location.pathname === "/products"? "alway actived":"alway";
        var Create_Key = window.location.pathname === "/profile"? "alway actived":"alway";
        var products = window.location.pathname === "/products"? "alway actived":"alway";
        this.state = {
          maccount :JSON.parse(localStorage.getItem('laccount')) || '',
          mpassword: JSON.parse(localStorage.getItem('lpassword')) || '',
          user: localStorage.getItem('user'),
          facebookuser: localStorage.getItem('FacebookUser'),
          googleuser: localStorage.getItem("GoogleUser"),
          redirect: false,
          data: [],
          products: "alway",
          Create_Key,
          Resources,
          Contacts,
          about
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

    products = ()=>{
        this.setState({
            products: "alway actived",
          Create_Key: "alway",
          Resources: "alway",
          Contacts: "alway",
          about: "alway"
        })
    }
    Create_Key = ()=>{
        this.setState({
            products: "alway",
          Create_Key: "alway actived",
          Resources: "alway",
          Contacts: "alway",
          about: "alway"
        })
    }

    Resources = ()=>{
        this.setState({
            products: "alway",
          Create_Key: "alway",
          Resources: "alway actived",
          Contacts: "alway",
          about: "alway"
        })
    }

    Contacts = ()=>{
        this.setState({
            products: "alway",
          Create_Key: "alway",
          Resources: "alway",
          Contacts: "alway actived",
          about: "alway"
        })
    }

    about = ()=>{
        this.setState({
            products: "alway",
          Create_Key: "alway",
          Resources: "alway",
          Contacts: "alway",
          about: "alway actived"
        })
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
            substring = this.state.user;
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
                
                <div id="padding-sticky" className="header" style = {{display: `${this.props.display}`}}>
                    <div id="sticky-header" >
                        <Link to = "/">
                        <div id="branding" >
                            {/* <img alt = "Image" src="https://www.hackerrthank.com/wp-content/uploads/2018/08/hackerrank_logo.png" className="img-responsive" /> */}
                            <h2 style={{marginTop:"15px", color: "#3b5998", fontWeight: "bold"}}>Dashboard</h2>
                        </div>
                        </Link>
                        <nav id = "togle">
                        <ul id = "res">
                            <li className={this.state.products} onClick={this.products}><a href="google.com">Products</a>
                            <ul>
                                <li><a href="gl">Api Voice Into Words</a></li>
                                <li><a href="gl">Api Word Into Voice</a></li>
                                <li><Link to="/products">Api English Into VietNamese</Link></li>
                            </ul>
                            </li>
                            <li className={this.state.Create_Key} onClick={this.Create_Key}><Link to = "/profile">Create key</Link></li>
                            <li className={this.state.Resources} onClick={this.Resources}><Link to = "/products">Resources</Link></li>
                            <li className={this.state.Contacts} onClick={this.Contacts}><Link to = "/contacts">Contact</Link></li>
                            <li className={this.state.about} onClick={this.about}><Link to = "/about">About Us</Link> </li>
                            
                        </ul>
                        </nav>
                        <div className = "toggle"><i className="fa fa-bars menu"></i></div>
                        {this.RenderRedirect()}
                        <div className = "dropdown">
                            <Avatar src= {avatar} size="50"  round = {true} className = "avatar-header" style ={{marginTop: '5px'}}/>
                                <div class="dropdown-content">
                                    <Link to ={`/${name}`} className = "Link"><span><i class={iconlogin_profile} aria-hidden="true"></i>{"  "}{name}</span></Link>
                                    <Link to = {`/${link}`} className = "Link"><span onClick = {this.onClick_LogOutOrSignUp}><i class={iconsingup_logout} aria-hidden="true"></i>{"  "}{log_out}</span></Link>
                                </div>
                           </div>
                            <span id = "btn-menu-hidden" ><i class="fa fa-bars fa-menu-hidden" aria-hidden="true"></i></span>
                            <div className= "sticky-header-show-nobackground"></div>   
                    </div>

                </div>
        )
    }
}


export default Menu;