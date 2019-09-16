import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div id = "containers">
      <div id="top-header" className="hello"><a href="google.com">HackerRank Projects now supports key data science skills. Identify and assess top data science candidates through project-based, real-world challenges.</a></div>    
        <div id="padding-sticky" className="header">
          <div id="sticky-header" >
            <div id="branding" >
              <img src="https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png" className="img-responsive" alt="Image" />
            </div>
            <nav id = "togle">
              <ul id = "res">
                <li className="hov alway"><a href="google.com">Products</a>
                  <ul>
                    <li><a href="gl">Find the job</a></li>
                    <li><a href="gl">Fibonacci on top</a></li>
                    <li><a href="gl">Buy the car on shop</a></li>
                  </ul>
                </li>
                <li className="hov alway"><a href="google.com">Customers</a></li>
                <li className="hov alway"><a href="google.com">Resources</a></li>
                <li className="alway"><a href="google.com">Research</a></li>
                <li className="alway"><a href="google.com">Blog</a></li>
                <li className="alway"><a href="google.com">About Us</a> </li>
              </ul>
            </nav>
            <div className = "toggle"><i class="fa fa-bars menu"></i></div>
            <div id="log-sig">
              <span id="login">Login</span>
              <span id="sign-up">Sign Up</span>
            </div>
          </div>
        </div>
        <section id="sec-1">
          <span id="join-over">
            Join over <strong>5 million developers</strong>.
          </span>
          <span id="practice">
            Practice coding, prepare for interviews, and get hired.
          </span>
          <div id="btn-sign">
            <div className="btn btn1">Sign Up &amp; Code</div>
          </div>
          {/* 
        <div id="hiring">
            <p>
                <span>
                    <a href="google">
                        Contact Us
                    </a>
                </span>
            </p>
        </div> */}
        </section>
        <section id="sec-1">
          <span id="join-over">
            Join over <strong>5 million developers</strong>.
          </span>
          <span id="practice">
            Practice coding, prepare for interviews, and get hired.
          </span>
          <div id="btn-sign">
            <div className="btn btn1">Sign Up &amp; Code</div>
          </div>
          {/* 
        <div id="hiring">
            <p>
                <span>
                    <a href="google">
                        Contact Us
                    </a>
                </span>
            </p>
        </div> */}
        </section>
        <section id="sec-1">
          <span id="join-over">
            Join over <strong>5 million developers</strong>.
          </span>
          <span id="practice">
            Practice coding, prepare for interviews, and get hired.
          </span>
          <div id="btn-sign">
            <div className="btn btn1">Sign Up &amp; Code</div>
          </div>
          {/* 
        <div id="hiring">
            <p>
                <span>
                    <a href="google">
                        Contact Us
                    </a>
                </span>
            </p>
        </div> */}
        </section>

       
      </div>
    );
  }
}

export default App;
