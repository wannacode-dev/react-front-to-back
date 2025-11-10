import './style.css';

const { useState } = React;

function LightSwitch() {
    // Создайте состояние isOn с начальным значением false
    
    // Создайте функцию handleToggle, которая переключает isOn
    // (если было true - станет false, и наоборот)
    
    return (
        <div className="switch-container">
            <h1 className="title">Выключатель света</h1>
            {/* Если isOn === true, выведите "💡 Свет включен", иначе "🌙 Свет выключен" */}
            {/* Добавьте div с классом "bulb" и классом "on" если isOn === true */}
            {/* Добавьте кнопку с текстом "Переключить" */}
            {/* При клике вызывайте handleToggle */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <LightSwitch />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




