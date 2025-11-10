import './style.css';

const { useState } = React;

function ProfileForm() {
    // Создайте состояние profile - объект:
    // { name: '', email: '', bio: '', country: 'Россия' }
    
    // Создайте универсальную функцию handleChange:
    // принимает event и field
    // обновляет нужное поле используя spread оператор
    
    // Создайте функцию handleSubmit:
    // выводит profile в console.log
    
    return (
        <div className="profile-form-container">
            <h1 className="title">Редактирование профиля</h1>
            
            <div className="form">
                {/* Input для name, placeholder: "Ваше имя" */}
                
                {/* Input для email, type="email", placeholder: "Email" */}
                
                {/* Textarea для bio, placeholder: "О себе" */}
                
                {/* Select для country с опциями: Россия, Украина, Беларусь, Казахстан */}
                
                {/* Кнопка "Сохранить" вызывает handleSubmit */}
            </div>
            
            {/* Если все поля заполнены, покажите превью профиля */}
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <ProfileForm />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


