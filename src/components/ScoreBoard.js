import React from 'react';

function ScoreBoard(props){
    return(
        <>
            <div className='w-full text-center txt-4xl' >
                Your Score: {props.score}
            </div>
        </>
    )
}

export default ScoreBoard;