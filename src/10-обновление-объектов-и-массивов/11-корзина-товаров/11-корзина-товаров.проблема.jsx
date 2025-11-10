import './style.css';

const { useState } = React;

function ShoppingCart() {
    const [cart, setCart] = useState([
        { id: 1, name: 'Ноутбук', price: 50000, quantity: 1 },
        { id: 2, name: 'Мышь', price: 1000, quantity: 2 }
    ]);
    
    // Создайте функцию handleIncrease:
    // - увеличивает quantity товара по id
    
    // Создайте функцию handleDecrease:
    // - уменьшает quantity товара по id
    // - если quantity становится 0, удаляет товар из корзины
    
    // Создайте функцию handleRemove:
    // - удаляет товар по id
    
    // Посчитайте total (общую сумму):
    const total = 0; // cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    
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
                        {/* Кнопка "-" вызывает handleDecrease */}
                        <span className="quantity">{item.quantity}</span>
                        {/* Кнопка "+" вызывает handleIncrease */}
                    </div>
                    
                    {/* Кнопка "✕" вызывает handleRemove */}
                </div>
            ))}
            
            <div className="total">
                Итого: {total} ₽
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




