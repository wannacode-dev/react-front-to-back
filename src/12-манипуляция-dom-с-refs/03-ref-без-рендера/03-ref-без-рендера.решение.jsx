import './style.css';

const { useState, useRef } = React;

function ClickCounter() {
    const [stateClicks, setStateClicks] = useState(0);
    const refClicks = useRef(0);
    
    function handleStateClick() {
        setStateClicks(stateClicks + 1);
    }
    
    function handleRefClick() {
        refClicks.current += 1;
        console.log('Ref клики:', refClicks.current);
    }
    
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
                    <button onClick={handleRefClick} className="btn">
                        Клик (ref)
                    </button>
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




