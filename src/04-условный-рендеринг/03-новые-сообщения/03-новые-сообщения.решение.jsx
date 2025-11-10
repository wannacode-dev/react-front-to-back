import './style.css';

function MessageBadge({ hasNewMessages, count }) {
    return (
        <div className="message-box">
            <h3 className="box-title">
                Сообщения
                {hasNewMessages && <span className="badge">{count}</span>}
            </h3>
            
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




