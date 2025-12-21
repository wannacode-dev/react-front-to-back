import React from 'react';
 
import './style.css';

function Greeting() {
    return <h1 className="greeting">Привет, React!</h1>;
}

function App() {
    return (
        <div className="container">
            <Greeting />
        </div>
    );
}

export default App;
