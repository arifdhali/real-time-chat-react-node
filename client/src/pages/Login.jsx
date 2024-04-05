import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/fav.png";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  // for server response
  const [serverResponse, setServerResponse] = useState("");
  const { error, success, message } = serverResponse;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  let api = `http://localhost:3000`;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}/signin`, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        let data = await response.json();
        setServerResponse(data);
      } else {
        let data = await response.json();
        setServerResponse(data);
      }
    } catch (err) {
      console.error("Error occurred while sending user data:", err);
    }
  };

  return (
    <>
      <section className="login-page">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                alt=""
              />
            </div>
            <div className="formBx">
              <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <input
                  onChange={handleInput}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <input
                  onChange={handleInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <input type="submit" value="Login" />
                {/* alert message will showing here */}
                <div className="text-center">
                  <small className={`alert-${success ? "success" : "error"}`}>
                    {message}
                  </small>
                </div>
                <p className="signup">
                  Don't have an account? <Link to={"/signup"}>Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
