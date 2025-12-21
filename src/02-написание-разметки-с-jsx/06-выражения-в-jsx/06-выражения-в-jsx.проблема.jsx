import React from 'react';
 
import './style.css';

function PriceCard() {
    const productName = "Беспроводные наушники";
    const basePrice = 5990;
    const discount = 20; // процент скидки
    
    // В фигурных скобках {} можно использовать любые JavaScript выражения:
    // - математические операции
    // - методы строк (toUpperCase, toLowerCase)
    // - тернарный оператор (условие ? да : нет)
    // - вызовы функций
    
    return (
        <div className="price-card">
            <div className="product-icon">🎧</div>
            
            <h2 className="product-name">
                {/* Выведите название товара ЗАГЛАВНЫМИ буквами используя toUpperCase() */}
            </h2>
            
            <div className="price-info">
                <p className="old-price">
                    Было: {/* Выведите базовую цену */} ₽
                </p>
                
                <p className="new-price">
                    Сейчас: {/* Вычислите новую цену: basePrice - (basePrice * discount / 100) */} ₽
                </p>
                
                <div className="discount-badge">
                    -{/* Выведите процент скидки */}%
                </div>
            </div>
            
            <p className="savings">
                Вы экономите: {/* Вычислите сумму экономии: basePrice * discount / 100 */} ₽
            </p>
            
            <div className="stock-status">
                {/* Используйте тернарный оператор: если discount > 15, то "🔥 Горячее предложение!", иначе "✅ В наличии" */}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <PriceCard />
        </div>
    );
}

export default App;




