import './style.css';

function App() {
    const students = [
        { id: 1, name: "Анна Смирнова", grade: 5, subjects: ["Математика", "Физика", "Химия"] },
        { id: 2, name: "Иван Петров", grade: 4, subjects: ["История", "Литература"] },
        { id: 3, name: "Мария Козлова", grade: 5, subjects: ["Биология", "География", "Английский"] },
        { id: 4, name: "Дмитрий Иванов", grade: 3, subjects: ["Физика", "Информатика"] },
        { id: 5, name: "Елена Волкова", grade: 5, subjects: ["Математика", "Физика", "Информатика", "Английский"] }
    ];
    
    return (
        <div className="container">
            <h1 className="title">Список учеников</h1>
            
            <div className="table-container">
                <table className="students-table">
                    <thead>
                        <tr>
                            <th>Имя</th>
                            <th>Класс</th>
                            <th>Предметов</th>
                            <th>Предметы</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td className="grade-cell">{student.grade}</td>
                                <td className="count-cell">{student.subjects.length}</td>
                                <td>
                                    <div className="subjects-list">
                                        {student.subjects.map(subject => (
                                            <span key={subject} className="subject-tag">
                                                {subject}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


