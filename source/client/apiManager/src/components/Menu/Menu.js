import React, {Component} from "react";
import {Link} from "react-router-dom"
class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
          maccount :JSON.parse(localStorage.getItem('laccount')) || '',
          mpassword: JSON.parse(localStorage.getItem('lpassword')) || '',
          user: localStorage.getItem('user'),
          logged_out: 'Sign Up',
          llink: 'resgister'
        };
      }


    render(){
        var name = 'login';
        if(this.state.user !== null)
        {
            name = this.state.user;
        }

        
        return(

                <div id="padding-sticky" className="header">
                    <div id="sticky-header" >
                        <Link to = "/">
                        <div id="branding" >
                            {/* <img alt = "Image" src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" className="img-responsive" /> */}
                            <h3><strong>SOU</strong>nd API</h3>
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
                            <li className="hov alway"><a href="google.com">Customers</a></li>
                            <li className="hov alway"><a href="google.com">Resources</a></li>
                            <li className="alway"><a href="google.com">Research</a></li>
                            <li className="alway"><a href="google.com">Blog</a></li>
                            <li className="alway"><a href="google.com">About Us</a> </li>
                        </ul>
                        </nav>
                        <div className = "toggle"><i className="fa fa-bars menu"></i></div>
                        <div id="log-sig">
                            <Link to ={`/${name}`}><span id="login">{name}</span></Link>
                            <Link to = "/adasdasdasd"><span id="sign-up">sadasdasdsa</span></Link>
                        </div>
                        
                    </div>

                    <div>
                </div>
                </div>
        )
    }
}


export default Menu;