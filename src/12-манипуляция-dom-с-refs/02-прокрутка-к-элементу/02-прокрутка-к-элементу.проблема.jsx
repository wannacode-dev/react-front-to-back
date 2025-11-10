import './style.css';

const { useRef } = React;

function ScrollExample() {
    // Создайте три ref для трех секций
    // const firstRef = useRef(null);
    // const secondRef = useRef(null);
    // const thirdRef = useRef(null);
    
    // Создайте функции для прокрутки к каждой секции:
    // firstRef.current.scrollIntoView({ behavior: 'smooth' })
    
    return (
        <div className="scroll-container">
            <div className="nav">
                {/* Три кнопки для прокрутки к секциям */}
            </div>
            
            <div className="content">
                <div className="section section-1">
                    <h2>Первая секция</h2>
                </div>
                
                <div className="section section-2">
                    <h2>Вторая секция</h2>
                </div>
                
                <div className="section section-3">
                    <h2>Третья секция</h2>
                </div>
            </div>
        </div>
    );
}

function App() {
    return <ScrollExample />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


