import './style.css';

function Greeting({ isLoggedIn }) {
    // Используйте if/else для отображения разных приветствий
    // Если isLoggedIn === true, верните "Добро пожаловать обратно!"
    // Иначе верните "Пожалуйста, войдите в систему"
    
    // Вариант 1: использовать if/else перед return
    // Вариант 2: использовать переменную и условие
}

function App() {
    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Портал пользователя</h1>
                
                <div className="greeting-box">
                    <Greeting isLoggedIn={true} />
                </div>
                
                <div className="greeting-box">
                    <Greeting isLoggedIn={false} />
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




