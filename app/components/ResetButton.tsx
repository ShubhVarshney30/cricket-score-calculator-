interface ResetButtonProps {
  resetScore: () => void
}

export default function ResetButton({ resetScore }: ResetButtonProps) {
  return (
    <button
      onClick={resetScore}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
    >
      Reset Match
    </button>
  )
}

