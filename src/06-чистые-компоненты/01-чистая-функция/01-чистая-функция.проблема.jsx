import './style.css';

// ❌ ПЛОХО: Эта функция НЕ чистая - она изменяет внешнюю переменную
let guestCount = 0;

function Cup() {
    guestCount = guestCount + 1; // Побочный эффект!
    return <h3 className="cup">Чашка гостя #{guestCount}</h3>;
}

function BadExample() {
    return (
        <div className="example bad">
            <h2>❌ Нечистый компонент (плохо)</h2>
            <Cup />
            <Cup />
            <Cup />
        </div>
    );
}

// ✅ ХОРОШО: Исправьте компонент GoodCup
// Сделайте его чистым - примите номер гостя как пропс
// Не изменяйте внешние переменные!

function GoodCup() {
    // Примите пропс guest
    return <h3 className="cup">Чашка гостя #{/* Используйте пропс */}</h3>;
}

function GoodExample() {
    return (
        <div className="example good">
            <h2>✅ Чистый компонент (хорошо)</h2>
            {/* Передайте номер гостя в каждый GoodCup */}
            <GoodCup />
            <GoodCup />
            <GoodCup />
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <h1 className="title">Чистые компоненты</h1>
            <p className="description">
                Компонент должен быть чистой функцией - всегда возвращать одинаковый результат для одинаковых входных данных
            </p>
            
            <BadExample />
            <GoodExample />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


