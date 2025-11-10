import './style.css';

const { useState } = React;

function ContactForm() {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    
    // Создайте универсальную функцию handleChange:
    // - принимает field (название поля) и event
    // - обновляет нужное поле используя вычисляемые свойства:
    // setContact({ ...contact, [field]: e.target.value })
    
    return (
        <div className="form-container">
            <h1 className="title">Форма контакта</h1>
            
            <div className="form">
                <input 
                    type="text"
                    value={contact.firstName}
                    placeholder="Имя"
                    className="input"
                />
                
                <input 
                    type="text"
                    value={contact.lastName}
                    placeholder="Фамилия"
                    className="input"
                />
                
                <input 
                    type="email"
                    value={contact.email}
                    placeholder="Email"
                    className="input"
                />
                
                <input 
                    type="tel"
                    value={contact.phone}
                    placeholder="Телефон"
                    className="input"
                />
            </div>
            
            {/* Если все поля заполнены, покажите карточку контакта */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ContactForm />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




