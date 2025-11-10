import './style.css';

function ProductCard(props) {
    return (
        <div className="product-card">
            <div className="product-icon">📦</div>
            
            <h2 className="product-title">
                {props.title}
            </h2>
            
            <p className="product-price">
                {props.price} ₽
            </p>
            
            <div className="product-status">
                {props.inStock ? "В наличии ✅" : "Нет в наличии ❌"}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ProductCard 
                title="Механическая клавиатура"
                price={4990}
                inStock={true}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


