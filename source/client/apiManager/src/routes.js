import React from "react";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AdminPage from "./pages/AdminPage/AdminPage";
import SignUpPage from './pages/SignUpPage/SignUpPage'
import Services from "./pages/Services/Services";
const routes = [
    {
      path: "/",
      exact: true,
      main: ({match}) => <HomePage match = {match}/>
    },
    {
      path: "/login",
      main: ({match}) => <LoginPage match = {match}/>
    },
    {
      path: "/admin",
      main: ({match}) => <AdminPage/>
    },
    {
      path: "/resgister",
      main: ({match}) => <SignUpPage/>
    },
    {
      path: "/products",
      main: ({match}) => <Services match = {match}/>
    }

]
  
export default routes;