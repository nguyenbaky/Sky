import React, {Component} from "react";
import {Link} from "react-router-dom";
import list_account from "../../pages/Database/JsonDB";
import {Redirect} from "react-router-dom";
import API from '../../pages/Database/APICnn';
const api = new API();

class Menu extends Component{

    constructor(props) {
        super(props);
        this.state = {
          maccount :JSON.parse(localStorage.getItem('laccount')) || '',
          mpassword: JSON.parse(localStorage.getItem('lpassword')) || '',
          user: localStorage.getItem('user'),
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
        if(this.state.user!==null)
        {localStorage.clear();
        this.setState({
            redirect: true
        })
        window.location.reload();}
    }


    RenderRedirect = ()=>{
        if(this.state.redirect)
          {
              return <Redirect to = ''></Redirect>
            }
      }

    render(){
        var name = 'login';
        var log_out = 'Sign Up';
        var link = 'resgister';
        var substring = '';
        var { match } = this.props;
        if(this.state.user!== null)
        {
            substring = this.state.user.slice(1,-1);
            log_out = 'Log out';
            link = '';
            Object.entries(this.state.data).map(([key,value],i)=>{
                if(value.account === substring)
                {
                    name = value.name;
                }
            });
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
                        {this.RenderRedirect(match.url)}
                        <div id="log-sig">
                            <Link to ={`/${name}`}><span id="login">{name}</span></Link>
                            <Link to = {`/${link}`}><span id="sign-up" onClick = {this.onClick_LogOutOrSignUp}>{log_out}</span></Link>
                        </div>
                        
                    </div>

                    <div>
                </div>
                </div>
        )
    }
}


export default Menu;