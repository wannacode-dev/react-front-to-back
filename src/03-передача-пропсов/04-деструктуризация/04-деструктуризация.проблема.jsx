import './style.css';

function BlogPost(props) {
    // Вместо props.title, props.author и т.д. можно использовать деструктуризацию
    // Замените function BlogPost(props) на function BlogPost({ title, author, date })
    // Это более удобный и популярный способ работы с пропсами!
    
    return (
        <article className="blog-post">
            <h2 className="post-title">{props.title}</h2>
            
            <div className="post-meta">
                <span className="post-author">✍️ {props.author}</span>
                <span className="post-date">📅 {props.date}</span>
            </div>
            
            <p className="post-excerpt">
                {props.excerpt}
            </p>
            
            <button className="read-more">Читать далее</button>
        </article>
    );
}

function App() {
    return (
        <div className="container">
            <BlogPost 
                title="Введение в React"
                author="Иван Иванов"
                date="10 ноября 2025"
                excerpt="React - это JavaScript библиотека для создания пользовательских интерфейсов."
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


