import React from 'react';
 
import './style.css';

function OrderStatus({ status, trackingNumber, estimatedDate }) {
    // Отобразите разный контент на основе статуса заказа
    // status может быть: "processing", "shipped", "delivered", "cancelled"
    // 
    // processing: "📦 Заказ обрабатывается" + "Номер заказа: {trackingNumber}"
    // shipped: "🚚 Заказ отправлен" + "Номер отслеживания: {trackingNumber}" + "Ожидаемая дата: {estimatedDate}"
    // delivered: "✅ Заказ доставлен" + "Спасибо за покупку!"
    // cancelled: "❌ Заказ отменён" + "Свяжитесь с поддержкой для уточнения деталей"
    
    return (
        <div className={`order-card order-${status}`}>
            {/* Используйте условный рендеринг для отображения нужного контента */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="page-title">Мои заказы</h1>
            
            <div className="orders-list">
                <OrderStatus 
                    status="processing" 
                    trackingNumber="ORD-12345"
                />
                
                <OrderStatus 
                    status="shipped" 
                    trackingNumber="TRK-98765"
                    estimatedDate="15 ноября 2025"
                />
                
                <OrderStatus 
                    status="delivered" 
                    trackingNumber="TRK-54321"
                />
                
                <OrderStatus 
                    status="cancelled" 
                    trackingNumber="ORD-11111"
                />
            </div>
        </div>
    );
}

export default App;




