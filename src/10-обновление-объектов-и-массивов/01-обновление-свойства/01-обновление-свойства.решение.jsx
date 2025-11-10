import './style.css';

const { useState } = React;

function PersonEditor() {
    const [person, setPerson] = useState({
        name: 'Иван',
        age: 25
    });
    
    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value
        });
    }
    
    function handleAgeIncrease() {
        setPerson({
            ...person,
            age: person.age + 1
        });
    }
    
    return (
        <div className="editor-container">
            <h1 className="title">Редактор персоны</h1>
            
            <div className="form">
                <input 
                    type="text"
                    value={person.name}
                    onChange={handleNameChange}
                    placeholder="Имя"
                    className="input"
                />
                
                <div className="age-control">
                    <span className="age-label">Возраст: {person.age}</span>
                    <button onClick={handleAgeIncrease} className="btn">
                        Увеличить возраст
                    </button>
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


