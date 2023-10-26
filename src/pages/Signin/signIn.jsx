import '../../styles/sign-style/sign.css'
import React, { useState } from 'react';
import { userConnected } from '../../actions.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
function SignIn() {
    const navigate = useNavigate();
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    const [loginFailed, setLoginFailed] = useState(false);
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (response.ok) {
          dispatch(userConnected());
          navigate("/user");
          // console.log(store.getState())
            console.log("connected")
        } else {
          setLoginFailed(true);
        }
      } catch (error) {
        return console.error('Erreur lors de la connexion:', error);
      }
    };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleLogin}>
          <div className="input-wrapper">
            <label htmlFor="username">Mail</label>
            <input type="text" id="username" value={email} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {loginFailed && <p className='error-Sign'>Invalid mail or password, please try again</p>}
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
  
        </form>
      </section>
    </main>
  );
}
export default SignIn;