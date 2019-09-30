import React, { Component } from 'react';


class TopHeader extends Component {
    render() {

        return (
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
                        </div>
                    </div>                
            </div>   
        );
    }
}







export default TopHeader;