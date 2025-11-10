import './style.css';

const { useState } = React;

function ColorPicker() {
    const [color, setColor] = useState({
        name: 'Красный',
        hex: '#ff0000'
    });
    
    function setRed() {
        setColor({
            name: 'Красный',
            hex: '#ff0000'
        });
    }
    
    function setGreen() {
        setColor({
            name: 'Зеленый',
            hex: '#00ff00'
        });
    }
    
    function setBlue() {
        setColor({
            name: 'Синий',
            hex: '#0000ff'
        });
    }
    
    return (
        <div className="picker-container">
            <h1 className="title">Выбор цвета</h1>
            
            <div className="buttons">
                <button onClick={setRed} className="btn btn-red">
                    Красный
                </button>
                <button onClick={setGreen} className="btn btn-green">
                    Зеленый
                </button>
                <button onClick={setBlue} className="btn btn-blue">
                    Синий
                </button>
            </div>
            
            <div className="color-name">
                Выбран: {color.name}
            </div>
            
            <div 
                className="color-preview"
                style={{ backgroundColor: color.hex }}
            ></div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ColorPicker />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




