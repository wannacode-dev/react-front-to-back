import './style.css';

const { useRef } = React;

function ScrollExample() {
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);
    
    function scrollToFirst() {
        firstRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    function scrollToSecond() {
        secondRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    function scrollToThird() {
        thirdRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    return (
        <div className="scroll-container">
            <div className="nav">
                <button onClick={scrollToFirst} className="nav-btn">К первой</button>
                <button onClick={scrollToSecond} className="nav-btn">Ко второй</button>
                <button onClick={scrollToThird} className="nav-btn">К третьей</button>
            </div>
            
            <div className="content">
                <div ref={firstRef} className="section section-1">
                    <h2>Первая секция</h2>
                </div>
                
                <div ref={secondRef} className="section section-2">
                    <h2>Вторая секция</h2>
                </div>
                
                <div ref={thirdRef} className="section section-3">
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




