export default function GradeResult({ result }) {
  return (
    <div className="result">
      <h2>Your grade: {result.grade}</h2>
      <p>Score: {result.score}</p>
      <p>{result.message}</p>
      <p className={result.passed ? 'pass' : 'fail'}>
        {result.passed ? 'Pass' : 'Fail'}
      </p>
    </div>
  )
}
