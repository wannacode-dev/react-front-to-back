import './style.css';

function PostHeader() {
    return (
        <div className="post-header">
            <h1 className="post-title">Мой первый пост в блоге</h1>
            <p className="post-author">Автор: Иван Петров</p>
        </div>
    );
}

function PostContent() {
    return (
        <div className="post-content">
            <p>Это мой первый пост о React. Мне очень нравится создавать компоненты!</p>
        </div>
    );
}

function PostFooter() {
    return (
        <div className="post-footer">
            <p className="post-date">Опубликовано: 9 ноября 2025</p>
            <button className="read-more-btn">Читать далее</button>
        </div>
    );
}

function BlogPost() {
    return (
        <article className="blog-post">
            <PostHeader />
            <PostContent />
            <PostFooter />
        </article>
    );
}

function App() {
    return (
        <div className="app-container">
            <BlogPost />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


