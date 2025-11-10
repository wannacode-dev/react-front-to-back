import './style.css';

function BlogPost({ title, author, date, excerpt }) {
    return (
        <article className="blog-post">
            <h2 className="post-title">{title}</h2>
            
            <div className="post-meta">
                <span className="post-author">✍️ {author}</span>
                <span className="post-date">📅 {date}</span>
            </div>
            
            <p className="post-excerpt">
                {excerpt}
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


