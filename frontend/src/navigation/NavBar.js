import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../constants/Junction-LOGO.png';
function NavBar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderRadius: '10px 10px 0 0', backgroundColor: 'white', borderBottomWidth: '2px' }}>
            {/* Logo */}
            
            <Link to="/">
                <img src={LOGO} alt="Junction Logo" style={{ height: '50px' }} />
            </Link>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Search Icon */}
                <div style={{ marginRight: '15px', cursor: 'pointer' }}>
                    🔍
                </div>

                {/* Drawer Icon */}
                <div onClick={() => [setDrawerOpen(!drawerOpen), console.log("drawer is open")]} style={{ cursor: 'pointer', zIndex: 15 }}>
                    &#9776;
                </div>
            </div>

            {/* Drawer Menu (if open) */}
            {drawerOpen && (
                <div style={{ position: 'absolute', top: '60px', right: '10px', width: '200px', backgroundColor: 'white', borderRadius: '5px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', zIndex: 30 }}>
                    <Link to="/" onClick={() => setDrawerOpen(false)} style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Home</Link>
                    <Link to="/mission" onClick={() => setDrawerOpen(false)} style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Mission</Link>
                    <Link to="/maps" onClick={() => setDrawerOpen(false)} style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Maps</Link>
                    <Link to="/login" onClick={() => setDrawerOpen(false)} style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Login</Link>
                    <Link to="/register" onClick={() => setDrawerOpen(false)} style={{ display: 'block', padding: '10px', textDecoration: 'none' }}>Sign Up</Link>
                </div>
            )}
        </div>
    );
}

export default NavBar;
