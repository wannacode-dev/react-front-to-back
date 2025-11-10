import './style.css';

const { useState } = React;

function DelayedForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(null);
    
    // Создайте функцию handleSubmit:
    // - отменяет действие по умолчанию (e.preventDefault())
    // - устанавливает isSubmitting в true
    // - через 2 секунды:
    //   - устанавливает submitted в объект { name, email }
    //   - устанавливает isSubmitting в false
    //   - очищает поля (name и email в '')
    // Используйте setTimeout
    
    return (
        <div className="form-container">
            <h1 className="title">Отложенная отправка формы</h1>
            
            <form>
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
                
                {/* Кнопка отправки */}
                {/* disabled если isSubmitting или поля пусты */}
                {/* Текст: isSubmitting ? "Отправка..." : "Отправить" */}
            </form>
            
            {/* Если submitted существует, покажите сообщение: */}
            {/* "Отправлено: {submitted.name}, {submitted.email}" */}
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


