import './style.css';

const { useState } = React;

function ColorPicker() {
    // Создайте состояние color - объект:
    // { name: 'Красный', hex: '#ff0000' }
    
    // Создайте функции для смены цвета:
    // setRed - меняет на { name: 'Красный', hex: '#ff0000' }
    // setGreen - меняет на { name: 'Зеленый', hex: '#00ff00' }
    // setBlue - меняет на { name: 'Синий', hex: '#0000ff' }
    
    return (
        <div className="picker-container">
            <h1 className="title">Выбор цвета</h1>
            
            <div className="buttons">
                {/* Создайте три кнопки для выбора цвета */}
                {/* При клике каждая вызывает соответствующую функцию */}
            </div>
            
            {/* Выведите название цвета с классом "color-name" */}
            {/* Создайте div с классом "color-preview" */}
            {/* У него style={{ backgroundColor: color.hex }} */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ColorPicker />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




