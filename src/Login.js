import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
const history = useHistory();
const [email, setEmail] = useState("");   
const [password, setPassword] = useState("");    


const login = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
        //redirect to homepage
        history.push("/");
    })
    .catch(e => alert(e.message));
};

const register = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {
        //create user and redirect to homepage
        history.push("/");
    })
    .catch(e => alert(e.message));
};


    return (
        <div className="login">

            <Link to="/">
            <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="Login Logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange = {event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange = {event => setPassword(event.target.value)} />
                    <button onClick={login} type="submit" className="login__signinbutton">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                <button onClick={register} className="login__registerbutton">Create your Amazon account</button>
            </div>
            
        </div>
    )
}

export default Login
