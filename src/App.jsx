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

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (username == "user123" && password == "password123") {
//       console.log("logged in");
//       setError(false);
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <div>
//       {error ? (
//         <div>That was the wrong username and/or password</div>
//       ) : (
//         <div>Welcome to the app</div>
//       )}
//       <form onSubmit={(e) => handleLogin(e)}>
//         <input
//           onChange={(e) => setUsername(e.target.value)}
//           type="text"
//           name="username"
//         />
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           type="password"
//           name="password"
//         />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// }

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
