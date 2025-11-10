import './style.css';

function UserProfile({ name, role, skills, avatar }) {
    return (
        <div className="user-profile">
            <div className="avatar">{avatar}</div>
            <h3 className="name">{name}</h3>
            <p className="role">{role}</p>
            
            <div className="skills">
                <h4 className="skills-title">Навыки:</h4>
                <div className="skills-list">
                    {skills.map(skill => (
                        <span key={skill} className="skill-tag">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
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
                {users.map(user => (
                    <UserProfile 
                        key={user.id}
                        name={user.name}
                        role={user.role}
                        avatar={user.avatar}
                        skills={user.skills}
                    />
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


