import React from 'react';

const Squere = (props) => {
    const {squere, move} = props
    const style = {border: '1px solid darkgreen', background: 'white', fontfFamily: 'fantasy',
        fontSize: '80px', fontWeight: '800px', cursor: 'pointer' }
    return (
        <div style={style} onClick={() => move(squere.id)}>
            {squere.value}
        </div>
    );
};

export default Squere;