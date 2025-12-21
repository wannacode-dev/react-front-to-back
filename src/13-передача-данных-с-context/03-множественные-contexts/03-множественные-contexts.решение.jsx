import React, { createContext, useContext, useState } from 'react';
 
import './style.css';

const UserContext = createContext();
const ThemeContext = createContext();

function UserInfo() {
    const user = useContext(UserContext);
    const theme = useContext(ThemeContext);
    
    return (
        <div className={`user-info ${theme}`}>
            <h2>User: {user.name}</h2>
            <p>Role: {user.role}</p>
            <p>Theme: {theme}</p>
        </div>
    );
}

function App() {
    const [user, setUser] = useState({ name: 'Иван', role: 'Admin' });
    const [theme, setTheme] = useState('dark');
    
    return (
        <UserContext.Provider value={user}>
            <ThemeContext.Provider value={theme}>
                <div className={`app ${theme}`}>
                    <UserInfo />
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}

export default App;




