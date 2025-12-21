import React from 'react';
 
import './style.css';

function UserProfile() {
    // Создайте компонент, который принимает пропсы:
    // name, role, skills (массив), avatar
}

function App() {
    const users = [
        {
            id: 1,
            name: "Анна Смирнова",
            role: "Frontend Developer",
            avatar: "👩‍💻",
            skills: ["React", "JavaScript", "CSS"]
        },
        {
            id: 2,
            name: "Иван Петров",
            role: "Backend Developer",
            avatar: "👨‍💻",
            skills: ["Node.js", "Python", "Docker", "PostgreSQL"]
        },
        {
            id: 3,
            name: "Мария Козлова",
            role: "UI/UX Designer",
            avatar: "👩‍🎨",
            skills: ["Figma", "Sketch", "Adobe XD"]
        }
    ];
    
    return (
        <div className="container">
            <h1 className="title">Наша команда</h1>
            
            <div className="users-grid">
                {/* Отобразите всех пользователей с помощью map */}
                {/* В компоненте UserProfile отобразите skills через map */}
            </div>
        </div>
    );
}

export default App;




