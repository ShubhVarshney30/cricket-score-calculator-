interface ScoreDisplayProps {
  score: number
  wickets: number
  overs: number
  balls: number
}

export default function ScoreDisplay({ score, wickets, overs, balls }: ScoreDisplayProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 text-center">
      <h2 className="text-4xl font-bold mb-2">
        {score} / {wickets}
      </h2>
      <p className="text-2xl">
        Overs: {overs}.{balls}
      </p>
    </div>
  )
}

