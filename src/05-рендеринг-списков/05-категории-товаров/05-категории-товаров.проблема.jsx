import './style.css';

function App() {
    const categories = [
        {
            id: 1,
            name: "Электроника",
            items: ["Телефоны", "Ноутбуки", "Планшеты"]
        },
        {
            id: 2,
            name: "Одежда",
            items: ["Футболки", "Джинсы", "Куртки", "Обувь"]
        },
        {
            id: 3,
            name: "Книги",
            items: ["Фантастика", "Детективы", "Учебники"]
        }
    ];
    
    // Создайте вложенные списки:
    // 1. Внешний map для отображения категорий
    // 2. Внутренний map для отображения товаров в каждой категории
    // Не забудьте про key для обоих уровней!
    
    return (
        <div className="container">
            <h1 className="title">Каталог товаров</h1>
            
            <div className="categories-list">
                {/* Используйте map для категорий */}
                {/* Внутри каждой категории используйте map для items */}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




