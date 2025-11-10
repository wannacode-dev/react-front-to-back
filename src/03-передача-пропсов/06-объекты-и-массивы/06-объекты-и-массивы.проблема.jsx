import './style.css';

function UserProfile({ user, skills }) {
    // Получите пропсы: user (объект) и skills (массив)
    // Объекты и массивы тоже передаются в фигурных скобках {}
    // Пример: <Component user={{ name: "Иван" }} tags={["React", "JS"]} />
    
    return (
        <div className="profile">
            <h2 className="profile-name">
                {/* Выведите user.name */}
            </h2>
            
            <p className="profile-age">
                Возраст: {/* Выведите user.age */}
            </p>
            
            <p className="profile-city">
                Город: {/* Выведите user.city */}
            </p>
            
            <div className="skills">
                <h3 className="skills-title">Навыки:</h3>
                <div className="skills-list">
                    {/* Используйте map для вывода всех навыков */}
                    {/* skills.map(skill => <span className="skill-tag">{skill}</span>) */}
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
            {/* Передайте пропсы user={userData} и skills={userSkills} */}
            <UserProfile />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




