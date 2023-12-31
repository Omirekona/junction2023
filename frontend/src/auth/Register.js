import React, { useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { FIREBASE_AUTH } from "../config/firebase";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation.
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      console.log("the result of the authentication is: ", result);
      navigate("/preference1");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '350px', border: '1px solid gray', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '35 px' }}>Register</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email: </label>
            <input
              style={{ marginBottom: '10px', borderRadius: '4px', border: '1px solid gray', padding: '2px', width: '60%', marginLeft: '10px' }}
              type="email"
              value={email}
              className="border-2 border-gray-300 p-2 w-full"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              style={{ marginRight: '30px', borderRadius: '4px', border: '1px solid gray', padding: '2px', marginLeft: '10px' }}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button style={{ marginTop: '20px', borderRadius: '4px', border: '1px solid gray', padding: '2px', backgroundColor: 'lightgray' }}
            type="submit">Sign Up</button>
        </form>
        <div style={{ marginTop: '30px', textDecoration: 'underline' }}>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <div style={{ textDecoration: 'underline' }}>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
export default Register;