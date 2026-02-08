import { getGradeLetter, formatPercentage } from '../utils/quizUtils'
import './ResultsScreen.css'

export default function ResultsScreen({ score, total, onRetake, onHome, topicName, gradeName }) {
  const percentage = formatPercentage(score, total)
  const gradeLetter = getGradeLetter(percentage)
  const isPassing = percentage >= 70

  return (
    <div className="results-screen">
      <div className="results-container">
        <div className="results-header">
          <h1>Quiz Complete! 🎉</h1>
        </div>

        <div className={`score-display ${isPassing ? 'passing' : 'failing'}`}>
          <div className="score-number">{score}/{total}</div>
          <div className="score-percentage">{percentage}%</div>
          <div className={`grade-badge ${gradeLetter.toLowerCase()}`}>{gradeLetter}</div>
        </div>

        <div className="results-info">
          <p><strong>Topic:</strong> {topicName}</p>
          <p><strong>Grade:</strong> {gradeName}</p>
          <p className={`message ${isPassing ? 'success' : 'needs-improvement'}`}>
            {isPassing
              ? `Great job! You mastered this topic! 🌟`
              : `Keep practicing! You're getting there! 💪`}
          </p>
        </div>

        <div className="results-breakdown">
          <div className="stat">
            <span className="stat-label">Correct</span>
            <span className="stat-value correct">{score}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Incorrect</span>
            <span className="stat-value incorrect">{total - score}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Accuracy</span>
            <span className="stat-value">{percentage}%</span>
          </div>
        </div>

        <div className="results-actions">
          <button className="button button-primary" onClick={onRetake}>
            🔄 Retake Quiz
          </button>
          <button className="button button-secondary" onClick={onHome}>
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}
