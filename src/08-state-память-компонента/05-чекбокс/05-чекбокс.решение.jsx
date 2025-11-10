import './style.css';

const { useState } = React;

function TermsAgreement() {
    const [isAgreed, setIsAgreed] = useState(false);
    
    function handleCheck() {
        setIsAgreed(!isAgreed);
    }
    
    function handleSubmit() {
        console.log('Регистрация успешна!');
    }
    
    return (
        <div className="agreement-container">
            <h1 className="title">Регистрация</h1>
            
            <div className="terms">
                <label className="checkbox-label">
                    <input 
                        type="checkbox"
                        checked={isAgreed}
                        onChange={handleCheck}
                        className="checkbox"
                    />
                    <span>Я согласен с условиями использования</span>
                </label>
            </div>
            
            <button 
                onClick={handleSubmit}
                disabled={!isAgreed}
                className="btn"
            >
                Зарегистрироваться
            </button>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <TermsAgreement />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


