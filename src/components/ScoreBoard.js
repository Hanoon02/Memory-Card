import React from 'react';

function ScoreBoard(props){
    return(
        <>
            <div className='flex flex-row items-center w-full' >
                <p className='px-2'>Your Score: {props.score}</p>
                <p className='px-2'>High Score: </p>
            </div>
        </>
    )
}

export default ScoreBoard;