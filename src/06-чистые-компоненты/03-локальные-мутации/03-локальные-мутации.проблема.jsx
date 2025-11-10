import './style.css';

function TeaGathering({ cups }) {
    // Локальные мутации БЕЗОПАСНЫ!
    // Создайте пустой массив teaCups
    // Заполните его с помощью цикла for от 1 до cups
    // Добавляйте в массив <div> элементы с чашками
    
    return (
        <div className="gathering">
            <h2>Чайная церемония</h2>
            <div className="cups-container">
                {/* Отобразите массив teaCups */}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="title">Локальные мутации</h1>
            <p className="description">
                Изменять переменные и объекты, созданные ВНУТРИ компонента во время рендеринга - это нормально!
            </p>
            
            <TeaGathering cups={5} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




