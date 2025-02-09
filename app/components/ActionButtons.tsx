interface ActionButtonsProps {
  updateScore: (runs: number) => void
  updateWickets: () => void
  updateBallsAndOvers: () => void
  handleWide: () => void
}

export default function ActionButtons({
  updateScore,
  updateWickets,
  updateBallsAndOvers,
  handleWide,
}: ActionButtonsProps) {
  const buttons = [
    {
      label: "6️⃣",
      action: () => {
        updateScore(6)
        updateBallsAndOvers()
      },
    },
    {
      label: "4️⃣",
      action: () => {
        updateScore(4)
        updateBallsAndOvers()
      },
    },
    {
      label: "3️⃣",
      action: () => {
        updateScore(3)
        updateBallsAndOvers()
      },
    },
    {
      label: "2️⃣",
      action: () => {
        updateScore(2)
        updateBallsAndOvers()
      },
    },
    {
      label: "1️⃣",
      action: () => {
        updateScore(1)
        updateBallsAndOvers()
      },
    },
    {
      label: "⚫",
      action: () => {
        updateBallsAndOvers()
      },
    },
    {
      label: "❌",
      action: () => {
        updateWickets()
        updateBallsAndOvers()
      },
    },
    
  ]

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.action}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-2xl transition duration-200"
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

