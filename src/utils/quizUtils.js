import questionsData from '../data/questions.json'

// Get all topics for a grade
export function getTopicsForGrade(grade) {
  const key = `grade_${grade}`
  if (!questionsData[key]) return []
  return Object.keys(questionsData[key])
}

// Get questions for a specific grade and topic
export function getQuestionsForTopic(grade, topic) {
  const key = `grade_${grade}`
  if (!questionsData[key] || !questionsData[key][topic]) return []
  return questionsData[key][topic]
}

// Shuffle array (Fisher-Yates)
export function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Get a quiz (shuffle and limit to 10 questions)
export function generateQuiz(grade, topic) {
  const questions = getQuestionsForTopic(grade, topic)
  const shuffled = shuffleArray(questions)
  return shuffled.slice(0, 10)
}

// Calculate score
export function calculateScore(quiz, answers) {
  let score = 0
  quiz.forEach((q, index) => {
    if (answers[index] === q.correctIndex) {
      score++
    }
  })
  return score
}

// Get grade letter from percentage
export function getGradeLetter(percentage) {
  if (percentage >= 90) return 'A'
  if (percentage >= 80) return 'B'
  if (percentage >= 70) return 'C'
  if (percentage >= 60) return 'D'
  return 'F'
}

// Format percentage
export function formatPercentage(score, total) {
  return Math.round((score / total) * 100)
}
