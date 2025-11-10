import './style.css';

const { useState } = React;

function MessageTimer() {
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    
    function handleSend() {
        setStatus('Отправка...');
        setTimeout(() => {
            setStatus('Отправлено ✓');
        }, 2000);
    }
    
    function handleChange(e) {
        setMessage(e.target.value);
    }
    
    return (
        <div className="timer-container">
            <h1 className="title">Отправка с задержкой</h1>
            
            <textarea 
                value={message}
                onChange={handleChange}
                placeholder="Введите сообщение..."
                className="textarea"
                rows="4"
            />
            
            <button onClick={handleSend} className="btn">
                Отправить
            </button>
            
            {status && (
                <div className="status">{status}</div>
            )}
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




