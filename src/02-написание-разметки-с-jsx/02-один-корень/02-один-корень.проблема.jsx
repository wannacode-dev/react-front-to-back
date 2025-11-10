import './style.css';

function Header() {
    // JSX компонент должен возвращать ОДИН корневой элемент!
    // Оберните все элементы в один div или используйте фрагмент <>...</>
    
    return (
        <h1 className="title">Мой блог</h1>
        <p className="subtitle">Заметки о программировании</p>
    );
}

function Article() {
    // Исправьте эту ошибку тоже!
    
    return (
        <h2 className="article-title">Почему я люблю React</h2>
        <p className="article-text">React делает разработку простой и приятной.</p>
        <p className="article-text">Компоненты легко переиспользовать.</p>
    );
}

function App() {
    return (
        <div className="container">
            <Header />
            <Article />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


