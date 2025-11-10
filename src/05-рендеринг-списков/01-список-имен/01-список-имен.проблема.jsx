import './style.css';

function App() {
    const names = ["Анна", "Иван", "Мария", "Дмитрий", "Елена"];
    
    // Используйте метод map() для создания списка элементов
    // Синтаксис: массив.map(элемент => <li>{элемент}</li>)
    
    return (
        <div className="container">
            <h1 className="title">Список участников</h1>
            
            <ul className="names-list">
                {/* Используйте names.map() чтобы отобразить все имена */}
                {/* Каждое имя должно быть обёрнуто в <li> */}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




