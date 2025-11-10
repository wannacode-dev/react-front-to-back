import './style.css';

const { useState } = React;

function PersonEditor() {
    const [person, setPerson] = useState({
        name: 'Иван',
        age: 25
    });
    
    // Создайте функцию handleNameChange:
    // - обновляет свойство name
    // - используйте spread: setPerson({ ...person, name: e.target.value })
    
    // Создайте функцию handleAgeIncrease:
    // - увеличивает age на 1
    // - используйте spread: setPerson({ ...person, age: person.age + 1 })
    
    return (
        <div className="editor-container">
            <h1 className="title">Редактор персоны</h1>
            
            <div className="form">
                <input 
                    type="text"
                    value={person.name}
                    placeholder="Имя"
                    className="input"
                />
                
                <div className="age-control">
                    <span className="age-label">Возраст: {person.age}</span>
                    {/* Кнопка "Увеличить возраст" */}
                </div>
            </div>
            
            <div className="preview">
                <strong>Превью:</strong> {person.name}, {person.age} лет
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <PersonEditor />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




