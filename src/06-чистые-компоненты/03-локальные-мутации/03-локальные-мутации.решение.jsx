import './style.css';

function TeaGathering({ cups }) {
    const teaCups = [];
    
    for (let i = 1; i <= cups; i++) {
        teaCups.push(
            <div key={i} className="cup">
                ☕ Чашка #{i}
            </div>
        );
    }
    
    return (
        <div className="gathering">
            <h2>Чайная церемония</h2>
            <div className="cups-container">
                {teaCups}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="title">Локальные мутации</h1>
            <p className="description">
                Изменять переменные и объекты, созданные ВНУТРИ компонента во время рендеринга - это нормально!
            </p>
            
            <TeaGathering cups={5} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




