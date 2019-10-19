import React from "react";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AdminPage from "./pages/AdminPage/AdminPage";
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Services from "./pages/Services/Services";
import Contacts from "./pages/Contacts/Contacts"
import About from "./pages/About/About"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import CreateKey from "./pages/CreateKey/CreateKey"
import Demo from "./pages/Demo/Demo";
import NewSignUp from "./pages/SignUpPage/NewSignUp";
import NewSignIn from "./pages/LoginPage/NewSignIn";


const routes = [
    {
      path: "/homepage",
      main: ({match}) => <CreateKey match = {match}/>
    },
    {
      path: "/dashboard",
      main: ({match,history}) => <HomePage match = {match} history = {history}/>
    },
    {
      path: "/",
      exact: true,
      main: ({match, history}) => <NewSignIn match = {match} history = {history}/>
    },

    {
      path: "/demo",
      main: ({match, history}) => <Demo match = {match} history = {history}/>
    },
    {
      path: "/admin",
      main: ({match}) => <AdminPage/>
    },
    {
      path: "/resgister",
      main: ({match}) => <NewSignUp/>
    },
    {
      path: "/products",
      main: ({match}) => <Services match = {match}/>
    },
    {
      path: "/contacts",
      main: ({match}) => <Contacts match = {match}/>
    },
    {
      path: "/About",
      main: ({match}) => <About match = {match}/>
    },
    {
      path: "/profile",
      main: ({match}) => <ProfilePage match = {match}/>
    }
]
  
export default routes;