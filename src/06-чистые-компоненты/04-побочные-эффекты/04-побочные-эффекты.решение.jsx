import './style.css';

function Post({ title, postNumber }) {
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>Пост #{postNumber}</p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="title">Побочные эффекты</h1>
            <p className="description">
                Во время рендеринга нельзя: изменять глобальные переменные, обращаться к DOM, делать сетевые запросы
            </p>
            
            <div className="section good">
                <h2>✅ Без побочных эффектов</h2>
                <Post title="Первый пост" postNumber={1} />
                <Post title="Второй пост" postNumber={2} />
                <Post title="Третий пост" postNumber={3} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

