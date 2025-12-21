import React from 'react';
 
import './style.css';

function ProductCard() {
    // Создайте компонент, который принимает пропсы: id, name, price, image
    // Верните карточку товара с этими данными
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
                {/* Используйте map для отображения всех товаров */}
                {/* Передайте все свойства из product в ProductCard */}
                {/* Не забудьте про key! */}
            </div>
        </div>
    );
}

export default App;




