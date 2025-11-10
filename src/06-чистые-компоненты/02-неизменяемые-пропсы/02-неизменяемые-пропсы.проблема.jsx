import './style.css';

// ❌ ПЛОХО: Не изменяйте пропсы!
function BadProfile({ user }) {
    user.viewed = true; // Мутация пропса - это плохо!
    
    return (
        <div className="profile">
            <h3>{user.name}</h3>
            <p>Возраст: {user.age}</p>
        </div>
    );
}

// ✅ ХОРОШО: Исправьте компонент GoodProfile
// Не изменяйте объект user!
// Если нужно что-то добавить, создайте новый объект или используйте локальную переменную

function GoodProfile({ user }) {
    // Создайте локальную переменную для отслеживания просмотра
    // Например: const isViewed = true;
    
    return (
        <div className="profile">
            <h3>{user.name}</h3>
            <p>Возраст: {user.age}</p>
            {/* Покажите статус просмотра, используя локальную переменную */}
            {/* <p className="viewed">✓ Профиль просмотрен</p> */}
        </div>
    );
}

function App() {
    const user = { name: "Анна Смирнова", age: 28 };
    
    return (
        <div className="container">
            <h1 className="title">Неизменяемость пропсов</h1>
            <p className="description">
                Никогда не изменяйте пропсы внутри компонента! Они должны быть только для чтения (read-only).
            </p>
            
            <div className="examples">
                <div className="example bad">
                    <h2>❌ Плохо</h2>
                    <BadProfile user={user} />
                </div>
                
                <div className="example good">
                    <h2>✅ Хорошо</h2>
                    <GoodProfile user={user} />
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


