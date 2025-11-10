import './style.css';

function Profile() {
    // В JSX все теги должны быть закрыты!
    // Исправьте ошибки: закройте все незакрытые теги
    // Используйте самозакрывающиеся теги для img, input, br
    
    return (
        <div className="profile">
            <img src="avatar.jpeg" alt="Avatar" className="avatar">
            
            <h2>Анна Смирнова
            
            <p>Frontend разработчик
            
            <input type="text" placeholder="Email" className="input">
            
            <p>Люблю React и создание красивых интерфейсов!<p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Profile />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




