import React from 'react';
import Squere from "./Squere";

const Board = (props) => {
    const {board, move} = props
    const style = {weight: '500px', height: '500px', margin: '0 auto',
        display: 'grid', gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'}

    return (
        <div style={style}>
            {board.map(el => <Squere squere={el} move={move} />)}
        </div>
    );
};

export default Board;