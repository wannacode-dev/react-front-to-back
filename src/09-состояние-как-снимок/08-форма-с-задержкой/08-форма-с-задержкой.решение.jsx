import './style.css';

const { useState } = React;

function DelayedForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(null);
    
    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            setSubmitted({ name, email });
            setIsSubmitting(false);
            setName('');
            setEmail('');
        }, 2000);
    }
    
    return (
        <div className="form-container">
            <h1 className="title">Отложенная отправка формы</h1>
            
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя"
                    className="input"
                    disabled={isSubmitting}
                />
                
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input"
                    disabled={isSubmitting}
                />
                
                <button 
                    type="submit"
                    className="btn"
                    disabled={isSubmitting || !name || !email}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
            </form>
            
            {submitted && (
                <div className="success">
                    Отправлено: {submitted.name}, {submitted.email}
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <DelayedForm />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




