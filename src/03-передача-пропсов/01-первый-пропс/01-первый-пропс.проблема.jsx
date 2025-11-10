import './style.css';

function Greeting() {
    // Получите пропс name из параметра функции
    // Компонент принимает объект props, из которого можно достать значения
    // Например: function Greeting(props) { ... props.name ... }
    
    return (
        <div className="greeting">
            <h1>Привет, {/* Выведите name из пропсов */}!</h1>
            <p>Добро пожаловать в React</p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            {/* Передайте пропс name со значением вашего имени */}
            <Greeting />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


