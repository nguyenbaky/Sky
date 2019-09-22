import React from "react";
import LoginPage from './pages/LoginPage/LoginPage'
import HomePage from './pages/HomePage/HomePage'
import AdminPage from "./pages/AdminPage/AdminPage";
import SignUpPage from './pages/SignUpPage/SignUpPage'
const routes = [
    {
      path: "/",
      exact: true,
      main: () => <HomePage />
    },
    {
      path: "/login",
      main: ({match}) => <LoginPage/>
    },
    {
      path: "/admin",
      main: ({match}) => <AdminPage/>
    },
    {
      path: "/resgister",
      main: ({match}) => <SignUpPage/>
    }
]
  
export default routes;