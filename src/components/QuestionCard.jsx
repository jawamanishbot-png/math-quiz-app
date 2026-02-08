import { useState } from 'react'
import './QuestionCard.css'

export default function QuestionCard({ question, questionIndex, totalQuestions, onAnswer, answered, selectedAnswer }) {
  const [showFeedback, setShowFeedback] = useState(false)

  const handleSelectOption = (index) => {
    if (!answered) {
      onAnswer(index)
      setShowFeedback(true)
    }
  }

  const isCorrect = selectedAnswer === question.correctIndex

  return (
    <div className="question-card">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}></div>
      </div>

      <div className="question-header">
        <span className="question-number">Question {questionIndex + 1}/{totalQuestions}</span>
      </div>

      <div className="question-text">
        <h2>{question.question}</h2>
      </div>

      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              answered
                ? index === question.correctIndex
                  ? 'correct'
                  : index === selectedAnswer
                  ? 'incorrect'
                  : ''
                : ''
            } ${answered ? 'disabled' : ''}`}
            onClick={() => handleSelectOption(index)}
            disabled={answered}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="feedback-icon">{isCorrect ? '✅' : '❌'}</div>
          <div className="feedback-text">
            <strong>{isCorrect ? 'Correct!' : 'Incorrect!'}</strong>
            <p>{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
