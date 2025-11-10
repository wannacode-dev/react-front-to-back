import './style.css';

function TeamMember({ name, role, avatar, bio }) {
    return (
        <div className="team-member">
            <img 
                src={avatar}
                alt={name}
                className="member-avatar"
            />
            
            <h3 className="member-name">
                {name}
            </h3>
            
            <p className="member-role">
                {role}
            </p>
            
            <p className="member-bio">
                {bio}
            </p>
        </div>
    );
}

function App() {
    return (
        <div className="app">
            <h1 className="page-title">Наша команда</h1>
            
            <div className="team-grid">
                <TeamMember 
                    name="Анна Смирнова"
                    role="Frontend Developer"
                    avatar="avatar.jpeg"
                    bio="Специалист по React и TypeScript с 5-летним опытом"
                />
                
                <TeamMember 
                    name="Дмитрий Петров"
                    role="Backend Developer"
                    avatar="avatar2.jpeg"
                    bio="Эксперт в Node.js и базах данных"
                />
                
                <TeamMember 
                    name="Елена Козлова"
                    role="UI/UX Designer"
                    avatar="avatar3.jpeg"
                    bio="Создаю красивые и удобные интерфейсы"
                />
                
                <TeamMember 
                    name="Игорь Васильев"
                    role="DevOps Engineer"
                    avatar="avatar4.jpeg"
                    bio="Автоматизирую всё, что можно автоматизировать"
                />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


