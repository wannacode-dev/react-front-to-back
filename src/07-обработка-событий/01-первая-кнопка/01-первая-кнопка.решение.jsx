import './style.css';

function App() {
    function handleClick() {
        alert("Кнопка нажата!");
    }
    
    return (
        <div className="container">
            <h1 className="title">Ваша первая интерактивная кнопка</h1>
            <p className="description">
                Добавьте обработчик события onClick к кнопке
            </p>
            
            <button onClick={handleClick} className="btn">
                Нажми меня!
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




