import './style.css';

function Thumbnail({ image, onImageClick }) {
    function handleClick() {
        onImageClick(image);
    }
    
    return (
        <div 
            className="thumbnail"
            onClick={handleClick}
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
    
    function handleImageClick(image) {
        alert(`Вы выбрали: ${image.title}`);
    }
    
    return (
        <div className="container">
            <h1 className="title">Интерактивная галерея</h1>
            <p className="description">
                Практика: передача данных через обработчики событий
            </p>
            
            <div className="gallery">
                {images.map(image => (
                    <Thumbnail 
                        key={image.id}
                        image={image}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


