import { useState } from "react";

import "./Login.css";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password,
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login failed. Please check your credentials.");
        }
      })
      .then(data => {
        localStorage.setItem('sessionData', JSON.stringify(data));
        console.log("Login successful.");
        window.location.href = "/profile";
      })
      .catch(error => {
        console.error(error.message);
        setLoginStatus("Login failed. Please check your credentials.");
      });
  };

  return (
    <div className="container-login">
      <div>
        <img
          className="imagen-login"
          src="https://s3-alpha-sig.figma.com/img/9d58/d0fd/1731b288203acac3b31cdcf78415d265?Expires=1698019200&Signature=ACJqCVT-P6E8G1tMeYrJ0YQNDjNWDfLJKp9PudCekB2yx09drENtBpo~CRn2eXsAGCwHdDbVVZtgVB5Cnk3Bvvshi5gXpk29HQ2wglQfui6Rz8ErzF5A0-eTSy0nTcXe5FZ-Wx84CkfP4T~gP8D22IEqjsqjJR-rjGHt6ZuQH9CiPD2vkn3grv-2auIP~N0LPpdpy3FEnvEGtWs~hLl89vpPn2uv9-zQ1KBt5nw2EE2Y-3whHR~NEDa6N5lnJUQTt1u9aGMPm2leD4yzWPC1fDldY6dvkxG2cG9dcSGNvR25Tyo6JQm5o8ktJiMy8GfBMn4jVh3rqXbNeKt6H5o0nQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
      <div className="login-body">
        <div className="login-title">
          <p>Login</p>
        </div>
        <div className="inputs-container">
          <div className="input1">
            <p>Username</p>
            <input
              className="inputs"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input2">
            <span>Password</span>
            <input
              className="inputs"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="login-state">
          <p>{loginStatus}</p>
        </div>
        <div className="button-container">
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
