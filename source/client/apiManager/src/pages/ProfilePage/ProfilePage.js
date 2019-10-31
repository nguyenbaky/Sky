import React, {Component} from "react";
import axios from 'axios'
import {Redirect} from "react-router-dom";
import {Link} from "react-router-dom";
import API from '../Database/APICnn';
const api = new API();

class ProfilePage extends Component{

  constructor(props) {
    super(props);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleLastname = this.handleLastname.bind(this);
    this.handleFirstname = this.handleFirstname.bind(this);
    this.handleoldpassword = this.handleoldpassword.bind(this);
    this.handlenewpassword = this.handlenewpassword.bind(this);
    this.handleconfirmnewpassword = this.handleconfirmnewpassword.bind(this);
    this.edit = this.edit.bind(this);
    this.state = {
      laccount :JSON.parse(localStorage.getItem('laccount')) || [],
      lpassword: JSON.parse(localStorage.getItem('lpassword')) || [],
      account: localStorage.getItem('user') || [],
      first_name: "",
      last_name: "",
      redirect: false,
      data: this.props.data,
      id: 0,
      profile_active: null,
      changepassword_active: "active",
      handlenewpassword: "",
      handleoldpassword: "",
      handleconfirmnewpassword: ""
    };
  }
  componentWillMount() {
       window.scrollTo(0, 0);  
      this.state.data.map(value=>{
        if(value.account === this.state.account)
        {
          var name = value.name.split(" ")
          this.setState({
            ...this.state,
            first_name: name.pop(),
            last_name: name.toString().split(",").join(" "),
            id: value.id,
            phone: value.phone,
            email: value.email,
            avatar: value.avatar
          })
        }
      })

    if(localStorage.getItem("FacebookID"))
      {
        var id = localStorage.getItem("FacebookID");
        var name = localStorage.getItem("FacebookName");
        var avatar = localStorage.getItem("FacebookPicture");
        var email = localStorage.getItem("FacebookUser");
        var names = name.split(" ");
        this.setState({
          ...this.state,
          first_name: names.pop(),
          last_name: names.toString().split(",").join(" "),
          id,
          phone: id,
          email,
          avatar
        })
      }
      if(localStorage.getItem("GoogleID"))
      {
        var id = localStorage.getItem("GoogleID");
        var name = localStorage.getItem("GoogleName");
        var avatar = localStorage.getItem("GooglePicture");
        var email = localStorage.getItem("GoogleUser");
        var names = name.split(" ");
        this.setState({
          ...this.state,
          first_name: names.pop(),
          last_name: names.toString().split(",").join(" "),
          id,
          phone: id,
          email,
          avatar
        })
      }
    
  }
  RenderRedirect = ()=>{
    if(this.state.relodirect)
      return <Redirect to = '/profile'></Redirect>
  }
  reset = ()=>{
    this.setState({
      ...this.state,
      first_name:"",
      last_name:"",
      laccount:"",
      lpassword:""
    })
  }
    edit = () =>{
      axios.put(`http://5d8a1f54b2568e0014d884cb.mockapi.io/api/v1/accounts/${this.state.id}`,{
        account: this.state.laccount,
        password: this.state.lpassword,
        name: this.state.last_name + " " + this.state.first_name 
      })
      .then(response =>{
        console.log(response);
        console.log("1");
      })
      .catch(err => {
        console.log(err);
      });
  
    }
    handleUsername(e)
    {
      this.setState({laccount: e.target.value});
      console.log(this.state.laccount);
    }

    handlePassword(e)
    {
      this.setState({lpassword: e.target.value});
    }
    handleFirstname(e)
    {
      this.setState({first_name: String(e.target.value)});
      console.log(this.state.first_name);
    }
    handleLastname(e)
    {
      this.setState({last_name: String(e.target.value)});
    }

    
   
    onChangeHandler = e =>{
      var file = e.target.files[0]
      console.log(file);
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        this.setState({
          avatar: reader.result
        })
      };
      
      reader.onerror = function (error) {
        console.log('Error: ', error);
      }
    }

    profile = ()=>{
      this.setState({
        profile_active: "active",
        changepassword_active: null
      })
    }

    changepassword = ()=>{
      this.setState({
        profile_active: null,
        changepassword_active: "active"
      })
    }

    handleoldpassword(e)
    {
      e.preventDefault();
      this.setState({handleoldpassword: e.target.value});
    }

    handlenewpassword(e)
    {
      e.preventDefault();
      this.setState({handlenewpassword: e.target.value});
    }

    handleconfirmnewpassword(e)
    {
      e.preventDefault();
      this.setState({handleconfirmnewpassword: e.target.value});
    }

    Re_render = ()=>{
      if(this.state.profile_active){
        return(
                        <div className="tab-content">
                <div className="tab-pane active" id="home">
                 
                  <div className="form" id="registrationForm">
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="first_name" ><h4>First name</h4></label>
                        <input type="text" className="form-control"  name="first_name" id="first_name"  value={this.state.first_name} title="enter your first name if any." onChange={this.handleFirstname} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="last_name" ><h4>Last name</h4></label>
                        <input type="text" className="form-control"   name="last_name" id="last_name" value={this.state.last_name} title="enter your last name if any." onChange={this.handleLastname}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="phone" ><h4>Phone</h4></label>
                        <input type="text" className="form-control"  name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." value = {this.state.phone}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="mobile" ><h4>Card Number</h4></label>
                        <input type="text" className="form-control"  name="mobile" id="mobile" placeholder="enter card number" title="enter your mobile number if any." />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="account" ><h4>Username</h4></label>
                        <input type="text" className="form-control"  name="email" id="email" onChange={this.handleUsername} value={this.state.account}/>
                      </div>
                    </div>
                   
                   
                    <div className="form-group">
                      <div className="col-xs-6">
                        <label htmlFor="email" ><h4>email</h4></label>
                        <input type="text" className="form-control"  name="email" id="email"  title="enter your password2." value={this.state.email}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-xs-12">
                        <br />
                        {this.RenderRedirect}
                        <button className="btn btn-lg btn-success" onClick={this.edit}><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                        <button className="btn btn-lg" type="reset" onClick={this.reset}><i className="glyphicon glyphicon-repeat" /> Reset</button>
                      </div>
                    </div>
                  </div>
                </div> 
          </div>
        )
      }
      if(this.state.changepassword_active)
      {
        return(
          <div className="tab-content">
          <div className="tab-pane active" id="home">
           
            <div className="form" id="registrationForm">
            
              <div class="row">
                  <div class="col-sm-6">
                  <label ><h4>Current password</h4></label>
                  <input className="form-control" type="password" name="oldpassword" placeholder="Current password..." name="oldpassword" id = 'oldpassword' value = {this.state.handleoldpassword} onChange = {this.handleoldpassword}/>
                  </div>
                  <div class="col-sm-6">
                  </div>
              </div>

              <div class="row">
                  <div class="col-sm-6">
                  <label ><h4>New password</h4></label>
                  <input className="form-control"  type="password" name="newpassword" placeholder = "New password..." id = 'newpassword' value = {this.state.handlenewpassword} onChange = {this.handlenewpassword}/>
                  </div>
                  <div class="col-sm-6">
                  </div>
              </div>

              <div class="row">
                  <div class="col-sm-6">
                  <label ><h4>Confirm new password</h4></label>
                  <input className="form-control"  type="password" name="confirmnewpassword" placeholder = "New password..." id = 'confirmnewpassword' value = {this.state.handleconfirmnewpassword} onChange = {this.handleconfirmnewpassword}/>
                  </div>
                  <div class="col-sm-6">
                  </div>
              </div>
       
              <div className="form-group">
                <div className="col-xs-12">
                  <br />
                  {this.RenderRedirect}
                  <button className="btn btn-lg btn-success" onClick={this.edit}><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                  <button className="btn btn-lg" type="reset" onClick={this.reset}><i className="glyphicon glyphicon-repeat" /> Reset</button>
                </div>
              </div>
            </div>
            
          </div>
          
    </div>
        )
      }
    }

    render(){
        return(
          <div>
        <div className="container bootstrap snippet">
          <div className="row">
            
           
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="text-center">
                <img src={this.state.avatar} className="avatar img-circle img-thumbnail" alt="avatar" />
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center center-block file-upload" onChange={this.onChangeHandler} webkitRelativePath/>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">Website <i className="fa fa-link fa-1x" /></div>
                <div className="panel-body"><Link to = "/">SoundAPI.com</Link></div>
              </div>
             
              <div className="panel panel-default">
                <div className="panel-heading">Social Media</div>
                <div className="panel-body">
                  <i className="fa fa-facebook fa-2x" /> <i className="fa fa-github fa-2x" /> <i className="fa fa-twitter fa-2x" /> <i className="fa fa-pinterest fa-2x" /> <i className="fa fa-google-plus fa-2x" />
                </div>
              </div>
            </div>{/*/col-3*/}
            <div className="col-sm-9">
              <ul className="nav nav-tabs">
                <li className={this.state.profile_active} onClick = {this.profile} style = {{cursor: "pointer"}}><a data-toggle="tab" >Profile</a></li>
                <li className={this.state.changepassword_active} onClick = {this.changepassword} style = {{cursor: "pointer"}}><a data-toggle="tab" >Change password</a></li>
              </ul>
              {this.Re_render()}
        </div>{/*/row*/}

      </div>
                </div>
                </div>
        )
    }
        
}

export default ProfilePage;