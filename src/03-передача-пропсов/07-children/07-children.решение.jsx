import React from 'react';
 
import './style.css';

function Card({ children }) {
    return (
        <div className="card">
            <div className="card-content">
                {children}
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




