import './style.css';

const { useState } = React;

function TagList() {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
    function handleInputChange(e) {
        setInputValue(e.target.value);
    }
    
    function handleAddTag() {
        if (inputValue.trim() !== '') {
            setTags([...tags, inputValue]);
            setInputValue('');
        }
    }
    
    return (
        <div className="tags-container">
            <h1 className="title">Список тегов</h1>
            
            <div className="input-group">
                <input 
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Введите тег"
                    className="input"
                />
                <button onClick={handleAddTag} className="btn">
                    Добавить
                </button>
            </div>
            
            <div className="tags-list">
                {tags.map((tag, index) => (
                    <div key={index} className="tag">
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <TagList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




