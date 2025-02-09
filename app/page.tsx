"use client"

import { useState, useEffect } from "react"
import ScoreDisplay from "./components/ScoreDisplay"
import ActionButtons from "./components/ActionButtons"
import ResetButton from "./components/ResetButton"
import Attribution from "./components/Attribution"

export default function CricketScoreCalculator() {
  const [score, setScore] = useState(0)
  const [wickets, setWickets] = useState(0)
  const [overs, setOvers] = useState(0)
  const [balls, setBalls] = useState(0)

  useEffect(() => {
    const savedScore = localStorage.getItem("cricketScore")
    const savedWickets = localStorage.getItem("cricketWickets")
    const savedOvers = localStorage.getItem("cricketOvers")
    const savedBalls = localStorage.getItem("cricketBalls")
    if (savedScore) setScore(Number.parseInt(savedScore))
    if (savedWickets) setWickets(Number.parseInt(savedWickets))
    if (savedOvers) setOvers(Number.parseInt(savedOvers))
    if (savedBalls) setBalls(Number.parseInt(savedBalls))
  }, [])

  useEffect(() => {
    localStorage.setItem("cricketScore", score.toString())
    localStorage.setItem("cricketWickets", wickets.toString())
    localStorage.setItem("cricketOvers", overs.toString())
    localStorage.setItem("cricketBalls", balls.toString())
  }, [score, wickets, overs, balls])

  const updateScore = (runs: number) => {
    setScore((prevScore) => prevScore + runs)
  }

  const updateWickets = () => {
    if(prevWickets===10){
      alert('chutiye kitne players khilvayega')
    }
    setWickets((prevWickets) => prevWickets + 1)
  }

  const updateBallsAndOvers = () => {
    setBalls((prevBalls) => {
      if (prevBalls === 5) {
        setOvers((prevOvers) => prevOvers + 1)
        return 0
      }
      return prevBalls + 1
    })
  }

  const handleWide = () => {
    updateScore(1)
  }

  const resetScore = () => {
    setScore(0)
    setWickets(0)
    setOvers(0)
    setBalls(0)
  }

  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-8">Cricket Score Calculator</h1>
      <ScoreDisplay score={score} wickets={wickets} overs={overs} balls={balls} />
      <ActionButtons
        updateScore={updateScore}
        updateWickets={updateWickets}
        updateBallsAndOvers={updateBallsAndOvers}
        handleWide={handleWide}
      />
      <ResetButton resetScore={resetScore} />
      <Attribution />
    </div>
  )
}

