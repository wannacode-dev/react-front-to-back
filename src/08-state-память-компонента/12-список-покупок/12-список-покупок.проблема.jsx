import React, { useState } from 'react';
 
import './style.css';

function ShoppingList() {
    // Создайте состояние items - массив объектов:
    // [{ id: 1, name: 'Хлеб', bought: false }]
    
    // Создайте состояние inputValue - пустая строка
    
    // Создайте функцию handleAddItem:
    // - проверяет что inputValue не пустая
    // - добавляет новый объект { id: Date.now(), name: inputValue, bought: false }
    // - очищает inputValue
    
    // Создайте функцию handleToggle(id):
    // - находит элемент по id
    // - переключает его bought
    // Используйте map: items.map(item => item.id === id ? {...item, bought: !item.bought} : item)
    
    // Создайте функцию handleRemove(id):
    // - удаляет элемент с этим id
    // Используйте filter: items.filter(item => item.id !== id)
    
    return (
        <div className="shopping-container">
            <h1 className="title">📝 Список покупок</h1>
            
            <div className="input-group">
                {/* Input для ввода товара */}
                {/* Кнопка "Добавить" */}
            </div>
            
            {/* Список товаров */}
            {/* Каждый товар показывает name */}
            {/* Чекбокс для переключения bought */}
            {/* Кнопка удаления */}
            {/* Если bought === true, добавьте класс "bought" */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ShoppingList />
        </div>
    );
}

export default App;




