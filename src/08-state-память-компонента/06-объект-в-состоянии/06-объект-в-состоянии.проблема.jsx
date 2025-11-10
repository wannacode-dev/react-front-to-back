import './style.css';

const { useState } = React;

function UserProfile() {
    // Создайте состояние user - объект с полями:
    // { firstName: '', lastName: '', age: '' }
    
    // Создайте три функции:
    // handleFirstNameChange - обновляет firstName
    // handleLastNameChange - обновляет lastName
    // handleAgeChange - обновляет age
    // Используйте spread оператор для сохранения остальных полей
    
    return (
        <div className="profile-container">
            <h1 className="title">Профиль пользователя</h1>
            
            <div className="form">
                {/* Создайте input для firstName */}
                {/* placeholder: "Имя" */}
                
                {/* Создайте input для lastName */}
                {/* placeholder: "Фамилия" */}
                
                {/* Создайте input для age (type="number") */}
                {/* placeholder: "Возраст" */}
            </div>
            
            {/* Если все поля заполнены, выведите карточку: */}
            {/* "👤 {firstName} {lastName}, {age} лет" */}
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


