import React from 'react';
 
import './style.css';

function App() {
    const messages = [];
    
    // Раскомментируйте, чтобы увидеть список с сообщениями:
    // const messages = [
    //     { id: 1, from: "Анна", text: "Привет! Как дела?" },
    //     { id: 2, from: "Иван", text: "Встреча перенесена на 15:00" },
    //     { id: 3, from: "Мария", text: "Отчёт готов" }
    // ];
    
    return (
        <div className="container">
            <h1 className="title">Входящие сообщения</h1>
            
            <div className="messages-box">
                {messages.length === 0 ? (
                    <p className="empty-state">📭 Нет сообщений</p>
                ) : (
                    messages.map(message => (
                        <div key={message.id} className="message">
                            <div className="message-from">{message.from}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default App;




