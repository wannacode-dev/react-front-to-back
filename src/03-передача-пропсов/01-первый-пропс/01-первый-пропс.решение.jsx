import './style.css';

function Greeting(props) {
    return (
        <div className="greeting">
            <h1>Привет, {props.name}!</h1>
            <p>Добро пожаловать в React</p>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Greeting name="Максим" />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


