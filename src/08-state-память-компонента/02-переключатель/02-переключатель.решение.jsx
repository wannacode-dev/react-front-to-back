import './style.css';

const { useState } = React;

function LightSwitch() {
    const [isOn, setIsOn] = useState(false);
    
    function handleToggle() {
        setIsOn(!isOn);
    }
    
    return (
        <div className="switch-container">
            <h1 className="title">Выключатель света</h1>
            <div className="status">
                {isOn ? '💡 Свет включен' : '🌙 Свет выключен'}
            </div>
            <div className={`bulb ${isOn ? 'on' : ''}`}></div>
            <button onClick={handleToggle} className="btn">
                Переключить
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <LightSwitch />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




