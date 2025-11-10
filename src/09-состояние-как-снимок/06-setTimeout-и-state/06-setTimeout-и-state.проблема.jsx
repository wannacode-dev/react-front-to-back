import './style.css';

const { useState } = React;

function MessageTimer() {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    
    // Создайте функцию handleSend:
    // - устанавливает status в "Отправка..."
    // - через 2 секунды устанавливает status в "Отправлено ✓"
    // - используйте setTimeout
    
    // Создайте функцию handleChange для обновления message
    
    return (
        <div className="timer-container">
            <h1 className="title">Отправка с задержкой</h1>
            
            <textarea 
                value={message}
                placeholder="Введите сообщение..."
                className="textarea"
                rows="4"
            />
            
            <button className="btn">
                Отправить
            </button>
            
            {/* Если status не пустой, выведите его с классом "status" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <MessageTimer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




