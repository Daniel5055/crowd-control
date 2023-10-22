import { useState } from 'react'
import './App.css'
import Start from './Start'
import Game from './Game'

export const serverPath = 'https://db255.teaching.cs.st-andrews.ac.uk/node'

export interface Board {
  score: number
}

function App() {
  const [board, setBoard] = useState<null | Board[][]>(null)

  function start() {
    fetch(serverPath + '/start', {
      method: "POST"
    })
    setBoard([]);
    fetch(serverPath + '/board').then((d) => d.json()).then((b) => setBoard(b));
  }

  // Get qr code
  return (
    <>
      <h1>Trick and Treat</h1>
      {
        board === null ? (
          <Start start={start}/>
        ) : (
          <Game board={board} setBoard={setBoard} />
        )
      }
    </>
  )
}

export default App
