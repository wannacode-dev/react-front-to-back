import './style.css';

// Глобальная переменная
let postCount = 0;

// ❌ ПЛОХО: Побочные эффекты во время рендеринга!
function BadPost({ title }) {
    postCount++; // Изменение глобальной переменной
    document.title = title; // Изменение DOM
    console.log("Рендерим пост"); // Вывод в консоль
    
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>Пост #{postCount}</p>
        </div>
    );
}

// ✅ ХОРОШО: Исправьте компонент GoodPost
// Уберите все побочные эффекты
// Примите postNumber как пропс

function GoodPost({ title, postNumber }) {
    // Не изменяйте глобальные переменные
    // Не обращайтесь к document
    // Не используйте console.log во время рендеринга
    
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
            
            <div className="examples">
                <div className="section bad">
                    <h2>❌ С побочными эффектами</h2>
                    <BadPost title="Первый пост" />
                    <BadPost title="Второй пост" />
                </div>
                
                <div className="section good">
                    <h2>✅ Без побочных эффектов</h2>
                    <GoodPost title="Первый пост" postNumber={1} />
                    <GoodPost title="Второй пост" postNumber={2} />
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


