import React from 'react';
 
import './style.css';

function Card() {
    // Получите специальный пропс children
    // children - это всё, что находится между открывающим и закрывающим тегом компонента
    // Пример: <Card>содержимое</Card> - "содержимое" это children
    
    return (
        <div className="card">
            <div className="card-content">
                {/* Выведите children здесь */}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Card>
                <h2>Первая карточка</h2>
                <p>Это содержимое первой карточки</p>
            </Card>
            
            <Card>
                <h2>Вторая карточка</h2>
                <p>Это содержимое второй карточки</p>
                <button className="btn">Нажми меня</button>
            </Card>
            
            <Card>
                <div className="emoji-content">
                    <div className="big-emoji">🎉</div>
                    <p>Третья карточка с эмодзи!</p>
                </div>
            </Card>
        </div>
    );
}

export default App;




