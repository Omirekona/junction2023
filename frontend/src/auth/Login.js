import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation.

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
            // You can redirect user to another page or set some state here.
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '300px', border: '1px solid gray', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email: </label>
                        <input 
                            type="email"
                            value={email}
                            classname="border-2 border-gray-300 p-2 w-full"
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input 
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Log In</button>
                </form>
                <div style={{ marginTop: '10px' }}>
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <div>
                    <Link to="/register">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
