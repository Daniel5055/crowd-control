import { useState } from "react";
import { Board, serverPath } from "./App";
import './Game.css'

export default function Game({board, setBoard}: { board: Board[][], setBoard: (b: Board[][]) => void}) {
    const [stage, setStage] = useState('select')

    function toVoting() {
        setStage('vote')
        fetch(serverPath + '/vote', {
            method: 'POST'
        });
    }
    function toResults() {
        setStage('result')
        fetch(serverPath + '/result', {
            method: 'POST'
        }).then((r) => r.json()).then(([x, y]) => {
            board[x][y].score = -1
        });
    }
    function toPicking() {
        setStage('select')
        fetch(serverPath + '/pick', {
            method: 'POST'
        });
    }

    return (
        <>
        {stage === 'select' ? <h2>Select the square you greedy buggers</h2> : stage === 'vote' ? <h2>Vote out a square you ruthless buggers</h2> : <h2>And the results...</h2>}
        <div id='grid'>
            {board.flatMap((r) => r.map((t) => (
                <div id="box">
                    {<h1>{t.score === -1 ? "💀" : t.score}</h1>}
                </div>
            ))) }
        </div>
        {
            stage === 'select' ?
             (<button onClick={toVoting}>On to voting</button>) :
             stage === 'vote' ? (<button onClick={toResults}>On to results</button>) : (<button onClick={toPicking}>On to picking</button>)
        }
        </>
    )
}