import { useState } from 'react'
import './App.css'
import { QRCodeCanvas } from 'qrcode.react'
import Start from './Start'
import Game from './Game'

export const serverPath = 'http://localhost:3030'

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
      <h1>Crowd Control</h1>
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
