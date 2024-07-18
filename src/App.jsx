//import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Welcome from './Welcome.jsx'
import Login from './Login';
import AdminLogin from './AdminLogin.jsx';
import OfficeHeadLoginPage from './OfficeHeadLogin.jsx';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function OfficeHead() {
  return (
    <Header />
    <OfficeHeadLoginPage />
    <Footer />
    <
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/login/adminlogin",
    element: <AdminLogin />
  },
  {
    path: "/login/adminlogin/officehead",
    element: <OfficeHead />
  }
])

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App
