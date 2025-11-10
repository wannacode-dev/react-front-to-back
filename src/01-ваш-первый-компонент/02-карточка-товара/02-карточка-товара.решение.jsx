import './style.css';

function ProductCard() {
    const productName = "Смартфон iPhone 15";
    const price = "89 990 ₽";
    const isAvailable = true;
    
    return (
        <div className="product-card">
            <img src="product.jpeg" alt="Product" className="product-image" />
            
            <div className="product-info">
                <h2 className="product-name">{productName}</h2>
                
                <p className="product-price">{price}</p>
                
                <p className="product-status">
                    {isAvailable ? "В наличии" : "Нет в наличии"}
                </p>
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


