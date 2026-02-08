import { getTopicsForGrade } from '../utils/quizUtils'
import './TopicSelector.css'

export default function TopicSelector({ grade, onSelectTopic, onBack }) {
  const topics = getTopicsForGrade(grade)

  const topicNames = {
    addition: '➕ Addition',
    subtraction: '➖ Subtraction',
    multiplication: '✖️ Multiplication',
    fractions: '📊 Fractions',
    decimals: '🔢 Decimals',
    integers: '⚖️ Integers',
    fractions_advanced: '📈 Advanced Fractions',
    algebra: '🔤 Algebra',
  }

  return (
    <div className="topic-selector">
      <div className="header">
        <h1>Grade {grade} - Select Topic</h1>
        <p>Choose a topic to start your quiz</p>
      </div>

      <div className="topic-grid">
        {topics.map((topic) => (
          <button
            key={topic}
            className="topic-card"
            onClick={() => onSelectTopic(topic)}
          >
            <span className="topic-name">{topicNames[topic] || topic}</span>
          </button>
        ))}
      </div>

      <button className="back-button" onClick={onBack}>
        ← Back
      </button>
    </div>
  )
}
