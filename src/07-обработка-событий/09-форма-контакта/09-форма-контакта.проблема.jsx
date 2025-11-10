import './style.css';

function App() {
    // Создайте обработчики:
    // handleNameChange - выводит в console.log значение поля имени
    // handleEmailChange - выводит в console.log значение поля email
    // handleMessageChange - выводит в console.log значение textarea
    // handleSubmit - предотвращает перезагрузку и показывает alert: "Форма отправлена!"
    
    // Подсказка: для получения значения используйте event.target.value
    
    return (
        <div className="container">
            <h1 className="title">Форма обратной связи</h1>
            <p className="description">
                Комплексный пример: форма с несколькими полями и обработчиками
            </p>
            
            <div className="form-wrapper">
                {/* Добавьте onSubmit={handleSubmit} */}
                <form>
                    <div className="form-group">
                        <label>Имя:</label>
                        <input 
                            type="text"
                            placeholder="Введите ваше имя"
                            className="input"
                            // Добавьте onChange={handleNameChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email"
                            placeholder="your@email.com"
                            className="input"
                            // Добавьте onChange={handleEmailChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Сообщение:</label>
                        <textarea 
                            placeholder="Ваше сообщение..."
                            className="textarea"
                            rows="5"
                            // Добавьте onChange={handleMessageChange}
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




