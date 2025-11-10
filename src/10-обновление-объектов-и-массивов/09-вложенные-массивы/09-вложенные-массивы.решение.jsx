import './style.css';

const { useState } = React;

function Board() {
    const [board, setBoard] = useState([
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['O', 'X', 'X']
    ]);
    
    function handleClick(rowIndex, colIndex) {
        setBoard(board.map((row, i) =>
            i === rowIndex ? row.map((cell, j) =>
                j === colIndex ? (cell === 'X' ? 'O' : 'X') : cell
            ) : row
        ));
    }
    
    return (
        <div className="board-container">
            <h1 className="title">Игровое поле</h1>
            
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <button
                                key={colIndex}
                                onClick={() => handleClick(rowIndex, colIndex)}
                                className="cell"
                            >
                                {cell}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

function App() {
    return (
        <div className="container">
            <Board />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


