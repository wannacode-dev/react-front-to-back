import './style.css';

const { useState } = React;

function StepCounter() {
    const [steps, setSteps] = useState(0);
    const [step, setStep] = useState(1);
    
    // Создайте функцию handleIncrease:
    // - увеличивает steps на значение step
    // - используйте функцию обновления
    
    // Создайте функцию handleDecrease:
    // - уменьшает steps на значение step
    // - используйте функцию обновления
    // - НЕ позволяйте steps стать меньше 0
    
    // Создайте функцию handleStepChange:
    // - обновляет step из значения input
    // - используйте Number(e.target.value)
    
    return (
        <div className="step-container">
            <h1 className="title">Счетчик с шагом</h1>
            
            <div className="controls">
                <label className="label">
                    Шаг:
                    <input 
                        type="number"
                        value={step}
                        min="1"
                        className="step-input"
                    />
                </label>
            </div>
            
            <div className="steps">{steps}</div>
            
            <div className="buttons">
                {/* Кнопка "+" вызывает handleIncrease */}
                {/* Кнопка "-" вызывает handleDecrease */}
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




