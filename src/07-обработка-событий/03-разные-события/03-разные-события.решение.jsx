import './style.css';

function App() {
    function handleChange() {
        console.log("Вы что-то вводите!");
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Форма отправлена!");
    }
    
    function handleMouseEnter() {
        console.log("Мышь над блоком!");
    }
    
    function handleFocus() {
        console.log("Поле в фокусе!");
    }
    
    return (
        <div className="container">
            <h1 className="title">Разные типы событий</h1>
            
            <div className="events-demo">
                <div className="event-block">
                    <div onMouseEnter={handleMouseEnter} className="hover-box">
                        Наведите мышь
                    </div>
                </div>
                
                <div className="event-block">
                    <input 
                        type="text"
                        placeholder="Начните вводить..."
                        className="input"
                        onChange={handleChange}
                        onFocus={handleFocus}
                    />
                </div>
                
                <div className="event-block">
                    <form onSubmit={handleSubmit}>
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

