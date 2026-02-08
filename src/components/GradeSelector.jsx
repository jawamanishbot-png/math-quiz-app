import './GradeSelector.css'

export default function GradeSelector({ onSelectGrade }) {
  const grades = [6, 7, 8]

  return (
    <div className="grade-selector">
      <div className="header">
        <h1>🧮 Math Quiz</h1>
        <p>Select your grade to get started</p>
      </div>

      <div className="grade-buttons">
        {grades.map((grade) => (
          <button
            key={grade}
            className="grade-button"
            onClick={() => onSelectGrade(grade)}
          >
            <span className="grade-number">Grade {grade}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
