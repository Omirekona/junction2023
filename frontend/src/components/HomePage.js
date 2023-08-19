import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h1>Welcome to Navigo!</h1>
            
            <p style={{ marginTop: '50px', textAlign: 'center' }}>
                Plan your perfect journey, tailored to your budget and interests.
            </p>
            
            <p style={{ marginTop: '50px', textAlign: 'center' }}>
                Dive deep into our rich database of must-visit travel destinations.
            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
                Embark on a gamified adventure. Capture moments and earn rewards.
            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
                Use advanced AI to verify your travel moments and claim your badges.
            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
                Stay motivated. Complete your unique travel route and share your story!
            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
            Example text 1
            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
               Example text 2
            </p>

            <Link to="/login" style={{ marginTop: '50px', fontSize: '18px', textDecoration: 'none', border: '2px solid black', padding: '10px 20px', borderRadius: '8px' }}>
                Get Started!
            </Link>
        </div>
    );
}

export default HomePage;
