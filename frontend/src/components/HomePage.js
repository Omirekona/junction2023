import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <h1>Welcome to Navigo!</h1>
            
            <p style={{ marginTop: '50px', textAlign: 'center' }}>
            Navigo is a mobile web service that reimagines the joy of traveling. It's an AI-powered "Geoguesser"-style game that offers mission games that go beyond just sightseeing to uncover hidden local attractions.
            </p>
            
            <p style={{ marginTop: '50px', textAlign: 'center' }}>
            Users planning a trip first select their desired theme, itinerary, and region, and Navigo then recommends an optimized travel course for them. Along the way, the user sets out to find specific locations captured in mission photos. The difficulty of each mission is tied to the corresponding photo, and each successful mission increases the user's tier.

            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
            Navigo's travel courses cover a variety of themes, such as "Explore History" and "Experience Culture. These themed courses allow users to experience not only known tourist attractions, but also hidden spots, giving them a deeper and richer travel experience while having fun with missions.

            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
            With Navigo, traveling goes beyond mere sightseeing to a deeper experience of the essence of your chosen location. If you're looking to get to the heart of a destination, the Navigo app is the way to go. Discover the hidden charms of a region and the joy of its missions today!
            </p>

            {/* <p style={{ marginTop: '50px', textAlign: 'center' }}>
                Stay motivated. Complete your unique travel route and share your story!
            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
            Example text 1
            </p>

            <p style={{ marginTop: '50px', textAlign: 'center' }}>
               Example text 2
            </p> */}
            <Link to="/login" style={{ marginTop: '50px', fontSize: '18px', textDecoration: 'none', border: '2px solid black', padding: '10px 20px', borderRadius: '8px' }}>
                Get Started!
            </Link>
        </div>
    );
}

export default HomePage;
