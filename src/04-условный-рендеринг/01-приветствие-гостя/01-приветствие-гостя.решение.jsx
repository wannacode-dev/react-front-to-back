import './style.css';

function Greeting({ isLoggedIn }) {
    if (isLoggedIn) {
        return <p className="greeting">Добро пожаловать обратно! 👋</p>;
    } else {
        return <p className="greeting">Пожалуйста, войдите в систему 🔐</p>;
    }
}

function App() {
    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Портал пользователя</h1>
                
                <div className="greeting-box">
                    <Greeting isLoggedIn={true} />
                </div>
                
                <div className="greeting-box">
                    <Greeting isLoggedIn={false} />
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




