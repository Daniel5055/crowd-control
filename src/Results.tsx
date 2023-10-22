import { useEffect, useState } from "react";
import { serverPath } from "./App";

type Users = {
    [user: string]: {
        score: number
        name: string
        alive: boolean
    }
}

export default function Results() {
    const [users, setUsers] = useState<Users | null>(null)
    useEffect(() => {
        fetch (serverPath + '/score').then((r) => r.json()).then((r) => setUsers(r));
    }, [])

    if (users === null) {
        return <h2>Loading Scores</h2>
    }

    const sorted = Object.values(users).sort((a, b) => b.score - a.score).slice(0, 10);

    return (
        <table>
            <tr>
                <th>Player</th>
                <th>Score</th>
                <th>Alive</th>
            </tr>
            {sorted.map((u, i) => (
                <tr key={i}>
                    <td>{u.name}:</td>
                    <td>{u.score}</td>
                    <td>{!u.alive ? "💀" : "😊"}</td>
                </tr>
            ))}
        </table>
    )
    
}