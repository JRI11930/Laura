import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Forms.css';

import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

const Login = () => {
    const [action, setAction] = useState("Sign Up");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formReady, setFormReady] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (isSignUp) => {
        if (!formReady) {
            setFormReady(true);
            return;
        }

        const url = isSignUp ? '/users' : '/login';
        const payload = isSignUp
            ? { username, email, password }
            : { email, password };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                const message = await response.json();
                alert(message.message);
                if (!isSignUp){
                navigate('/panel');
                }
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error connecting to server');
        }
    };

    const handleButtonClick = (isSignUp) => {
        if (action === (isSignUp ? "Sign Up" : "Login")) {
            handleSubmit(isSignUp);
        } else {
            setAction(isSignUp ? "Sign Up" : "Login");
            setFormReady(false); // Reset form readiness when switching actions
        }
    };

    return (
        <div className='screenforms'>
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt=""/>
                        <input 
                            type="text" 
                            placeholder='Nombre' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                )}
                <div className='input'>
                    <img src={email_icon} alt=""/>
                    <input 
                        type="email" 
                        placeholder='alguien@email.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className="submit-container">
            <div 
                        className={action === "Login" ? "submit gray" : "submit"} 
                        onClick={() => handleButtonClick(true)}
                    >
                    Sign Up
                </div>
                <div 
                        className={action === "Sign Up" ? "submit gray" : "submit"} 
                        onClick={() => handleButtonClick(false)}
                    >
                    Login
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;
