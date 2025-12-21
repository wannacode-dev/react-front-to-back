import React from 'react';
 
import './style.css';

function NotificationCard() {
    return (
        <div className="notification-card">
            <div className="notification-icon">
                🔔
            </div>
            
            <div className="notification-content">
                <h3 className="notification-title">Новое уведомление</h3>
                <p className="notification-message">
                    У вас есть новое сообщение от команды разработки!
                </p>
                <span className="notification-time">2 минуты назад</span>
            </div>
            
            <button className="notification-close">✕</button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <NotificationCard />
            <NotificationCard />
        </div>
    );
}

export default App;




