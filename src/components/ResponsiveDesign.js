import React from 'react';
import './ResponsiveDesign.css';
import Logo from './components/Logo';
import StartButton from './components/StartButton';
import getAlbums from './components/getAlbums';

function ResponsiveDesign() {
    return (
        <div className="container">
            <header className="header"><Logo /></header>
            <nav className="nav"><StartButton /></nav>
            <main className="main"><getAlbums /></main>
        </div>
    );
}

export default ResponsiveDesign;
