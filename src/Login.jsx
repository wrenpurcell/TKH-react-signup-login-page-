import { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username == "user123" && password == "123") {
      console.log("logged in");
      props.setLoginUser(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {error ? (
        <div>That was the wrong username and/or password</div>
      ) : (
        <div>Welcome to the app</div>
      )}
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login