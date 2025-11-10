import './style.css';

const { useState } = React;

function ContactForm() {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    
    function handleChange(field, e) {
        setContact({
            ...contact,
            [field]: e.target.value
        });
    }
    
    const isComplete = contact.firstName && contact.lastName && 
                       contact.email && contact.phone;
    
    return (
        <div className="form-container">
            <h1 className="title">Форма контакта</h1>
            
            <div className="form">
                <input 
                    type="text"
                    value={contact.firstName}
                    onChange={(e) => handleChange('firstName', e)}
                    placeholder="Имя"
                    className="input"
                />
                
                <input 
                    type="text"
                    value={contact.lastName}
                    onChange={(e) => handleChange('lastName', e)}
                    placeholder="Фамилия"
                    className="input"
                />
                
                <input 
                    type="email"
                    value={contact.email}
                    onChange={(e) => handleChange('email', e)}
                    placeholder="Email"
                    className="input"
                />
                
                <input 
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => handleChange('phone', e)}
                    placeholder="Телефон"
                    className="input"
                />
            </div>
            
            {isComplete && (
                <div className="contact-card">
                    <div className="card-item">
                        <strong>Имя:</strong> {contact.firstName} {contact.lastName}
                    </div>
                    <div className="card-item">
                        <strong>Email:</strong> {contact.email}
                    </div>
                    <div className="card-item">
                        <strong>Телефон:</strong> {contact.phone}
                    </div>
                </div>
            )}
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


