import './style.css';

const { createContext, useContext, useState } = React;

const AppContext = createContext();

function CartBadge() {
    const { cart } = useContext(AppContext);
    
    return (
        <div className="cart-badge">
            🛒 {cart.length}
        </div>
    );
}

function ProductCard({ product }) {
    const { addToCart } = useContext(AppContext);
    
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p className="price">{product.price} ₽</p>
            <button onClick={() => addToCart(product)} className="btn">
                В корзину
            </button>
        </div>
    );
}

function Cart() {
    const { cart, removeFromCart } = useContext(AppContext);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    return (
        <div className="cart">
            <h2>Корзина</h2>
            {cart.length === 0 ? (
                <p>Корзина пуста</p>
            ) : (
                <>
                    {cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <span>{item.name}</span>
                            <span>{item.price} ₽</span>
                            <button 
                                onClick={() => removeFromCart(index)}
                                className="remove-btn"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                    <div className="total">Итого: {total} ₽</div>
                </>
            )}
        </div>
    );
}

function App() {
    // Создайте state для корзины
    // const [cart, setCart] = useState([]);
    
    // Функция addToCart
    // Функция removeFromCart
    
    const products = [
        { id: 1, name: 'Ноутбук', price: 50000 },
        { id: 2, name: 'Мышь', price: 1000 },
        { id: 3, name: 'Клавиатура', price: 3000 }
    ];
    
    return (
        // Оберните в AppContext.Provider
        <div className="app">
            <header className="header">
                <h1>Магазин</h1>
                <CartBadge />
            </header>
            
            <div className="content">
                <div className="products">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
                
                <Cart />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




