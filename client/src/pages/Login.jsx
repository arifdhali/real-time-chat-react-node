import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../public/images/fav.png";

const Login = () => {
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  //   get the value from user
  const [userinfo, setUserinfo] = useState({ email: "", password: "" });

  //   handel => handelInput
  const handelInput = (e) => {
    const { name, value } = e.target;
    setUserinfo((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  // submit the sign in
  const handelSubmit = (e) => {
    e.preventDefault();
    fetch("/sign-in")
      .then((res) => {
        if (res.ok) {
          console.log("Data sent successfully");
        //   navigate("/sign-in");
        } else {
          console.log("Failed to send data");
        }
      })
      .catch((err) => {
        console.error("Error occurred while sending user data:", err);
      });
  };

  return (
    <>
      <section className="login-page">
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        <div className="container">
          <div className={`user ${isSignIn ? "signinBx" : "signupBx"}`}>
            <div className="imgBx">
              <img
                src={
                  isSignIn
                    ? "https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                    : "https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
                }
                alt=""
              />
            </div>
            <div className="formBx">
              <form action="/sign-in" onSubmit={handelSubmit} method="post">
                <h2>{isSignIn ? "Sign In" : "Create an account"}</h2>
                <input
                  onChange={handelInput}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                {!isSignIn && (
                  <input
                    onChange={handelInput}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                )}
                <input
                  onChange={handelInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {!isSignIn && (
                  <input
                    onChange={handelInput}
                    type="password"
                    name=""
                    placeholder="Confirm Password"
                  />
                )}
                <input
                  onChange={handelInput}
                  type="submit"
                  value={isSignIn ? "Login" : "Sign Up"}
                />
                <p className="signup">
                  {isSignIn
                    ? "Don't have an account ? "
                    : "Already have an account ? "}
                  <a href="#" onClick={toggleForm}>
                    {isSignIn ? "Sign Up" : "Sign in"}
                  </a>
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
