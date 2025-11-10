import './style.css';

function Cup({ guest }) {
    return <h3 className="cup">Чашка гостя #{guest}</h3>;
}

function App() {
    return (
        <div className="container">
            <h1 className="title">Чистые компоненты</h1>
            <p className="description">
                Компонент должен быть чистой функцией - всегда возвращать одинаковый результат для одинаковых входных данных
            </p>
            
            <div className="example good">
                <h2>✅ Чистый компонент</h2>
                <Cup guest={1} />
                <Cup guest={2} />
                <Cup guest={3} />
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

