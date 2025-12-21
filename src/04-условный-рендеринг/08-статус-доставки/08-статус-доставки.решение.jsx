import React from 'react';
 
import './style.css';

function OrderStatus({ status, trackingNumber, estimatedDate }) {
    return (
        <div className={`order-card order-${status}`}>
            {status === "processing" && (
                <>
                    <h3 className="order-title">📦 Заказ обрабатывается</h3>
                    <p className="order-info">Номер заказа: {trackingNumber}</p>
                </>
            )}
            
            {status === "shipped" && (
                <>
                    <h3 className="order-title">🚚 Заказ отправлен</h3>
                    <p className="order-info">Номер отслеживания: {trackingNumber}</p>
                    <p className="order-info">Ожидаемая дата: {estimatedDate}</p>
                </>
            )}
            
            {status === "delivered" && (
                <>
                    <h3 className="order-title">✅ Заказ доставлен</h3>
                    <p className="order-info">Спасибо за покупку!</p>
                </>
            )}
            
            {status === "cancelled" && (
                <>
                    <h3 className="order-title">❌ Заказ отменён</h3>
                    <p className="order-info">Свяжитесь с поддержкой для уточнения деталей</p>
                </>
            )}
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




