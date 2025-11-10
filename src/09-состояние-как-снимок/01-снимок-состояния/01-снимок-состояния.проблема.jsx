import './style.css';

const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);
    
    // Создайте функцию handleClick:
    // - выводит в console.log текущее значение count
    // - вызывает setCount(count + 1)
    // - снова выводит в console.log count
    // Посмотрите в консоль - что выведется? Почему второй вывод не изменился?
    
    return (
        <div className="counter-container">
            <h1 className="title">Снимок состояния</h1>
            <div className="description">
                State - это снимок! Он не меняется во время рендера.
            </div>
            <div className="count">{count}</div>
            {/* Добавьте кнопку с текстом "Увеличить и вывести" */}
            {/* При клике вызывает handleClick */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Counter />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


