import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/images/fav.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/sign-up", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("Data sent successfully");
          // Redirect to desired location after successful sign-up
          navigate("/dashboard");
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
          <div className="user signupBx">
            <div className="imgBx">
              <img
                src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
                alt=""
              />
            </div>
            <div className="formBx">
              <form onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <input
                  onChange={handleInput}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  onChange={handleInput}
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  onChange={handleInput}
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <input type="submit" value="Sign Up" />
                <p className="signup">
                  Already have an account? <Link to={"/login"}> Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
