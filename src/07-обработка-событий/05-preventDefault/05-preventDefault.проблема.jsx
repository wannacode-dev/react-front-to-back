import './style.css';

function App() {
    // Создайте handleSubmit, который:
    // 1. Принимает event
    // 2. Вызывает event.preventDefault() чтобы отменить перезагрузку страницы
    // 3. Показывает alert: "Форма обработана без перезагрузки!"
    
    // Создайте handleLinkClick, который:
    // 1. Принимает event
    // 2. Вызывает event.preventDefault() чтобы отменить переход по ссылке
    // 3. Показывает alert: "Переход отменён!"
    
    return (
        <div className="container">
            <h1 className="title">event.preventDefault()</h1>
            <p className="description">
                Используйте preventDefault() чтобы отменить действие по умолчанию
            </p>
            
            <div className="demos">
                <div className="demo-block">
                    <h3>Форма без перезагрузки</h3>
                    {/* Добавьте onSubmit={handleSubmit} */}
                    <form>
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
                    {/* Добавьте onClick={handleLinkClick} */}
                    <a href="https://react.dev" className="link">
                        Нажмите на эту ссылку
                    </a>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


