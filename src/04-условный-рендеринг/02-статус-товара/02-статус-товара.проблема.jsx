import './style.css';

function ProductStatus({ inStock }) {
    // Используйте тернарный оператор для вывода статуса
    // Синтаксис: условие ? значение_если_true : значение_если_false
    // Если inStock true - "В наличии ✅", иначе - "Нет в наличии ❌"
    
    return (
        <div className="status">
            {/* Используйте тернарный оператор здесь */}
        </div>
    );
}

function ProductCard({ name, price, inStock }) {
    return (
        <div className="product-card">
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price} ₽</p>
            <ProductStatus inStock={inStock} />
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="page-title">Наши товары</h1>
            
            <div className="products-grid">
                <ProductCard name="Наушники" price={2990} inStock={true} />
                <ProductCard name="Клавиатура" price={4990} inStock={false} />
                <ProductCard name="Мышь" price={1490} inStock={true} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


