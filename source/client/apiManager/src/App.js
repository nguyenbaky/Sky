import React, { Component } from 'react';

import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import MenuPage from './components/Menu/Menu'
import TopHeader from './components/TopHeader/TopHeader'
import Footer from "./components/Footer/Footer"
import API from '././pages/Database/APICnn';

import HomePage from './pages/HomePage/HomePage'
import AdminPage from "./pages/AdminPage/AdminPage";
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts"
import About from "./pages/About/About"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import CreateKey from "./pages/CreateKey/CreateKey"
import Demo from "./pages/Demo/Demo";
import NewSignUp from "./pages/SignUpPage/NewSignUp";
import NewSignIn from "./pages/LoginPage/NewSignIn";


const api = new API();



class App extends Component {

  routes = [
    {
      path: "/homepage",
      main: ({match}) => <CreateKey match = {match} data = {this.props.data}/>
    },
    {
      path: "/dashboard",
      main: ({match,history}) => <HomePage match = {match} history = {history} data = {this.props.data}/>
    },
    {
      path: "/",
      exact: true,
      main: ({match, history}) => <NewSignIn match = {match} history = {history} data = {this.props.data}/>
    },

    {
      path: "/demo",
      main: ({match, history}) => <Demo match = {match} history = {history} data = {this.props.data}/>
    },
    {
      path: "/admin",
      main: ({match}) => <AdminPage data = {this.props.data}/>
    },
    {
      path: "/resgister",
      main: ({match}) => <NewSignUp data = {this.props.data}/>
    },
    {
      path: "/products",
      main: ({match}) => <Services match = {match} data = {this.props.data}/>
    },
    {
      path: "/contacts",
      main: ({match}) => <Contacts match = {match} data = {this.props.data}/>
    },
    {
      path: "/About",
      main: ({match}) => <About match = {match} data = {this.props.data}/>
    },
    {
      path: "/profile",
      main: ({match}) => <ProfilePage match = {match} data = {this.props.data}/>
    }
    ,
    {
      path: "/:id",
      main: ({match}) => <ProfilePage match = {match} data = {this.props.data}/>
    }
]
  render() {
    var state = localStorage.getItem('state');
    if(state)
    {
        window.location.reload();
        localStorage.removeItem('state');
    }
    var display = "none";
    if(localStorage.getItem("user") || localStorage.getItem("FacebookUser") ||  localStorage.getItem("GoogleUser")) 
    {
      display= 'block';
    }
    return (
        <Router onUpdate={()=> {
          window.scrollX = 0;
          window.scrollY = 0;
        }}>
           <TopHeader display = {display} />
            <MenuPage display = {display} data = {this.props.data}/>
          <div >
          <link  rel="stylesheet" href="./servicesStyle/css/style.css"/>
         
            {this.showContentMenu(this.routes)}
          </div>
          <Footer display = {display}/>
        </Router>
    );
  }

  showContentMenu = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((routes, index) => {
        return <Route key={index} path={routes.path} component={routes.main} exact = {routes.exact} />;
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
