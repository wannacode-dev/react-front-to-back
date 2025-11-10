import './style.css';

function Thumbnail({ image, onImageClick }) {
    // Создайте handleClick, который вызывает onImageClick с параметром image
    
    return (
        <div 
            className="thumbnail"
            // Добавьте onClick={handleClick}
        >
            <img src={image.thumb} alt={image.title} />
            <p>{image.title}</p>
        </div>
    );
}

function App() {
    const images = [
        { id: 1, title: "Закат", thumb: "thumb1.jpeg", full: "product.jpeg" },
        { id: 2, title: "Горы", thumb: "thumb2.jpeg", full: "product.jpeg" },
        { id: 3, title: "Море", thumb: "thumb1.jpeg", full: "product.jpeg" },
        { id: 4, title: "Лес", thumb: "thumb2.jpeg", full: "product.jpeg" }
    ];
    
    // Создайте handleImageClick, который:
    // 1. Принимает параметр image
    // 2. Показывает alert с названием изображения: "Вы выбрали: {image.title}"
    
    return (
        <div className="container">
            <h1 className="title">Интерактивная галерея</h1>
            <p className="description">
                Практика: передача данных через обработчики событий
            </p>
            
            <div className="gallery">
                {/* Передайте onImageClick={handleImageClick} в каждый Thumbnail */}
                {images.map(image => (
                    <Thumbnail 
                        key={image.id}
                        image={image}
                    />
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


