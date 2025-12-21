import React from 'react';
 
import './style.css';

function ProductCard() {
    // Получите пропсы: title (строка), price (число), inStock (булево)
    // Помните: числа и булевы значения передаются в фигурных скобках {}
    // Например: <Component count={5} isActive={true} />
    
    return (
        <div className="product-card">
            <div className="product-icon">📦</div>
            
            <h2 className="product-title">
                {/* Выведите название товара */}
            </h2>
            
            <p className="product-price">
                {/* Выведите цену */} ₽
            </p>
            
            <div className="product-status">
                {/* Используйте тернарный оператор: если inStock true, то "В наличии ✅", иначе "Нет в наличии ❌" */}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            {/* Передайте пропсы: 
                title="Механическая клавиатура"
                price={4990}
                inStock={true}
            */}
            <ProductCard />
        </div>
    );
}

export default App;




