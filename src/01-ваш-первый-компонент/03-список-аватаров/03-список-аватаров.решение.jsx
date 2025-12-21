import React from 'react';
 
import './style.css';

function Avatar() {
    return (
        <img 
            src="avatar.jpeg" 
            alt="User avatar" 
            className="avatar" 
        />
    );
}

function App() {
    return (
        <div className="app-container">
            <h1 className="title">Наша команда</h1>
            
            <div className="avatar-list">
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </div>
    );
}

export default App;




