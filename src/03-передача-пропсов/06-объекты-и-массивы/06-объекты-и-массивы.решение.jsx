import './style.css';

function UserProfile({ user, skills }) {
    return (
        <div className="profile">
            <h2 className="profile-name">
                {user.name}
            </h2>
            
            <p className="profile-age">
                Возраст: {user.age}
            </p>
            
            <p className="profile-city">
                Город: {user.city}
            </p>
            
            <div className="skills">
                <h3 className="skills-title">Навыки:</h3>
                <div className="skills-list">
                    {skills.map(skill => (
                        <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function App() {
    const userData = {
        name: "Дмитрий Сидоров",
        age: 28,
        city: "Санкт-Петербург"
    };
    
    const userSkills = ["React", "JavaScript", "CSS", "TypeScript"];
    
    return (
        <div className="container">
            <UserProfile user={userData} skills={userSkills} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


