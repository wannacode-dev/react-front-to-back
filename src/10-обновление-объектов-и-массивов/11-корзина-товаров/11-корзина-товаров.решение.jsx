import './style.css';

const { useState } = React;

function ShoppingCart() {
    const [cart, setCart] = useState([
        { id: 1, name: 'Ноутбук', price: 50000, quantity: 1 },
        { id: 2, name: 'Мышь', price: 1000, quantity: 2 }
    ]);
    
    function handleIncrease(id) {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }
    
    function handleDecrease(id) {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0));
    }
    
    function handleRemove(id) {
        setCart(cart.filter(item => item.id !== id));
    }
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    return (
        <div className="cart-container">
            <h1 className="title">Корзина</h1>
            
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <div className="item-info">
                        <div className="item-name">{item.name}</div>
                        <div className="item-price">{item.price} ₽</div>
                    </div>
                    
                    <div className="quantity-control">
                        <button 
                            onClick={() => handleDecrease(item.id)}
                            className="qty-btn"
                        >
                            -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button 
                            onClick={() => handleIncrease(item.id)}
                            className="qty-btn"
                        >
                            +
                        </button>
                    </div>
                    
                    <button 
                        onClick={() => handleRemove(item.id)}
                        className="remove-btn"
                    >
                        ✕
                    </button>
                </div>
            ))}
            
            <div className="total">
                Итого: {total.toLocaleString()} ₽
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ShoppingCart />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




