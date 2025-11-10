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
    
    // Создайте функцию handleCityChange:
    // - обновляет city внутри вложенного объекта address
    // - нужно скопировать и person, и address:
    // setPerson({
    //   ...person,
    //   address: {
    //     ...person.address,
    //     city: e.target.value
    //   }
    // })
    
    // Аналогично создайте handleStreetChange и handleBuildingChange
    
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
                    placeholder="Город"
                    className="input"
                />
                
                <input 
                    type="text"
                    value={person.address.street}
                    placeholder="Улица"
                    className="input"
                />
                
                <input 
                    type="text"
                    value={person.address.building}
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


