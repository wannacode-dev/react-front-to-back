import React from 'react';
 
import './style.css';

function PriceCard() {
    const productName = "Беспроводные наушники";
    const basePrice = 5990;
    const discount = 20;
    
    return (
        <div className="price-card">
            <div className="product-icon">🎧</div>
            
            <h2 className="product-name">
                {productName.toUpperCase()}
            </h2>
            
            <div className="price-info">
                <p className="old-price">
                    Было: {basePrice} ₽
                </p>
                
                <p className="new-price">
                    Сейчас: {basePrice - (basePrice * discount / 100)} ₽
                </p>
                
                <div className="discount-badge">
                    -{discount}%
                </div>
            </div>
            
            <p className="savings">
                Вы экономите: {basePrice * discount / 100} ₽
            </p>
            
            <div className="stock-status">
                {discount > 15 ? "🔥 Горячее предложение!" : "✅ В наличии"}
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




