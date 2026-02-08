import { useState } from 'react'
import GradeSelector from './components/GradeSelector'
import TopicSelector from './components/TopicSelector'
import Quiz from './components/Quiz'
import './App.css'

export default function App() {
  const [screen, setScreen] = useState('gradeSelect') // 'gradeSelect' | 'topicSelect' | 'quiz'
  const [selectedGrade, setSelectedGrade] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedTopicName, setSelectedTopicName] = useState(null)

  const topicNames = {
    addition: 'Addition',
    subtraction: 'Subtraction',
    multiplication: 'Multiplication',
    fractions: 'Fractions',
    decimals: 'Decimals',
    integers: 'Integers',
    fractions_advanced: 'Advanced Fractions',
    algebra: 'Algebra',
  }

  const handleSelectGrade = (grade) => {
    setSelectedGrade(grade)
    setScreen('topicSelect')
  }

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic)
    setSelectedTopicName(topicNames[topic] || topic)
    setScreen('quiz')
  }

  const handleBackToGrades = () => {
    setScreen('gradeSelect')
    setSelectedGrade(null)
    setSelectedTopic(null)
    setSelectedTopicName(null)
  }

  const handleBackToTopics = () => {
    setScreen('topicSelect')
    setSelectedTopic(null)
    setSelectedTopicName(null)
  }

  const handleBackFromQuiz = () => {
    handleBackToGrades()
  }

  return (
    <div className="app">
      {screen === 'gradeSelect' && (
        <GradeSelector onSelectGrade={handleSelectGrade} />
      )}

      {screen === 'topicSelect' && (
        <TopicSelector
          grade={selectedGrade}
          onSelectTopic={handleSelectTopic}
          onBack={handleBackToGrades}
        />
      )}

      {screen === 'quiz' && (
        <Quiz
          grade={selectedGrade}
          topic={selectedTopic}
          topicName={selectedTopicName}
          onBack={handleBackFromQuiz}
        />
      )}
    </div>
  )
}
