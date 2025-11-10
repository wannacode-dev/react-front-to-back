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
    
    return (
        <div className="container">
            <h1 className="title">Каталог товаров</h1>
            
            <div className="categories-list">
                {categories.map(category => (
                    <div key={category.id} className="category">
                        <h2 className="category-name">{category.name}</h2>
                        <ul className="items-list">
                            {category.items.map(item => (
                                <li key={item} className="item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




