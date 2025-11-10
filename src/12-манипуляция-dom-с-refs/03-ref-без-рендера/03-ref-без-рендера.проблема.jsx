import './style.css';

const { useState, useRef } = React;

function ClickCounter() {
    const [stateClicks, setStateClicks] = useState(0);
    // Создайте ref для хранения количества кликов без ререндера
    // const refClicks = useRef(0);
    
    function handleStateClick() {
        setStateClicks(stateClicks + 1);
    }
    
    // Создайте функцию handleRefClick:
    // - увеличивает refClicks.current на 1
    // - выводит в console.log текущее значение
    // - НЕ вызывает ререндер!
    
    return (
        <div className="counter-container">
            <h1 className="title">Ref vs State</h1>
            <div className="description">
                State вызывает ререндер, ref - нет!
            </div>
            
            <div className="counters">
                <div className="counter-block">
                    <div className="label">State клики:</div>
                    <div className="value">{stateClicks}</div>
                    <button onClick={handleStateClick} className="btn">
                        Клик (state)
                    </button>
                </div>
                
                <div className="counter-block">
                    <div className="label">Ref клики:</div>
                    <div className="value">Смотри консоль</div>
                    {/* Кнопка для ref кликов */}
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ClickCounter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


