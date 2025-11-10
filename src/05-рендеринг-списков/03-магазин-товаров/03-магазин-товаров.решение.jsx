import './style.css';

function ProductCard({ name, price, image }) {
    return (
        <div className="product-card">
            <div className="product-image">{image}</div>
            <h3 className="product-name">{name}</h3>
            <p className="product-price">{price} ₽</p>
            <button className="buy-button">Купить</button>
        </div>
    );
}

function App() {
    const products = [
        { id: 1, name: "Наушники Sony", price: 8990, image: "🎧" },
        { id: 2, name: "Клавиатура Logitech", price: 5490, image: "⌨️" },
        { id: 3, name: "Мышь Razer", price: 3990, image: "🖱️" },
        { id: 4, name: "Веб-камера", price: 4490, image: "📷" },
        { id: 5, name: "Микрофон", price: 6990, image: "🎤" },
        { id: 6, name: "Монитор", price: 15990, image: "🖥️" }
    ];
    
    return (
        <div className="container">
            <h1 className="title">Интернет-магазин</h1>
            
            <div className="products-grid">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


