import React from 'react';
 
import './style.css';

function UserCard(props) {
    return (
        <div className="user-card">
            <div className="avatar">👤</div>
            
            <h2 className="name">
                {props.name}
            </h2>
            
            <p className="role">
                {props.role}
            </p>
            
            <p className="location">
                📍 {props.city}
            </p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <UserCard 
                name="Анна Петрова" 
                role="Frontend разработчик" 
                city="Москва" 
            />
        </div>
    );
}

export default App;




