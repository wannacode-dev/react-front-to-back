import React, { useState } from 'react';
 
import './style.css';

function ClickerGame() {
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [autoClickers, setAutoClickers] = useState(0);
    
    // Создайте функцию handleClick:
    // - увеличивает score на multiplier
    // - используйте функцию обновления
    
    // Создайте функцию buyMultiplier:
    // - если score >= 10:
    //   - уменьшает score на 10
    //   - увеличивает multiplier на 1
    // - используйте функции обновления
    
    // Создайте функцию buyAutoClicker:
    // - если score >= 50:
    //   - уменьшает score на 50
    //   - увеличивает autoClickers на 1
    // - используйте функции обновления
    
    // Бонус: используйте useEffect для автоклика
    // React.useEffect(() => {
    //   if (autoClickers > 0) {
    //     const interval = setInterval(() => {
    //       setScore(prev => prev + autoClickers);
    //     }, 1000);
    //     return () => clearInterval(interval);
    //   }
    // }, [autoClickers]);
    
    return (
        <div className="game-container">
            <h1 className="title">🎮 Кликер</h1>
            
            <div className="score">Счет: {score}</div>
            
            <button className="click-btn">
                КЛИК! (+{multiplier})
            </button>
            
            <div className="upgrades">
                <div className="upgrade">
                    <div className="upgrade-name">Множитель: x{multiplier}</div>
                    {/* Кнопка "Купить (10)" вызывает buyMultiplier */}
                    {/* disabled если score < 10 */}
                </div>
                
                <div className="upgrade">
                    <div className="upgrade-name">Автоклик: {autoClickers}/сек</div>
                    {/* Кнопка "Купить (50)" вызывает buyAutoClicker */}
                    {/* disabled если score < 50 */}
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ClickerGame />
        </div>
    );
}

export default App;




