import './style.css';

function Greeting() {
    return <h1 className="greeting">Привет, React!</h1>;
}

function App() {
    return (
        <div className="container">
            <Greeting />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
