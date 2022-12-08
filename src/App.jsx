import React from "react";
import { useState } from "react";
import "./App.css";
import Login from "./Login"

// navbar
function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">TKH</h1>
      <div className="menu-link">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}
// SideBar
function SideBar() {
  return (
    <div className="sidebar">
      <a href="">portfolio</a>
      <a href="">blog</a>
    </div>
  );
}

// layout
function Layout(props) {
  return <div className="layout">{props.children}</div>;
}



function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="app">
      {isUserLoggedIn ? (
        <>
          <div className="navbar-box">
            <Navbar />
          </div>
          <div className="main-box">
            <SideBar />
            <Layout>
              <h1>Hello world</h1>
            </Layout>
          </div>
        </>
      ) : (
        <>
        {showLogin ? 
         <Login setLoginUser={setUserLoggedIn} />
         : 
         <>
         {/* signup page

         
         */}
         </>
      }
        </>
       
      )}
    </div>
  );
}



export default App;
