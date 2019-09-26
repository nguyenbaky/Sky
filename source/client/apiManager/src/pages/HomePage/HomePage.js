import React, {Component} from "react";
import {Link} from "react-router-dom"
import Footer from  "./../../components/Footer/Footer"
class HomePage extends Component{



    render(){
        return(
            <div>
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

                <div class="site-section">
                <div class="container">
                    <div class="row mb-5 justify-content-center text-center">
                    <div class="col-lg-4 mb-5">
                        <h2 class="section-title-underline mb-5">
                        <span>Why Academics Works</span>
                        </h2>
                    </div>
                    </div>
                    <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">

                        <div class="features-1 feature-1 border">
                        
                        <div class="feature-1-content">
                            <h2>Api Voice Into Word</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><a href="#" class="btn btn-primary px-4 rounded-0">Learn More</a></p>
                        </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="features-1 feature-1 border">
                       
                        <div class="feature-1-content">
                            <h2>Api Word Into Voice</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><a href="#" class="btn btn-primary px-4 rounded-0">Learn More</a></p>
                        </div>
                        </div> 
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="features-1 feature-1 border">
                        
                        <div class="feature-1-content">
                            <h2>Api English Into Vietnamese</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi hendrerit elit</p>
                            <p><Link to = "/products" class="btn btn-primary px-4 rounded-0">Learn More</Link></p>
                        </div>
                        </div> 
                    </div>
                    </div>
                </div>
    </div>



              <Footer></Footer>
            </div>

        )
    }
}


export default HomePage;