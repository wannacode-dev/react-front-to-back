import './style.css';

const { useState } = React;

function StepCounter() {
    const [steps, setSteps] = useState(0);
    const [step, setStep] = useState(1);
    
    function handleIncrease() {
        setSteps(prev => prev + step);
    }
    
    function handleDecrease() {
        setSteps(prev => Math.max(0, prev - step));
    }
    
    function handleStepChange(e) {
        setStep(Number(e.target.value));
    }
    
    return (
        <div className="step-container">
            <h1 className="title">Счетчик с шагом</h1>
            
            <div className="controls">
                <label className="label">
                    Шаг:
                    <input 
                        type="number"
                        value={step}
                        onChange={handleStepChange}
                        min="1"
                        className="step-input"
                    />
                </label>
            </div>
            
            <div className="steps">{steps}</div>
            
            <div className="buttons">
                <button onClick={handleIncrease} className="btn btn-increase">
                    +
                </button>
                <button onClick={handleDecrease} className="btn btn-decrease">
                    -
                </button>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <StepCounter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


