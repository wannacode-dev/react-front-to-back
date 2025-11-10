import './style.css';

function App() {
    // Создайте обработчики:
    // handleChange - выводит в console.log: "Вы что-то вводите!"
    // handleSubmit - отменяет перезагрузку и выводит в console.log: "Форма отправлена!"
    // handleMouseEnter - выводит в console.log: "Мышь над блоком!"
    // handleFocus - выводит в console.log: "Поле в фокусе!"
    
    return (
        <div className="container">
            <h1 className="title">Разные типы событий</h1>
            
            <div className="events-demo">
                <div className="event-block">
                    {/* Добавьте onMouseEnter={handleMouseEnter} */}
                    <div className="hover-box">
                        Наведите мышь
                    </div>
                </div>
                
                <div className="event-block">
                    <input 
                        type="text"
                        placeholder="Начните вводить..."
                        className="input"
                        // Добавьте onChange={handleChange}
                        // Добавьте onFocus={handleFocus}
                    />
                </div>
                
                <div className="event-block">
                    {/* Добавьте onSubmit={handleSubmit} */}
                    <form>
                        <button type="submit" className="btn">
                            Отправить форму
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

