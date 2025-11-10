import './style.css';

const { useState } = React;

function GreetingForm() {
    const [name, setName] = useState('');
    
    function handleChange(event) {
        setName(event.target.value);
    }
    
    return (
        <div className="form-container">
            <h1 className="title">Приветствие</h1>
            
            <input 
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Введите ваше имя"
                className="input"
            />
            
            {name && (
                <div className="greeting">
                    Привет, {name}! 👋
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <GreetingForm />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


