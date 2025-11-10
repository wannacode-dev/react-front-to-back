import './style.css';

function App() {
    function handleSubmit(e) {
        e.preventDefault();
        alert("Форма обработана без перезагрузки!");
    }
    
    function handleLinkClick(e) {
        e.preventDefault();
        alert("Переход отменён!");
    }
    
    return (
        <div className="container">
            <h1 className="title">event.preventDefault()</h1>
            <p className="description">
                Используйте preventDefault() чтобы отменить действие по умолчанию
            </p>
            
            <div className="demos">
                <div className="demo-block">
                    <h3>Форма без перезагрузки</h3>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Ваше имя"
                            className="input"
                        />
                        <button type="submit" className="btn">
                            Отправить
                        </button>
                    </form>
                </div>
                
                <div className="demo-block">
                    <h3>Ссылка без перехода</h3>
                    <a href="https://react.dev" onClick={handleLinkClick} className="link">
                        Нажмите на эту ссылку
                    </a>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




