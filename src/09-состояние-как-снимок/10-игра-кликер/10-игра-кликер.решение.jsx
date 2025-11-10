import './style.css';

const { useState, useEffect } = React;

function ClickerGame() {
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [autoClickers, setAutoClickers] = useState(0);
    
    function handleClick() {
        setScore(prev => prev + multiplier);
    }
    
    function buyMultiplier() {
        if (score >= 10) {
            setScore(prev => prev - 10);
            setMultiplier(prev => prev + 1);
        }
    }
    
    function buyAutoClicker() {
        if (score >= 50) {
            setScore(prev => prev - 50);
            setAutoClickers(prev => prev + 1);
        }
    }
    
    useEffect(() => {
        if (autoClickers > 0) {
            const interval = setInterval(() => {
                setScore(prev => prev + autoClickers);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [autoClickers]);
    
    return (
        <div className="game-container">
            <h1 className="title">🎮 Кликер</h1>
            
            <div className="score">Счет: {score}</div>
            
            <button onClick={handleClick} className="click-btn">
                КЛИК! (+{multiplier})
            </button>
            
            <div className="upgrades">
                <div className="upgrade">
                    <div className="upgrade-name">Множитель: x{multiplier}</div>
                    <button 
                        onClick={buyMultiplier}
                        disabled={score < 10}
                        className="upgrade-btn"
                    >
                        Купить (10)
                    </button>
                </div>
                
                <div className="upgrade">
                    <div className="upgrade-name">Автоклик: {autoClickers}/сек</div>
                    <button 
                        onClick={buyAutoClicker}
                        disabled={score < 50}
                        className="upgrade-btn"
                    >
                        Купить (50)
                    </button>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ClickerGame />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


