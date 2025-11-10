import './style.css';

const { useState } = React;

function ProfileForm() {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        bio: '',
        country: 'Россия'
    });
    
    function handleChange(field, event) {
        setProfile({
            ...profile,
            [field]: event.target.value
        });
    }
    
    function handleSubmit() {
        console.log('Сохранен профиль:', profile);
    }
    
    return (
        <div className="profile-form-container">
            <h1 className="title">Редактирование профиля</h1>
            
            <div className="form">
                <input 
                    type="text"
                    value={profile.name}
                    onChange={(e) => handleChange('name', e)}
                    placeholder="Ваше имя"
                    className="input"
                />
                
                <input 
                    type="email"
                    value={profile.email}
                    onChange={(e) => handleChange('email', e)}
                    placeholder="Email"
                    className="input"
                />
                
                <textarea 
                    value={profile.bio}
                    onChange={(e) => handleChange('bio', e)}
                    placeholder="О себе"
                    className="textarea"
                    rows="4"
                />
                
                <select 
                    value={profile.country}
                    onChange={(e) => handleChange('country', e)}
                    className="select"
                >
                    <option>Россия</option>
                    <option>Украина</option>
                    <option>Беларусь</option>
                    <option>Казахстан</option>
                </select>
                
                <button onClick={handleSubmit} className="btn">
                    Сохранить
                </button>
            </div>
            
            {profile.name && profile.email && profile.bio && (
                <div className="preview">
                    <h2 className="preview-title">Превью профиля</h2>
                    <div className="preview-item">
                        <strong>Имя:</strong> {profile.name}
                    </div>
                    <div className="preview-item">
                        <strong>Email:</strong> {profile.email}
                    </div>
                    <div className="preview-item">
                        <strong>О себе:</strong> {profile.bio}
                    </div>
                    <div className="preview-item">
                        <strong>Страна:</strong> {profile.country}
                    </div>
                </div>
            )}
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


