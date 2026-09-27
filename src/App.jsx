import { useState } from 'react'
import GradeResult from './GradeResult.jsx'

function getGrade(score) {
  if (score >= 80) {
    return {
      grade: 'A',
      message: 'Excellent work! Keep it up!',
      passed: true,
    }
  } else if (score >= 70) {
    return {
      grade: 'B',
      message: 'Good job! You are doing well.',
      passed: true,
    }
  } else if (score >= 60) {
    return {
      grade: 'C',
      message: 'Average score. Try reviewing a little more.',
      passed: true,
    }
  } else if (score >= 50) {
    return {
      grade: 'D',
      message: 'You passed, but it was close. Study more next time.',
      passed: true,
    }
  } else {
    return {
      grade: 'F',
      message: 'You did not pass. Please review the material and try again.',
      passed: false,
    }
  }
}

export default function App() {
  const [score, setScore] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  function handleScoreChange(e) {
    setScore(e.target.value)
    setError('')
  }

  function handleCalculate() {
    if (score === '') {
      setError('Please enter a score first.')
      setResult(null)
      return
    }

    const number = Number(score)

    if (Number.isNaN(number)) {
      setError('Please enter a number.')
      setResult(null)
      return
    }

    if (number < 0 || number > 100) {
      setError('Score must be between 0 and 100.')
      setResult(null)
      return
    }

    setError('')
    setResult({ ...getGrade(number), score: number })
  }

  return (
    <div className="app">
      <h1>Grade Calculator</h1>

      <input
        type="number"
        placeholder="Enter score (0-100)"
        value={score}
        onChange={handleScoreChange}
      />

      <button onClick={handleCalculate}>Calculate Grade</button>

      {error && <p className="error">{error}</p>}

      {result && <GradeResult result={result} />}
    </div>
  )
}
