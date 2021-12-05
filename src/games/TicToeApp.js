import React, {useState} from 'react'
import {nanoid} from 'nanoid'
import Board from "./Board";

const TicToeApp = () => {
    const initialBoard = Array(9).fill({}).map(el => ({id: nanoid(), value: null}))
    const [board, setBoard] = useState(initialBoard)
    const move = (id) => {
      const updateMove = board.map(el => el.id === id ? {...el, value: 'X'} : el)
        setBoard(updateMove)
    }
    return (
        <div>
            <Board board={board} move={move}/>
        </div>
    );
};

export default TicToeApp;
