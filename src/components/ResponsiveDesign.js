import React from 'react';
import './ResponsiveDesign.css';
import Logo from './components/Logo';
import StartButton from './components/StartButton';
import GetAlbumCatalog from './components/GetAlbumCatalog.js';

function ResponsiveDesign() {
    return (
        <div className="container">
            <header className="header"><Logo /></header>
            <nav className="nav"><StartButton /></nav>
            <main className="main"><GetAlbumCatalog /></main>
        </div>
    );
}

export default ResponsiveDesign;
