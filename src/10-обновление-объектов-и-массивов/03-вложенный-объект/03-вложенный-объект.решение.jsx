import './style.css';

const { useState } = React;

function AddressEditor() {
    const [person, setPerson] = useState({
        name: 'Мария',
        address: {
            city: 'Москва',
            street: 'Тверская',
            building: '1'
        }
    });
    
    function handleCityChange(e) {
        setPerson({
            ...person,
            address: {
                ...person.address,
                city: e.target.value
            }
        });
    }
    
    function handleStreetChange(e) {
        setPerson({
            ...person,
            address: {
                ...person.address,
                street: e.target.value
            }
        });
    }
    
    function handleBuildingChange(e) {
        setPerson({
            ...person,
            address: {
                ...person.address,
                building: e.target.value
            }
        });
    }
    
    return (
        <div className="address-container">
            <h1 className="title">Редактор адреса</h1>
            
            <div className="form">
                <input 
                    type="text"
                    value={person.name}
                    placeholder="Имя"
                    className="input"
                    disabled
                />
                
                <input 
                    type="text"
                    value={person.address.city}
                    onChange={handleCityChange}
                    placeholder="Город"
                    className="input"
                />
                
                <input 
                    type="text"
                    value={person.address.street}
                    onChange={handleStreetChange}
                    placeholder="Улица"
                    className="input"
                />
                
                <input 
                    type="text"
                    value={person.address.building}
                    onChange={handleBuildingChange}
                    placeholder="Дом"
                    className="input"
                />
            </div>
            
            <div className="preview">
                <strong>{person.name}</strong><br />
                г. {person.address.city}, ул. {person.address.street}, д. {person.address.building}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <AddressEditor />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


