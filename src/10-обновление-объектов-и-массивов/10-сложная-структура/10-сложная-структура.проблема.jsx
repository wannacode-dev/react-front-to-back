import './style.css';

const { useState } = React;

function UserList() {
    const [users, setUsers] = useState([
        { id: 1, name: 'Иван', profile: { age: 25, city: 'Москва' } },
        { id: 2, name: 'Мария', profile: { age: 30, city: 'Санкт-Петербург' } }
    ]);
    
    // Создайте функцию handleCityChange:
    // - принимает userId и newCity
    // - обновляет city в profile у пользователя с данным id
    // - нужно глубокое копирование:
    // setUsers(users.map(user =>
    //   user.id === userId ? {
    //     ...user,
    //     profile: { ...user.profile, city: newCity }
    //   } : user
    // ))
    
    return (
        <div className="users-container">
            <h1 className="title">Список пользователей</h1>
            
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <div className="user-name">{user.name}</div>
                    <div className="user-info">
                        Возраст: {user.profile.age}, Город: {user.profile.city}
                    </div>
                    <input 
                        type="text"
                        value={user.profile.city}
                        placeholder="Город"
                        className="input"
                    />
                </div>
            ))}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <UserList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


