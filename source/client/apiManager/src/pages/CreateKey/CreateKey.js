import React, {Component} from "react";
import API from './../../pages/Database/APICnn';
import '../../App.css';
import {Redirect} from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactDOM from "react-dom"
const api = new API();
class CreateKey extends Component{

  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.dashboard = this.dashboard.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.check = this.check.bind(this);
    this.state = {
      maccount :JSON.parse(localStorage.getItem('laccount')) || '',
      mpassword: JSON.parse(localStorage.getItem('lpassword')) || '',
      user: localStorage.getItem('user'),
      facebookuser: localStorage.getItem('FacebookUser'),
      googleuser: localStorage.getItem("GoogleUser"),
      data: [],
      key: "yourkey",
      copied: false,
      name : "",
      select: "Free Trial",
      check: false
    };
  }

  componentDidUpdate() {
    ReactDOM.findDOMNode(this).scrollLeft = 0;
  }

  componentWillMount() {
    if(localStorage.getItem("FacebookUser"))
    {
      this.setState({
        ...this.state,
        name: localStorage.getItem('FacebookName'),
        email: localStorage.getItem('FacebookUser')
      })
    }
    if(localStorage.getItem("GoogleUser"))
    {
      this.setState({
        ...this.state,
        name: localStorage.getItem('GoogleName'),
        email: localStorage.getItem('GoogleUser')
      })
    }
    if(localStorage.getItem("user"))
    {
    api.getData().then(response => {
      this.setState({
        data: response
      })
      var user = localStorage.getItem("user");
      this.state.data.map(value=>{
        if(value.account === user)
        {
          this.setState({
            ...this.state,
            name: value.name,
            email: value.email,
            phone: value.phone
          })
        }
      })
    })
  }
    
  if(this.state.user == null ){
  }
  }


  handleSelect(e)
  {
      this.setState({select: e.target.value});
  }

  async check(e)
  {
    var ch = this.state.check;
    var cb = !ch;
    await this.setState({check: cb});
    console.log(this.state.check);
  }


create = async () =>{
  var userid = "";
  if(await localStorage.getItem("id")){
    userid = localStorage.getItem("id");
  }
  if(await localStorage.getItem("FacebookID"))
  {
    userid = localStorage.getItem("FacebookID")
  }
  if(await localStorage.getItem("GoogleID"))
  {
    userid = localStorage.getItem("GoogleID")
  }
  var data = {
    method: "get-key",
    id: "0",
    type: this.state.select,
    user: userid,
    start: Date.now()
  }

  api.GenKey(data).then(response =>{
    this.setState({
      key: response.data
    })  
  })

}

dashboard = ()=>{
  localStorage.setItem("dashboard" , true);
  window.location.reload();
}

    render(){
        let name = this.state.name
        let email = this.state.email
        let card = this.state.bank
        if(localStorage.getItem("dashboard"))
        {
          localStorage.removeItem("dashboard")
          return <Redirect to="/dashboard"></Redirect>
        }
        return(

          
            <div>
              
              <div id="backgroundForm"><div id="supCredit">
                  <span id="card1">
                      <img src="credit1.png"></img>
                  </span>
                  <h2>Access to all Platform products</h2>
                  <p>Get all the resources you need to build and run your apps, websites, and services, including Firebase and the Convert API.</p>
                <h2>$ 300 credit offered</h2>
                    <p>Sign up and get a $ 300 credit on the Google Cloud Platform for 12 months.</p>
                    <h2>No direct debit after the free trial</h2>
                    <p>We ask you to enter your credit card information to verify that you are not a robot. Your account will not be charged unless you decide to manually upgrade to a paid account.</p>
                </div></div>
              
            <div className="form-style-10">
                  
        <h1>Create Key Now<span>Fill out the information to get the key!</span></h1>
        <form >
          <div className="section"><span>1</span>Your Information </div>
          <div className="inner-wrap">
            <label style={{color: "black"}}>Your Full Name <input type="text" name="field1" value = {name} readOnly /></label>
         </div>
          <div className="section"><span>2</span>Credit Card &amp; Paypal</div>
          <div className="inner-wrap">
            <label  style={{color: "black"}}>Pay <input type="email" name="field3" value="Viet Nam" readOnly/></label>
            <label  style={{color: "black"}}>Card Number <input  style={{color: "black"}} type="text" name="field4" value={card} /></label>
          </div>
          <div className="section"><span>3</span>Key will be send to your email &amp; phone number </div>
          <div className="inner-wrap">
            <label  style={{color: "black"}}>Your email <input type="email" name="field5"  value ={email}/></label>
            <label  style={{color: "black"}}>Your phone number<input type="text" name="field6" value = {this.state.phone}/></label>
          </div>
          <div className="section"><span>4</span>Pick package you want trial </div>
          <div className="inner-wrap">
          <select style = {{outline: "none"}} onChange={this.handleSelect} value={this.state.select}>
                <option value="Free Trial">Free Trial</option>
                <option value="1 Mounth">1 Mounth (0.25 $)</option>
                <option value="3 Mounth">3 Mounth (0.5 $)</option>
                <option value="6 Mounth">6 Mounth (1 $)</option> 
                <option value="9 Mounth">9 Mounth (2 $)</option>
                <option value="12 Mounth">12 Mounth (5 $)</option>
                <option value="Unlimited">Unlimited</option> 
          </select>
          </div>
          <div className="button-section">
            <input type="button" value = "Create" name="Sign Up"  class="btn btn-primary" onClick = {this.create} data-toggle="modal" href='#modal-id'/>
            
          </div>
        </form>
      </div>
          <div class="modal fade" id="modal-id">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Your key</h4>
                </div>
                <div class="modal-body">
                <input type="text" name="" id="input" class="form-control" value={this.state.key}/>
                </div>
                <div class="modal-footer">
                <CopyToClipboard text={this.state.key}
                        onCopy={() => this.setState({copied: true})}>
                         <button type="button" class="btn btn-success" >COPY</button>
                    </CopyToClipboard>
                {this.state.copied ? <span style={{color: 'red'}}>Copied.</span> : null}
              
                  <button type="button" class="btn btn-default" onClick = {this.dashboard}>DONE</button>
                 
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}


export default CreateKey;