import { getTopicsForGrade } from '../utils/quizUtils'
import './TopicSelector.css'

export default function TopicSelector({ grade, onSelectTopic, onBack }) {
  const topics = getTopicsForGrade(grade)

  const topicNames = {
    ratios_proportions: '📊 Ratios & Proportions',
    decimals_operations: '🔢 Decimals',
    basic_algebra: '🔤 Basic Algebra',
    integers_operations: '⚖️ Integers',
    fractions_more: '📈 Fractions',
    solving_equations: '✏️ Solving Equations',
    systems_equations: '⚙️ Systems of Equations',
    exponents_roots: '🔋 Exponents & Roots',
    linear_equations_graphing: '📉 Linear Equations',
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
