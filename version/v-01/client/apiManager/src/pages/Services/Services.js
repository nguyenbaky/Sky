import React, {Component} from "react";
import {Link} from "react-router-dom"
import MenuPage from './../../components/Menu/Menu'
import Footer from "../../components/Footer/Footer";
class Services extends Component{
    render(){
        return(
            


       
            <div>
                 <div id="top-header" className="hello">
                    <div id = "contact-header">
                        <span className = "green-color mr-r-50"><i className="fa fa-question-circle-o green-color icon-mr-r-10" aria-hidden="true"></i>Have a question?</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-phone green-color icon-mr-r-10" aria-hidden="true"></i>0344 656 534</span>
                        <span className = "green-color mr-r-50"><i className="fa fa-envelope-o green-color icon-mr-r-10" aria-hidden="true"></i>sound@myapi.com</span>
                    </div>

                <div class="ml-auto">
                    <div class="social-wrap">
                    <a href="#"><span class="icon-facebook"><i class="fa fa-facebook" aria-hidden="true"></i></span></a>
                    <a href="#"><span class="icon-twitter"><i class="fa fa-twitter" aria-hidden="true"></i></span></a>
                    <a href="#"><span class="icon-linkedin"><i class="fa fa-instagram" aria-hidden="true"></i></span></a>

                    <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                        class="icon-menu h3"></span></a>
                </div>
            </div>                

                </div>   
                <MenuPage match = {this.props.match}></MenuPage>
    
            <div className="site-wrap">
       
              <div className="site-section">
                <div className="container">
                  <div className="row row-center">
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="a">
                          <a href="course-single.html"><img src="servicesStyle/images/course_1.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p id = "pd-10"><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Buy this package</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_2.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Buy this package</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_3.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Buy this package</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_4.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Buy this package</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_5.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Buy this package</a></p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="course-1-item">
                        <figure className="thumnail">
                          <a href="course-single.html"><img src="servicesStyle/images/course_6.jpg" alt="Image" className="img-fluid" /></a>
                          <div className="price">$99.00</div>
                          <div className="category"><h3>Mobile Application</h3></div>  
                        </figure>
                        <div className="course-1-content pb-4">
                          <h2>How To Create Mobile Apps Using Ionic</h2>
                          <div className="rating text-center mb-3">
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                            <span className="icon-star2 text-warning" />
                          </div>
                          <p className="desc mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique accusantium ipsam.</p>
                          <p><a href="course-single.html" className="btn btn-primary rounded-0 px-4">Buy this package</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
          
            </div>
            {/* .site-wrap */}
            {/* loader */}
            <Footer></Footer>
            </div>

        )
    }
}


export default Services;