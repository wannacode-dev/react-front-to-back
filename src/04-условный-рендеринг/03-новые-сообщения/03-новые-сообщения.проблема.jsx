import './style.css';

function MessageBadge({ hasNewMessages, count }) {
    // Используйте оператор && для условного рендеринга
    // Синтаксис: условие && <элемент>
    // Если условие true - элемент отобразится, если false - ничего не отобразится
    
    return (
        <div className="message-box">
            <h3 className="box-title">Сообщения</h3>
            
            {/* Если hasNewMessages true, покажите бейдж с количеством */}
            {/* Используйте: hasNewMessages && <span className="badge">{count}</span> */}
            
            <p className="box-text">
                {hasNewMessages ? "У вас есть новые сообщения!" : "Нет новых сообщений"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="page-title">Панель уведомлений</h1>
            
            <div className="notifications-grid">
                <MessageBadge hasNewMessages={true} count={5} />
                <MessageBadge hasNewMessages={false} count={0} />
                <MessageBadge hasNewMessages={true} count={12} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




