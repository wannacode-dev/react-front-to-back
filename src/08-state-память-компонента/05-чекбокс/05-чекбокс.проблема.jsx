import './style.css';

const { useState } = React;

function TermsAgreement() {
    // Создайте состояние isAgreed с начальным значением false
    
    // Создайте функцию handleCheck, которая переключает isAgreed
    
    return (
        <div className="agreement-container">
            <h1 className="title">Регистрация</h1>
            
            <div className="terms">
                <label className="checkbox-label">
                    {/* Создайте input с типом checkbox */}
                    {/* checked должен быть равен isAgreed */}
                    {/* onChange должен вызывать handleCheck */}
                    <span>Я согласен с условиями использования</span>
                </label>
            </div>
            
            {/* Создайте кнопку "Зарегистрироваться" */}
            {/* disabled={!isAgreed} - кнопка активна только если isAgreed === true */}
            {/* При клике выводите в console.log: "Регистрация успешна!" */}
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


