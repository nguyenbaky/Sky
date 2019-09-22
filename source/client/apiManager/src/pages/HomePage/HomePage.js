import React, {Component} from "react";
import {Link} from "react-router-dom"
import MenuPage from './../../components/Menu/Menu'
class HomePage extends Component{
    render(){
        return(
            <div>
                            <div id="top-header" className="hello"><a href="google.com">HackerRank Projects now supports key data science skills. Identify and assess top data science candidates through project-based, real-world challenges.</a></div>    
                <MenuPage/>
                   <section id="showcase" className="showcase">
                <div className="container">
                    <h1>Affordable Professional Web Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu luctus ipsum, rhoncus semper magna. Nulla nec magna sit amet sem interdum condimentum.</p>
                </div>
                </section>
                <section id="newsletter">
                <div className="container">
                    <h1>Subscribe To Our Newsletter</h1>
                    <form>
                    <input type="email" placeholder="Enter your email..." />
                    <button type="submit" className="btn-sub">Subscribe</button>
                    </form>
                </div>
                </section>
              
                <section id="sec-1">
                <span id="join-over">
                    Join over <strong>5 million developers</strong>.
                </span>
                <span id="practice">
                    Practice coding, prepare for interviews, and get hired.
                </span>
                
                    <div id="btn-sign">
                    <Link className = "btnSign" to = "/login">
                        <div className="btns btn1">Sign Up &amp; Code</div>
                    </Link>
                    </div>
                
                </section>


               <footer>
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                        <h3>Site Map</h3>
                        <ul className="list-unstyled three-column">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Code</li>
                            <li>Design</li>
                            <li>Host</li>
                            <li>Contact</li>
                            <li>Company</li>
                        </ul>
                        <ul className="list-unstyled socila-list">
                            <li><img src="http://placehold.it/48x48" alt="" /></li>
                            <li><img src="http://placehold.it/48x48" alt="" /></li>
                            <li><img src="http://placehold.it/48x48" alt="" /></li>
                            <li><img src="http://placehold.it/48x48" alt="" /></li>
                            <li><img src="http://placehold.it/48x48" alt="" /></li>
                            <li><img src="http://placehold.it/48x48" alt="" /></li>
                        </ul>
                        </div>
                        <div className="col-lg-4 col-md-6">
                        <h3>latest Articles</h3>
                        <div className="media">
                            <a href="#" className="pull-left">
                            <img src="http://placehold.it/64x64" alt="" className="media-object" />
                            </a>
                            <div className="media-body">
                            <h4 className="media-heading">Programming</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="media">
                            <a href="#" className="pull-left">
                            <img src="http://placehold.it/64x64" alt="" className="media-object" />
                            </a>
                            <div className="media-body">
                            <h4 className="media-heading">Coding</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="media">
                            <a href="#" className="pull-left">
                            <img src="http://placehold.it/64x64" alt="" className="media-object" />
                            </a>
                            <div className="media-body">
                            <h4 className="media-heading">Web Sesign</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <h3>Our Work</h3>
                        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                        <img className="img-thumbnail" src="http://placehold.it/150x100" alt="" />
                        </div>
                    </div>
                    </div>
                    <div className="copyright text-center">
                    Copyright © 2017 <span>Your Template Name</span>
                    </div>
                </footer>
            </div>

        )
    }
}


export default HomePage;