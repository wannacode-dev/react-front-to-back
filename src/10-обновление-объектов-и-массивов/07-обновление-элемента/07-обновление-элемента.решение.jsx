import './style.css';

const { useState } = React;

function CounterList() {
    const [counters, setCounters] = useState([0, 0, 0]);
    
    function handleIncrement(index) {
        setCounters(counters.map((count, i) => 
            i === index ? count + 1 : count
        ));
    }
    
    return (
        <div className="counters-container">
            <h1 className="title">Список счетчиков</h1>
            
            <div className="counters-list">
                {counters.map((count, index) => (
                    <div key={index} className="counter">
                        <div className="count">{count}</div>
                        <button 
                            onClick={() => handleIncrement(index)}
                            className="btn"
                        >
                            +1
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <CounterList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


