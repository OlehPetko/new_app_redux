import './App.css';
import TicToeApp from "./games/TicToeApp";
import {useState} from "react";
import Game from "./games/Game";


function App() {
    const [visible, setVisible] = useState('')
    return (<div className="App">
        <h1>GAMES</h1>

        <button onClick={() => setVisible('TicTakToe')}>TicTakToe</button>
        <button onClick={() => setVisible('Game')}>Game</button>
        {visible === 'TicTakToe' && <TicToeApp/>}
        {visible === 'Game' && <Game />}


    </div>);
}

export default App;
