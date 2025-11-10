import './style.css';

function ProductCard() {
    // Создайте переменные:
    // productName - название товара (например, "Смартфон iPhone 15")
    // price - цена (например, "89 990 ₽")
    // isAvailable - доступность (true или false)
    
    return (
        <div className="product-card">
            {/* Добавьте изображение с src="product.jpeg" и alt="Product" с классом "product-image" */}
            
            <div className="product-info">
                {/* Выведите название товара в h2 с классом "product-name" */}
                
                {/* Выведите цену в p с классом "product-price" */}
                
                {/* Выведите статус: если доступен - "В наличии", иначе - "Нет в наличии" в p с классом "product-status" */}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="app-container">
            <ProductCard />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


