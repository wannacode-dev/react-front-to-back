import './style.css';

const { useRef } = React;

function SearchForm() {
    // Создайте ref с помощью useRef(null)
    // const inputRef = useRef(null);
    
    // Создайте функцию handleFocus:
    // - вызывает inputRef.current.focus()
    
    return (
        <div className="form-container">
            <h1 className="title">Фокус на input</h1>
            
            <input 
                type="text"
                placeholder="Поиск..."
                className="input"
            />
            
            {/* Кнопка "Сфокусировать" вызывает handleFocus */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <SearchForm />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


