import './style.css';

function App() {
    function handleNameChange(e) {
        console.log("Имя:", e.target.value);
    }
    
    function handleEmailChange(e) {
        console.log("Email:", e.target.value);
    }
    
    function handleMessageChange(e) {
        console.log("Сообщение:", e.target.value);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        alert("Форма отправлена!");
    }
    
    return (
        <div className="container">
            <h1 className="title">Форма обратной связи</h1>
            <p className="description">
                Комплексный пример: форма с несколькими полями и обработчиками
            </p>
            
            <div className="form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Имя:</label>
                        <input 
                            type="text"
                            placeholder="Введите ваше имя"
                            className="input"
                            onChange={handleNameChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email"
                            placeholder="your@email.com"
                            className="input"
                            onChange={handleEmailChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Сообщение:</label>
                        <textarea 
                            placeholder="Ваше сообщение..."
                            className="textarea"
                            rows="5"
                            onChange={handleMessageChange}
                        />
                    </div>
                    
                    <button type="submit" className="btn">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


