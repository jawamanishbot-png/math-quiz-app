import { useState } from 'react'
import { generateQuiz, calculateScore } from '../utils/quizUtils'
import QuestionCard from './QuestionCard'
import ResultsScreen from './ResultsScreen'
import './Quiz.css'

export default function Quiz({ grade, topic, topicName, onBack }) {
  const [quiz, setQuiz] = useState(() => generateQuiz(grade, topic))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [quizComplete, setQuizComplete] = useState(false)

  const currentQuestion = quiz[currentQuestionIndex]
  const currentAnswered = currentQuestionIndex in answers

  const handleAnswer = (selectedIndex) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: selectedIndex }
    setAnswers(newAnswers)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRetake = () => {
    setQuiz(generateQuiz(grade, topic))
    setCurrentQuestionIndex(0)
    setAnswers({})
    setQuizComplete(false)
  }

  const handleHome = () => {
    onBack()
  }

  if (quizComplete) {
    const score = calculateScore(quiz, answers)
    return (
      <ResultsScreen
        score={score}
        total={quiz.length}
        onRetake={handleRetake}
        onHome={handleHome}
        topicName={topicName}
        gradeName={`Grade ${grade}`}
      />
    )
  }

  return (
    <div className="quiz">
      <div className="quiz-container">
        <QuestionCard
          question={currentQuestion}
          questionIndex={currentQuestionIndex}
          totalQuestions={quiz.length}
          onAnswer={handleAnswer}
          answered={currentAnswered}
          selectedAnswer={answers[currentQuestionIndex]}
        />

        <div className="quiz-actions">
          {currentAnswered && (
            <button className="next-button" onClick={handleNextQuestion}>
              {currentQuestionIndex === quiz.length - 1 ? 'View Results' : 'Next Question'} →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
