import './style.css';

const { useState, useEffect } = React;

function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        }, 1000);
        
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="timer-container">
            <h1 className="title">Таймер с cleanup</h1>
            <div className="description">
                Cleanup функция очищает интервал при размонтировании
            </div>
            <div className="seconds">{seconds} сек</div>
        </div>
    );
}

function App() {
    const [show, setShow] = useState(true);
    
    return (
        <div className="container">
            {show && <Timer />}
            <button onClick={() => setShow(!show)} className="toggle-btn">
                {show ? 'Скрыть' : 'Показать'} таймер
            </button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


