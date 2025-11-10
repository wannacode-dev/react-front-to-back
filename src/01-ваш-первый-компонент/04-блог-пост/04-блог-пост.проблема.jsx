import './style.css';

function PostHeader() {
    // Верните div с классом "post-header" содержащий:
    // - h1 с текстом "Мой первый пост в блоге" и классом "post-title"
    // - p с текстом "Автор: Иван Петров" и классом "post-author"
}

function PostContent() {
    // Верните div с классом "post-content" содержащий:
    // - p с текстом "Это мой первый пост о React. Мне очень нравится создавать компоненты!"
}

function PostFooter() {
    // Верните div с классом "post-footer" содержащий:
    // - p с текстом "Опубликовано: 9 ноября 2025" и классом "post-date"
    // - button с текстом "Читать далее" и классом "read-more-btn"
}

function BlogPost() {
    return (
        <article className="blog-post">
            {/* Используйте компоненты PostHeader, PostContent и PostFooter */}
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


