import React, { useState } from 'react';
 
import './style.css';

function UserProfile() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        age: ''
    });
    
    function handleFirstNameChange(e) {
        setUser({
            ...user,
            firstName: e.target.value
        });
    }
    
    function handleLastNameChange(e) {
        setUser({
            ...user,
            lastName: e.target.value
        });
    }
    
    function handleAgeChange(e) {
        setUser({
            ...user,
            age: e.target.value
        });
    }
    
    return (
        <div className="profile-container">
            <h1 className="title">Профиль пользователя</h1>
            
            <div className="form">
                <input 
                    type="text"
                    value={user.firstName}
                    onChange={handleFirstNameChange}
                    placeholder="Имя"
                    className="input"
                />
                
                <input 
                    type="text"
                    value={user.lastName}
                    onChange={handleLastNameChange}
                    placeholder="Фамилия"
                    className="input"
                />
                
                <input 
                    type="number"
                    value={user.age}
                    onChange={handleAgeChange}
                    placeholder="Возраст"
                    className="input"
                />
            </div>
            
            {user.firstName && user.lastName && user.age && (
                <div className="user-card">
                    👤 {user.firstName} {user.lastName}, {user.age} лет
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <UserProfile />
        </div>
    );
}

export default App;




