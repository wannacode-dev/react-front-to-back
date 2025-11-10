import './style.css';

function PriceCalculator({ basePrice, quantity, discount = 0 }) {
    // Выполните все вычисления ВНУТРИ компонента
    // 1. Вычислите subtotal = basePrice * quantity
    // 2. Вычислите discountAmount = subtotal * (discount / 100)
    // 3. Вычислите total = subtotal - discountAmount
    
    return (
        <div className="calculator">
            <h3>Калькулятор цены</h3>
            
            <div className="calc-row">
                <span>Цена за единицу:</span>
                <span className="value">{basePrice} ₽</span>
            </div>
            
            <div className="calc-row">
                <span>Количество:</span>
                <span className="value">{quantity}</span>
            </div>
            
            <div className="calc-row">
                <span>Промежуточная сумма:</span>
                <span className="value">{/* Выведите subtotal */} ₽</span>
            </div>
            
            {discount > 0 && (
                <div className="calc-row discount">
                    <span>Скидка ({discount}%):</span>
                    <span className="value">-{/* Выведите discountAmount */} ₽</span>
                </div>
            )}
            
            <div className="calc-row total">
                <span>Итого:</span>
                <span className="value">{/* Выведите total */} ₽</span>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="title">Вычисления в компонентах</h1>
            <p className="description">
                Все вычисления можно безопасно выполнять внутри компонента во время рендеринга
            </p>
            
            <div className="calculators">
                <PriceCalculator basePrice={1000} quantity={3} discount={10} />
                <PriceCalculator basePrice={500} quantity={5} discount={0} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




