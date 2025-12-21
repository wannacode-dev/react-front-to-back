import React from 'react';
 
import './style.css';

function App() {
    const messages = [];
    
    // Обработайте случай пустого массива
    // Если messages.length === 0, покажите сообщение "Нет сообщений"
    // Иначе отобразите список сообщений
    // Используйте условный рендеринг + map
    
    return (
        <div className="container">
            <h1 className="title">Входящие сообщения</h1>
            
            <div className="messages-box">
                {/* Проверьте длину массива и отобразите соответствующий контент */}
                {/* Если пусто - <p className="empty-state">📭 Нет сообщений</p> */}
                {/* Иначе - отобразите messages через map */}
            </div>
        </div>
    );
}

export default App;




