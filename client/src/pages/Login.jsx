import React, { useState } from 'react';
import logo from "../../public/images/fav.png";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <>

            <section className='login-page'>
                <a href="/">
                    <img src={logo} alt="Logo" className='logo' />
                </a>

                <div className="container">
                    <div className={`user ${isSignIn ? 'signinBx' : 'signupBx'}`}>
                        <div className="imgBx"><img src={isSignIn ? 'https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg' : 'https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg'} alt="" /></div>
                        <div className="formBx">
                            <form action="" onSubmit={(e) => e.preventDefault()}>
                                <h2>{isSignIn ? 'Sign In' : 'Create an account'}</h2>
                                <input type="text" name="username" placeholder="Username" />
                                {!isSignIn && <input type="email" name="email" placeholder="Email Address" />}
                                <input type="password" name="password" placeholder="Password" />
                                {!isSignIn && <input type="password" name="" placeholder="Confirm Password" />}
                                <input type="submit" value={isSignIn ? 'Login' : 'Sign Up'} />
                                <p className="signup">
                                    {isSignIn ? 'Don\'t have an account ? ' : 'Already have an account ? '}
                                    <a href="#" onClick={toggleForm}>{isSignIn ? 'Sign Up' : 'Sign in'}</a>
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
