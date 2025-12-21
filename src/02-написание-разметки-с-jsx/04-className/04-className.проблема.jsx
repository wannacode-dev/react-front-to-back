import React from 'react';
 
import './style.css';

function NotificationCard() {
    // В JSX используется className вместо class!
    // Замените все атрибуты class на className
    
    return (
        <div class="notification-card">
            <div class="notification-icon">
                🔔
            </div>
            
            <div class="notification-content">
                <h3 class="notification-title">Новое уведомление</h3>
                <p class="notification-message">
                    У вас есть новое сообщение от команды разработки!
                </p>
                <span class="notification-time">2 минуты назад</span>
            </div>
            
            <button class="notification-close">✕</button>
        </div>
    );
}

function App() {
    return (
        <div class="container">
            <NotificationCard />
            <NotificationCard />
        </div>
    );
}

export default App;




